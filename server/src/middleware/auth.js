import jsonwebtoken from 'jsonwebtoken'
import { pool } from './../db/index.js'
import { JWT_SECRET } from './../config.js'

const isAuthenticated = async (req, res, next) => {
  try {
    const session = req.headers.auth
    if (!session) return next('Please login to access the data')
    
    const verify = jsonwebtoken.verify(session, JWT_SECRET)

    const [result] = await pool.query('SELECT id FROM users WHERE username=?', [verify.user])

    if (!result.length) return next('Please login to access the data')

    req.user = result[0].id
    next()
  } catch (error) {
    return next(error)
  }
}

export default isAuthenticated