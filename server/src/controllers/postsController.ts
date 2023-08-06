import express, {Express, Request, Response, NextFunction} from "express" 
const router = express.Router()
import { getPostsData, createPost, editPost, deletePost } from "../services/postsServices"
import multer, {Multer} from "multer"
const storage = multer.memoryStorage()
const upload = multer({storage: storage})

router.get('/:userId', async (req: Request, res:Response) => {
    try{
        let postsData = await getPostsData(req.params.userId)
        res.json(postsData)
      }catch(err){
        console.log(err)
      }
})

router.post('/create/:posterType/:posterId',upload.single('image'), async (req: Request, res: Response) => {
    try{
        let newPost = req.file 
        ? await createPost(JSON.parse(req.body.createData), req.params.posterType, req.params.posterId, req.file) 
        : await createPost(JSON.parse(req.body.createData), req.params.posterType, req.params.posterId)
        res.json([newPost])
    }catch(err){
        console.log(err)
    }
})

router.post('/edit/:postId', async(req: Request, res: Response) => {
    try{
        let updatedPost = await editPost(req.body, req.params.postId)
        res.json([updatedPost])
    }catch(err){
        console.log(err)
    }
})

router.delete('/delete/:postId', async(req: Request, res: Response) => {
    try{
      await deletePost(req.params.postId)    
      res.end()    
    }catch(err){
        console.log(err)
    }
})

router.post('/create/')
export default router