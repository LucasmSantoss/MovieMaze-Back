import express from "express";
import passport from "../middlewares/passport.js";
import payment from  "../controllers/mercadopago/create.js";

let router = express.Router()

const {create} = payment

router.post("/",  create)

export default router