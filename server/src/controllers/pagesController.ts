import express, {Express, Request, Response, NextFunction} from "express" 
const router = express.Router()
import multer, {Multer} from "multer"
const storage = multer.memoryStorage()
const upload = multer({storage: storage})
import { createPage, getPageProfile } from "../services/pagesServices"
import { Session } from "../types/Session"
import { User } from "../types/User"

router.post('/create/:userId', (req: Request, res:Response) => {
    createPage(req.body, req.params.userId)
    .then(newPage => res.json(newPage))
})

router.get('/:pageId', (req: Request, res:Response) => {
    getPageProfile(req.params.pageId)
    .then(page => res.json(page))
})

export default router