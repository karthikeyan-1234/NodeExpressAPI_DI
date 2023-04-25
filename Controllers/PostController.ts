import container from "../container";
import { Request, Response } from 'express';
import Post from "../Models/Post";

const postService = container.resolve('IPostService');

const findProduct = async function (req: Request ,res: Response){

    console.log("---Controller----")

    const result = await postService.findPost(15);

    if(result != null)
    {
        console.log("Result obtained in Controller");
        console.log(result);
        res.status(200).send(JSON.stringify(result));
    }
    else
        res.status(404).send("Unable to find data");

}

const addProduct = async function(req: Request, res: Response){
    const result = await postService.addPost(req.body);

    if(result != null)
    {
        console.log(result);
        res.status(200).send(JSON.stringify(result));
    }
    else
        res.status(422).send("Unable to add data");
}

const updateProduct = async function(req: Request,res: Response){

    console.log("---Update Product endpoint---")
    console.log(req.body);

    const result = await postService.updatePost(req.body);

    if(result != null)
    {
        console.log(result);
        res.status(200).send(JSON.stringify(result));
    }
    else
        res.status(422).send("Unable to update data");
}

const getAllProducts = async function(req: Request, res: Response){
    console.log("---Get all Products endpoint---");
    
    const result = await postService.getAllPosts();

    if(result != null)
    {
        console.log(result);
        res.status(200).send(JSON.stringify(result));
    }
    else
        res.status(404).send("No records found");
}

const deleteProduct = async function(req: Request, res: Response){
    console.log("---Delete Product endpoint---");
    
    const result = await postService.deletePost(req.body);

    if(result != false)
    {
        console.log(result);
        res.status(204).send(JSON.stringify(result));
    }
    else
        res.status(404).send("Unable to delete data. No record found");   
}

export default {findProduct,addProduct, updateProduct, getAllProducts, deleteProduct};