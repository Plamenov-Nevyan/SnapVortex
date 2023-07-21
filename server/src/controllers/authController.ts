import express, {Express, Request, Response, NextFunction} from "express" 
const router = express.Router()
import {registerUser,loginUser, createSession, getProfileData} from "../services/authServices" 
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



export default router
