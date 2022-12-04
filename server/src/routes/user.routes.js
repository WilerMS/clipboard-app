import { Router } from 'express'
import jsonwebtoken from 'jsonwebtoken'

import { pool } from './../db/index.js'
import { JWT_SECRET } from './../config.js'

const router = Router()

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ message: 'Please enter username and password' })
    }

    const query = `SELECT username, password FROM users WHERE username=?`
    const [result] = await pool.query(query, [username])
    if (!result.length) {
      return res.status(401).json({
        message: 'Username or password incorret',
      })
    }

    const isPasswordCorrect = (() => {
      const { password: db_password } = jsonwebtoken.verify(result[0].password, JWT_SECRET)
      return db_password === password
    })()

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: 'Username or password incorret',
      })
    }

    const token = jsonwebtoken.sign({ user: result[0].username }, JWT_SECRET)
    return res.cookie('session',token).json({
      message: 'Login successfully',
      token
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ error });
  }
})

router.post('/register', async (req, res) => {
  // Getting username and password
  const { username, password } = req.body
  if (!username || !password) {
    return res.json({ message: 'Missing data...' })
  }
  
  try {
    const token = jsonwebtoken.sign({ password }, JWT_SECRET)
    const query = `INSERT INTO users(username, password) VALUES (?, ?)`
    await pool.query(query, [username, token])

    return res.send('User registration successfully')
  } catch (error) {
    console.log({error})
    return res.json({
      message: 'An error has ocurred. Please, try it later'
    })
  }
})

export default router