import IPostRepo from "../../Contracts/IPostRepo";
import Post from "../../Models/Post";

export class PostSQLRepo implements IPostRepo{
    delete(delPost: Post): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<Post[] | null> {
        throw new Error("Method not implemented.");
    }
    update(updPost: Post): Promise<Post | null> {
        throw new Error("Method not implemented.");
    }
    add(newPost: Post): Promise<Post | null> {
        throw new Error("Method not implemented.");
    }
   
    async find(id: number): Promise<Post> {
        const newPost = new Post(id);
        newPost.id = id;
        return newPost;
    }
}