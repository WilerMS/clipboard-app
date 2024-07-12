import { turso } from '../db/index.js'

export const getTemplatesController = async (req, res) => {
  const { rows: result } = await turso.execute({
    sql: "SELECT * FROM templates WHERE user=?",
    args: [req.user],
  })
  res.json(result)
}

export const postTemplatesController = async (req, res) => {
  const { body, user } = req
  const data = body.map(template => ([template.title, template.position, user]))

  try {
    if (data.length > 100) throw new Error('Max template limit exceeded. Max number of templates: 40 ')

    await turso.execute({
      sql: "DELETE FROM templates WHERE user=?",
      args: [req.user],
    })
    await turso.execute({
      sql: "INSERT INTO templates(title, position, user) VALUES ?",
      args: [data],
    })
    const { rows: result } = await turso.execute({
      sql: "SELECT * FROM templates WHERE user=?",
      args: [req.user],
    });
    res.json(result)
  } catch (err) {
    res.json({
      error: true,
      message: err.message
    })
  }
}
