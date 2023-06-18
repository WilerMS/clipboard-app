import { initialNotes } from '../constants/initialNote.js'
import { pool } from '../db/index.js'

export const getNotesController = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM notes WHERE user=?', [req.user])
  res.json(result[0]?.text ?? initialNotes)
}

export const postNotesController = async (req, res) => {
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
}
