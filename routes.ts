import express from "express"
import container from './container';
import findProduct from "./Controllers/PostController";

const router = express.Router();
const postService = container.resolve('IPostService');

router.get('/', findProduct)

export default router;