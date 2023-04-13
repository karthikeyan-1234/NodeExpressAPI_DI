import container from "../container";
import { Request, Response } from 'express';

const postService = container.resolve('IPostService');

const findProduct = async function (req: Request ,res: Response){
    const result = postService.findPost(1);
    console.log(result);
    res.status(200).send(result);
}

export default findProduct;