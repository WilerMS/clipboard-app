import { Router } from 'express'

import { pool } from './../db/index.js'
import isAuthenticated from './../middleware/auth.js'

const router = Router()

router.get('/templates', isAuthenticated, async (req, res) => {
  console.log({ user: req.user })
  const [result] = await pool.query('SELECT * FROM templates WHERE user=?', [req.user])
  console.log(result)
  res.json(result)
})

router.post('/templates', isAuthenticated, async (req, res) => {
  const { body, user } = req
  const data = body.map(template => ([template.title, template.position, user]))

  try {
    if (data.length > 40) throw new Error('Max template limit exceeded. Max number of templates: 40 ')

    await pool.query('DELETE FROM templates WHERE user=?', [req.user])
    await pool.query('INSERT INTO templates(title, position, user) VALUES ?', [data])
    const [result] = await pool.query('SELECT * FROM templates WHERE user=?', req.user)
    res.json(result)
  } catch (err) {
    res.json({
      error: true,
      message: err.message
    })
  }
})

export default router
