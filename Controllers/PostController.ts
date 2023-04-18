import container from "../container";
import { Request, Response } from 'express';
import Post from "../Models/Post";

const postService = container.resolve('IPostService');

const findProduct = async function (req: Request ,res: Response){

    console.log("---Controller----")

    const result = await postService.findPost(1);

    if(result != null)
    {
        console.log("Result obtained in Controller");
        console.log(result);
        res.status(200).send(JSON.stringify(result));
    }
    else
        res.status(404).send("Unable to find data");

}

export default findProduct;