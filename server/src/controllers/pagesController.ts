import express, {Express, Request, Response, NextFunction} from "express" 
const router = express.Router()
import multer, {Multer} from "multer"
const storage = multer.memoryStorage()
const upload = multer({storage: storage})
import { createPage, getPageProfile, editPageData, updateCoverPicture, updateProfilePicture } from "../services/pagesServices"
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

router.post('/edit/:pageId', (req: Request, res:Response) => {
    editPageData(req.body, req.params.pageId)
    .then(updatedPage => res.json(updatedPage))
})

router.post('/cover-picture/:pageId', upload.single('coverPicture'), async (req: Request, res:Response) => {
    try{
        let coverPicture = await updateCoverPicture(req.file, req.params.pageId)
        res.json(coverPicture)
      }catch(err){
        console.log(err)
      }
})

router.post('/profile-picture/:pageId', upload.single('profilePicture'), async (req: Request, res:Response) => {
    try{
        let profilePicture = await updateProfilePicture(req.file, req.params.pageId)
        res.json(profilePicture)
      }catch(err){
        console.log(err)
      }
})

export default router