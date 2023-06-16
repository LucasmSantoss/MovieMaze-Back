import express from 'express'
import allController from '../controllers/category/all.js'
import createController from '../controllers/category/create.js'

const { all } = allController
const { create } = createController

let router = express.Router();

router.get('/', all)
router.post('/', create)

export default router