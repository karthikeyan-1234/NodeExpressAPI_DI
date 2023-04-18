import IPostRepo from "../../Contracts/IPostRepo";
import Post from "../../Models/Post";

export class PostMongoRepo implements IPostRepo{
   
    find(id: number): Post | null {
        const newPost = new Post(id);
        newPost.id = id + 1;
        return newPost;
        //return null;
    }
}