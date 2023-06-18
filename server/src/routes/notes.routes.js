import { Router } from 'express'
import { getNotesController, postNotesController } from '../controllers/notes.controller.js'
import isAuthenticated from './../middleware/auth.js'

const router = Router()

router.get('/notes', isAuthenticated, getNotesController)
router.post('/notes', isAuthenticated, postNotesController)

export default router
