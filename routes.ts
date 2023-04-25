import express from "express";
import PostController from "./Controllers/PostController";

const router = express.Router();

router.get('/', PostController.findProduct)
router.get('/getAll', PostController.getAllProducts)
router.post('/',PostController.addProduct)
router.put('/', PostController.updateProduct)

export default router;