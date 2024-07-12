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

    console.log({ user: req.user })

    await turso.execute({
      sql: "DELETE FROM templates WHERE user=?",
      args: [req.user],
    })

    const valuesPlaceholder = data.map(() => "(?, ?, ?)").join(", ")
    const flatData = data.flat()

    console.log('HECHO: DELETE FROM templates WHERE user=?')
    await turso.execute({
      sql: `INSERT INTO templates(title, position, user) VALUES ${valuesPlaceholder}`,
      args: flatData,
    })

    console.log('HECHO: INSERT INTO templates(title, position, user) VALUES ?')
    const { rows: result } = await turso.execute({
      sql: "SELECT * FROM templates WHERE user=?",
      args: [req.user],
    });

    console.log('HECHO: SELECT * FROM templates WHERE user=?')
    res.json(result)
  } catch (err) {
    console.log({ err })
    res.json({
      error: true,
      message: err.message
    })
  }
}
