import express from "express"
import findProduct from "./Controllers/PostController";

const router = express.Router();

router.get('/', findProduct)

export default router;