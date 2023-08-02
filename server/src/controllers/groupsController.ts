import express, {Express, Request, Response, NextFunction} from "express" 
const router = express.Router()
import multer, {Multer} from "multer"
const storage = multer.memoryStorage()
const upload = multer({storage: storage})
import { createGroup, getGroupProfile, editGroupData, updateCoverPicture } from "../services/groupsServices"
import { Session } from "../types/Session"
import { User } from "../types/User"

router.post('/create/:userId', (req: Request, res:Response) => {
    createGroup(req.body, req.params.userId)
    .then(newGroup => res.json(newGroup))
})

router.get('/:groupId', (req: Request, res:Response) => {
    getGroupProfile(req.params.groupId)
    .then(group => res.json(group))
})

router.post('/edit/:groupId', (req: Request, res:Response) => {
    editGroupData(req.body, req.params.groupId)
    .then(updatedGroup => res.json(updatedGroup))
})

router.post('/cover-picture/:groupId', upload.single('coverPicture'), async (req: Request, res:Response) => {
    try{
        let coverPicture = await updateCoverPicture(req.file, req.params.groupId)
        res.json(coverPicture)
      }catch(err){
        console.log(err)
      }
})

export default router