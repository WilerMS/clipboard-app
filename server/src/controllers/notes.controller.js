import { initialNotes } from '../constants/initialNote.js'
import { pool } from '../db/index.js'

export const getNotesController = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM notes WHERE user=?', [req.user])
  res.json(result[0]?.text ?? initialNotes)
}

export const postNotesController = async (req, res) => {
  const { body, user } = req

  try {
    const [result] = await pool.query('SELECT * FROM notes WHERE user=?', req.user)

    const query = result.length
      ? 'UPDATE notes SET text=? WHERE user=?'
      : 'INSERT INTO notes (text, user) values(?, ?)'

    await pool.query(query, [JSON.stringify(body), user])

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
}
