import express from 'express'
import controller from '../controllers/auth/auth.js'
import validator from '../middlewares/validator.js'
import schemaSignUp from '../schemas/usersSignUp.js'
import schemaSignIn from '../schemas/usersSignIn.js'
import accountExistsSignUp from '../middlewares/accountExistsSignUp.js'
import accountExistsSignIn from '../middlewares/accountExistsSignIn.js'
import accountHasBeenVerified from '../middlewares/accountHasBeenVerified.js'
import passwordIsOk from '../middlewares/passwordIsOk.js'
import passport from '../middlewares/passport.js'
import authorRole from '../controllers/auth/update.js'
import destroyUser from '../controllers/auth/destroy.js'

const { sign_up, sign_in, sign_out, token } = controller
const { update } = authorRole
const { destroy } = destroyUser
let router = express.Router();

router.post('/signup', validator(schemaSignUp), accountExistsSignUp, sign_up)
router.post('/signin', validator(schemaSignIn), accountExistsSignIn, accountHasBeenVerified, passwordIsOk, sign_in)
router.post('/token', passport.authenticate('jwt', { session: false }), token)
router.post('/signout', passport.authenticate('jwt', { session: false }), sign_out)
router.put('/user/:id', passport.authenticate('jwt', { session: false }), update)
router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy)

export default router
