import { turso } from '../db/index.js';

export const getLinksController = async (req, res) => {
  try {
      const [links] = await turso.execute({
        sql: "SELECT * FROM links WHERE user = ?",
        args: [req.user],
      });
      res.json(links)
  } catch (err) {
      res.status(500).json({ error: true, message: err.message })
  }
}