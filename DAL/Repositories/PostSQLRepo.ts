import IPostRepo from "../../Contracts/IPostRepo";
import Post from "../../Models/Post";

export class PostSQLRepo implements IPostRepo{
   
    async find(id: number): Promise<Post> {
        const newPost = new Post(id);
        newPost.id = id;
        return newPost;
    }
}