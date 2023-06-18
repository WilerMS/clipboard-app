import { Router } from 'express'
import {
  deleteContactController,
  getContactsController,
  postContactsController,
  putContactController
} from '../controllers/contacts.controller.js'
import isAuthenticated from './../middleware/auth.js'

const router = Router()

router.get('/contacts', isAuthenticated, getContactsController)
router.post('/contacts', isAuthenticated, postContactsController)
router.put('/contacts/:id', isAuthenticated, putContactController)
router.delete('/contacts/:id', isAuthenticated, deleteContactController)

export default router
