import IPostRepo from "../../Contracts/IPostRepo";
import Post from "../../Models/Post";

export class PostSQLRepo implements IPostRepo{
   
    find(id: number): Post | null {
        const newPost = new Post(id);
        newPost.id = id;
        return null;
    }
}