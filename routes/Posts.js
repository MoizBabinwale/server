import express from 'express'

import { Pimages, getAllImage, deletePost, } from '../controllers/Posts.js' 
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/post', auth, Pimages)
router.get('/get', getAllImage)
router.delete('/delete/:id', auth, deletePost );

export default router