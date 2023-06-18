import { Router } from 'express'
import { getTemplatesController, postTemplatesController } from '../controllers/templates.controller.js'
import isAuthenticated from './../middleware/auth.js'

const router = Router()

router.get('/templates', isAuthenticated, getTemplatesController)
router.post('/templates', isAuthenticated, postTemplatesController)

export default router
