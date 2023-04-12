import IPostRepo from "../../Contracts/IPostRepo";
import Post from "../../Models/Post";

export class PostSQLRepo implements IPostRepo{
   
    find(id: number): Post {
        const newPost = new Post();
        newPost.id = id;
        return newPost;
    }
}