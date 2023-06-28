import express from 'express'
import userRouter from './users.js'
import authorRouter from './authors.js'
// import favoritesRouter from './favs.js'


let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.use('/favorites',favoritesRouter)
router.use('/auth',userRouter)
router.use('/authors',authorRouter)

export default router