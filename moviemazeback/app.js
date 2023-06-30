import express from 'express'
import 'dotenv/config.js'
import './config/database.js' //requiero la configuracion de la db
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { __dirname } from './utils.js'
import indexRouter from './routes/index.js'
import cors from 'cors'
import { errorHandler, errorNotFound } from './middlewares/error.js'
import morgan from 'morgan'
import bodyParser from "body-parser";

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', indexRouter);

app.use(errorNotFound)
app.use(errorHandler)

export default app