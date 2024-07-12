import { turso } from '../db/index.js'
import { lwr } from '../utils/index.js'

export const getContactsController = async (req, res) => {
  try {
    const { rows: contacts } = await turso.execute({
      sql: "SELECT * FROM contacts WHERE user=?",
      args: [req.user],
    })


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

    await turso.execute({
      sql: query,
      args: [lwr(name), number, lwr(country), req.user],
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

export const putContactController = async (req, res) => {
  const { id } = req.params
  const { name, number, country } = req.body

  try {

    const nameStr = !!name ? 'name=?' : null 
    const numberStr = !!number ? 'number=?' : null 
    const countryStr = !!country ? 'country=?' : null 

    const sets = [nameStr, numberStr, countryStr].filter(Boolean)
    const args =  [name, number, country].filter(Boolean)

    const query = `
      UPDATE contacts
      SET ${sets.join(',')} 
      WHERE id=?
    `
    await turso.execute({
      sql: query,
      args: [...args, id],
    })

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
    await turso.execute({
      sql: "DELETE FROM contacts WHERE id=?",
      args: [id],
    })

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
