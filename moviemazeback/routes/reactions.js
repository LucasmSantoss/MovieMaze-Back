import express from 'express'
import validator from '../middlewares/validator.js'
import reactionSchema from '../schemas/reactions.js'
import createReaction from '../controllers/reactions/create.js'
import passport from "../middlewares/passport.js";
import readReaction from '../controllers/reactions/read.js'
import oppositeReaction from '../middlewares/reactions/oppositeReaction.js'

let router = express.Router()

const {create} = createReaction
const {read} = readReaction

router.post('/', passport.authenticate('jwt',{session:false}), validator(reactionSchema), oppositeReaction, create)
router.get('/', passport.authenticate('jwt',{session:false}), read)

export default router