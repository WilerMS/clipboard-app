import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { turso } from './db/index.js'

import templatesRouter from './routes/templates.routes.js'
import userRouter from './routes/user.routes.js'
import notesRouter from './routes/notes.routes.js'
import contactsRouter from './routes/contacts.routes.js'
import { PORT } from './config.js'

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(logger('tiny'))
app.use(cookieParser())

// Routes
app.use('/', templatesRouter)
app.use('/', userRouter)
app.use('/', notesRouter)
app.use('/', contactsRouter)
app.get('/', (req, res) => {
  res.send('Welcome')
})

const main = async () => {
  const query = 'SELECT username, password FROM users'
    const { rows: result } = await turso.execute(query);
    console.log(result)
}

main()

app.listen(PORT)
console.log('Server on port ' + PORT)
