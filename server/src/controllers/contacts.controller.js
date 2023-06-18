import { pool } from '../db/index.js'
import { lwr } from '../utils/index.js'

export const getContactsController = async (req, res) => {
  const [contacts] = await pool.query('SELECT * FROM contacts WHERE user=?', [req.user])

  const dataToSend = contacts?.reduce((acc, curr) => ({
    ...acc,
    [curr.country]: [
      ...(acc[curr.country] ?? []),
      curr
    ]
  }), {})

  res.json(dataToSend ?? {})
}

export const postContactsController = async (req, res) => {
  const { name, number, country } = req.body

  const query = 'INSERT INTO contacts (name, number, country, user) values(?, ?, ?, ?)'

  await pool.query(query, [lwr(name), number, lwr(country), req.user])

  return res.json({
    message: 'Added successfully'
  })
}

export const putContactController = async (req, res) => {
  const { id } = req.params
  const { name, number, country } = req.body

  const query = 'UPDATE contacts SET ? WHERE ?'

  const obj = {
    ...!!name && { name },
    ...!!number && { number },
    ...!!country && { country }
  }

  await pool.query(query, [obj, { id }])

  return res.json({
    message: 'Updated successfully'
  })
}

export const deleteContactController = async (req, res) => {
  const { id } = req.params

  await pool.query('DELETE FROM contacts WHERE ?', [{ id }])

  return res.json({
    message: 'deleted successfully'
  })
}
