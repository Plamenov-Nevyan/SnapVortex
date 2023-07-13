import express, {Express, Request, Response, NextFunction} from "express" 
const router = express.Router()
import { sendEmail } from "../services/emailServices"


router.post('/send', async (req, res) => {
try{
   let isEmailValid = true // await emailServices.checkIfEmailExists(req.body.sender)
         // .message === 'Success'
   if(isEmailValid){
      sendEmail(req.body)
      res.json({message : 'Success'})
   }
   else {
      // throw {message : isEmailValid.message}
   }
}
catch(err){
      res.status(400).json({message : err.message})
    }
})

export default router