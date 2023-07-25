import express, {Express, Request, Response, NextFunction} from "express" 
const router = express.Router()
import multer, {Multer} from "multer"
const storage = multer.memoryStorage()
const upload = multer({storage: storage})
import {registerUser,loginUser, createSession, getProfileData, updateProfileData} from "../services/authServices" 
import { Session } from "../types/Session"
import { User } from "../types/User"

router.post('/register', (req: Request, res: Response) => {
  registerUser(req.body)
  .then((newUser) => {
    let session:Session = createSession(
      newUser.username, 
      newUser.email, 
      newUser._id,
    )
    res.json(session)
})
  .catch(err => res.status(err.status || 400).json({message: err.message}))
})

router.post('/login', (req: Request, res: Response) => {
   loginUser(req.body)
   .then((session: Session) => res.json(session))
   .catch(err => res.status(err.status || 400).json({message: err.message}))
})

router.get('/profile/:id', (req: Request, res: Response) => {
  getProfileData(req.params.id)
  .then((profileData: User) => res.json(profileData))
  .catch(err => res.status(err.status || 400).json({message: err.message}))
})

router.post('/profile/update/:id', upload.single('preview'), async (req: Request, res: Response) => {
  try{
    let user = await updateProfileData(JSON.parse(req.body.editData), req.params.id, req.file)
    res.json(user)
  }catch(err){
    console.log(err)
  }
  // updateProfileData(req.body, req.params.id, req.file)
  // .then((profileData: User) => res.json(profileData))
  // .catch(err => res.status(err.status || 400).json({message: err.message}))
})



export default router
