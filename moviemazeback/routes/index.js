import express from 'express'
import userRouter from './users.js'
import authorRouter from './authors.js'
import reactionsRouter from './reactions.js'


let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/auth',userRouter)
router.use('/authors',authorRouter)
router.use('/reactions', reactionsRouter)

export default router