import { Router } from 'express'
import { initialNotes } from './../constants/initialNote.js'

import { pool } from './../db/index.js'
import isAuthenticated from './../middleware/auth.js'

const router = Router()

router.get('/notes', isAuthenticated, async (req, res) => {
  console.log({user: req.user})
  const [result] = await pool.query('SELECT * FROM notes WHERE user=?', [req.user])
  console.log(result)
  res.json(result[0]?.text ?? initialNotes)
})

router.post('/notes', isAuthenticated, async (req, res) => {
  const { body, user } = req

  try {
    const [result] = await pool.query(`SELECT * FROM notes WHERE user=?`, req.user)

    const query = Boolean(result.length)
      ? `UPDATE notes SET text=? WHERE user=?`
      : `INSERT INTO notes (text, user) values(?, ?)`
    
    const response = await pool.query(query, [JSON.stringify(body), user])

    console.log({ result, response })

    return res.json({
      message: 'Added successfully'
    })

  } catch (err) {
    console.log({ err })
    res.json({
      error: true,
      message: err.message
    })
  }
})

export default router

