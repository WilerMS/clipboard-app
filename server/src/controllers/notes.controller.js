import { initialNotes } from '../constants/initialNote.js'
import { turso } from '../db/index.js'

export const getNotesController = async (req, res) => {
  const { rows: result } = await turso.execute({
    sql: "SELECT * FROM notes WHERE user=?",
    args: [req.user],
  });
  
  res.json(result[0]?.text ?? initialNotes)
}

export const postNotesController = async (req, res) => {
  const { body, user } = req

  try {
    const { rows: result } = await turso.execute({
      sql: "SELECT * FROM notes WHERE user=?",
      args: [req.user],
    })

    const query = result.length
      ? 'UPDATE notes SET text=? WHERE user=?'
      : 'INSERT INTO notes (text, user) values(?, ?)'

    await turso.execute({
      sql: query,
      args: [JSON.stringify(body), user],
    })

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
