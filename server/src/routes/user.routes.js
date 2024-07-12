import { Router } from 'express'
import jsonwebtoken from 'jsonwebtoken'

import { turso } from './../db/index.js'
import { JWT_SECRET } from './../config.js'
import { UnauthorizedError, ValidationError } from '../errors/errors.js'

const router = Router()

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body

    if (!username || !password) throw new UnauthorizedError('Please enter username and password')

    const query = 'SELECT username, password FROM users WHERE username=?'
    const { rows: result } = await turso.execute({
      sql: query,
      args: [username],
    });

    if (!result.length) throw new UnauthorizedError('Username or password incorret')

    const isPasswordCorrect = (() => {
      const { password: dbPassword } = jsonwebtoken.verify(result[0].password, JWT_SECRET)
      return dbPassword === password
    })()

    if (!isPasswordCorrect) throw new UnauthorizedError('Username or password incorret')

    const token = jsonwebtoken.sign({ user: result[0].username }, JWT_SECRET)
    return res.json({ message: 'Login successfully', token })
  } catch (error) {
    return res
      .status(400)
      .json({
        error: true,
        message: error
      })
  }
})

router.post('/register', async (req, res) => {
  // Getting username and password
  const { username, password } = req.body

  if (!username || !password) throw new ValidationError('Missing data...')

  try {
    const token = jsonwebtoken.sign({ password }, JWT_SECRET)
    const query = 'INSERT INTO users(username, password) VALUES (?, ?)'
    await turso.execute({
      sql: query,
      args: [username, token],
    });

    return res.json({ message: 'User registration successfully' })
  } catch (error) {
    console.log(error)
    return res
      .status(400)
      .json({
        error: true,
        ...error
      })
  }
})

export default router
