import IPostRepo from "../../Contracts/IPostRepo";
import IPostService from "../../Contracts/IPostService";
import Post from "../../Models/Post";

export class PostServiceLogger implements IPostService
{
    private IPostRepo: IPostRepo

    constructor({IPostRepo}:{IPostRepo: IPostRepo}) {
        this.IPostRepo = IPostRepo;
    }
    addPost(newPost: Post): Post {
        throw new Error("Method not implemented.");
    }
    updatePost(upPost: Post): Post {
        throw new Error("Method not implemented.");
    }
    deletePost(delPost: Post): Post {
        throw new Error("Method not implemented.");
    }

    async findPost(id: number): Promise<Post | null> {
        console.log("Initiated from PostService Logger");
        return this.IPostRepo.find(id);
    }
    
}