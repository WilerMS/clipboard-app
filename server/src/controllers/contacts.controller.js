import { pool } from '../db/index.js'
import { lwr } from '../utils/index.js'

export const getContactsController = async (req, res) => {
  try {
    const [contacts] = await pool.query('SELECT * FROM contacts WHERE user=?', [
      req.user
    ])

    const dataToSend = Object.values(
      contacts?.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.country]: {
            ...acc[curr.country],
            country: curr.country,
            contacts: [...(acc[curr.country]?.contacts ?? []), curr]
          }
        }),
        {}
      )
    )

    const dataToSendWithKeys = dataToSend.map((data) => {
      return {
        ...data,
        keys: [
          data.country,
          ...data.contacts.map((i) => [i.name, `${i.number}`]).flat()
        ]
      }
    })

    res.json(dataToSendWithKeys ?? [])
  } catch (err) {
    console.log({ err })
    res.json({
      error: true,
      message: err.message
    })
  }
}

export const postContactsController = async (req, res) => {
  const { name, number, country } = req.body

  try {
    const query =
      'INSERT INTO contacts (name, number, country, user) values(?, ?, ?, ?)'

    await pool.query(query, [lwr(name), number, lwr(country), req.user])

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

export const putContactController = async (req, res) => {
  const { id } = req.params
  const { name, number, country } = req.body

  try {
    const query = 'UPDATE contacts SET ? WHERE ?'

    const obj = {
      ...(!!name && { name }),
      ...(!!number && { number }),
      ...(!!country && { country })
    }

    await pool.query(query, [obj, { id }])

    return res.json({
      message: 'Updated successfully'
    })
  } catch (err) {
    console.log({ err })
    res.json({
      error: true,
      message: err.message
    })
  }
}

export const deleteContactController = async (req, res) => {
  const { id } = req.params

  try {
    await pool.query('DELETE FROM contacts WHERE ?', [{ id }])

    return res.json({
      message: 'deleted successfully'
    })
  } catch (err) {
    console.log({ err })
    res.json({
      error: true,
      message: err.message
    })
  }
}
