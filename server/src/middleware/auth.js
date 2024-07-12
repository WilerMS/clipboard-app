import jsonwebtoken from 'jsonwebtoken'
import { turso } from './../db/index.js'
import { JWT_SECRET } from './../config.js'

const isAuthenticated = async (req, res, next) => {
  try {
    const session = req.headers.authorization
    if (!session) return next('Please login to access the data')


    const verify = jsonwebtoken.verify(session, JWT_SECRET)

    const { rows: result } = await turso.execute({
      sql: "SELECT id FROM users WHERE username=?",
      args: [verify.user],
    });

    if (!result.length) return next('Please login to access the data')

    req.user = result[0].id
    next()
  } catch (error) {
    return next(error)
  }
}

export default isAuthenticated
