import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import templatesRouter from './routes/templates.routes.js'
import userRouter from './routes/user.routes.js'
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
app.get('/', (req, res) => {
  res.send('Welcome')
})

app.listen(PORT)
console.log('Server on port ' + PORT)
