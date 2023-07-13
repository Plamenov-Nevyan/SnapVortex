import express, { Express } from "express";
import authController from "../controllers/authController"
import emailController from "../controllers/emailController"
const router = express.Router()

router.use('/', authController)
router.use('/email', emailController)

export default router