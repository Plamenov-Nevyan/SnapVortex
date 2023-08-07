import express, {Express, Request, Response, NextFunction} from "express" 
const router = express.Router()
import { getPostsData, createPost, editPost, deletePost, likePost, dislikePost } from "../services/postsServices"
import { createComment } from "../services/commentServices"
import multer, {Multer} from "multer"
const storage = multer.memoryStorage()
const upload = multer({storage: storage})

router.get('/:userId/:groupId', async (req: Request, res:Response) => {
    try{
        let postsData = req.params.userId !== '_' ? await getPostsData(req.params.userId, '') : await getPostsData('', req.params.groupId)
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

router.get('/like/:postId/:userId', async(req: Request, res: Response) => {
    try{
      let likedPost = await likePost(req.params.postId, req.params.userId)    
      res.json([likedPost])    
    }catch(err){
        console.log(err)
    }
})

router.get('/dislike/:postId/:userId', async(req: Request, res: Response) => {
    try{
      let dislikedPost = await dislikePost(req.params.postId, req.params.userId)    
      res.json([dislikedPost])    
    }catch(err){
        console.log(err)
    }
})

router.post('/comment/:postId/:userId', upload.single('image'), async (req: Request, res: Response) => {
    try {
        let commentedPost = await createComment(
            req.params.postId, 
            req.params.userId,
            JSON.parse(req.body.createData),
            req.file
        )
        res.json([commentedPost])
    }catch(err){
        console.log(err)
    }
})
export default router