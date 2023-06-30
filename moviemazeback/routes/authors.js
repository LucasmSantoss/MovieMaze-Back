import express from 'express'
import controller from '../controllers/authors/create.js';
import readController from '../controllers/authors/get_one.js'
import finds_id from '../middlewares/auth/finds_id.js';
import passport from '../middlewares/passport.js';
import validator from '../middlewares/validator.js';
import schemaAuthors from '../schemas/authors.js'
import meController from '../controllers/authors/get_me.js'
import read_allController from '../controllers/authors/read_all.js'
import is_active from "../middlewares/authors/is_active.js";
import updateController from '../controllers/authors/update.js'
import schemaUpdate from '../schemas/authorsUpdate.js';
import alreadyExists from '../middlewares/authors/alreadyExists.js';
import readActive from '../controllers/authors/read_all_active.js'
import updateActive from '../controllers/authors/update_active.js'

const { me } = meController;
const { create } = controller
const { read_one } = readController
const { read_all } = read_allController
const { update } = updateController
const { read_all_active } = readActive
const { update_active } = updateActive

let router = express.Router();

router.post('/', passport.authenticate("jwt", { session:false }), validator(schemaAuthors), alreadyExists, create)
router.get("/authors_me/me", passport.authenticate("jwt", { session:false }), finds_id, me );
router.put("/authors_me/me", passport.authenticate("jwt", { session:false }),validator(schemaUpdate), finds_id,is_active, update )
router.get('/', read_all )

router.get('/admin', read_all_active)
router.put('/admin/:id',  update_active)
router.get('/:id', passport.authenticate("jwt", { session: false }), read_one)
export default router