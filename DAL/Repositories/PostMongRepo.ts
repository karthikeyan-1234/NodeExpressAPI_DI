import IPostRepo from "../../Contracts/IPostRepo";
import Post from "../../Models/Post";

export class PostMongoRepo implements IPostRepo{
   
    find(id: number): Post {
        const newPost = new Post();
        newPost.id = id + 1;
        return newPost;
    }
}