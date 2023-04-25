import IPostRepo from "../../Contracts/IPostRepo";
import IPostService from "../../Contracts/IPostService";
import Post from "../../Models/Post";

export class PostServiceLogger implements IPostService
{
    private IPostRepo: IPostRepo

    constructor({IPostRepo}:{IPostRepo: IPostRepo}) {
        this.IPostRepo = IPostRepo;
    }
    findPost(id: number): Promise<Post[] | null> {
        throw new Error("Method not implemented.");
    }
    deletePost(delPost: Post): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    addPost(newPost: Post): Promise<Post | null> {
        throw new Error("Method not implemented.");
    }
    updatePost(upPost: Post): Promise<Post | null> {
        throw new Error("Method not implemented.");
    }

    
}