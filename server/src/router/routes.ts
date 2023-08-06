import express, { Express } from "express";
import authController from "../controllers/authController"
import emailController from "../controllers/emailController"
import groupsController from "../controllers/groupsController"
import pagesController from "../controllers/pagesController"
import postsController from "../controllers/postsController"
const router = express.Router()

router.use('/', authController)
router.use('/email', emailController)
router.use('/groups', groupsController)
router.use('/pages', pagesController)
router.use('/posts', postsController)

export default router