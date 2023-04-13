import express from "express"
import container from './container';

const router = express.Router();
const postService = container.resolve('IPostService');

router.get('/', (req, res) => {
    const result = postService.findPost(1);
    console.log(result);
    res.send('Hello World  !!!!')
  })

export default router;