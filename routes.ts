import express from "express";
import PostController from "./Controllers/PostController";

const router = express.Router();

router.get('/find', PostController.findProduct)
router.get('/getAll', PostController.getAllProducts)
router.post('/',PostController.addProduct)
router.put('/', PostController.updateProduct)
router.delete('/',PostController.deleteProduct)

export default router;