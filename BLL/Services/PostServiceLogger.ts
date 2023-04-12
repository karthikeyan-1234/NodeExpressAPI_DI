import IPostRepo from "../../Contracts/IPostRepo";
import IPostService from "../../Contracts/IPostService";
import Post from "../../Models/Post";

export class PostServiceLogger implements IPostService
{
    private IPostRepo: IPostRepo

    constructor({IPostRepo}:{IPostRepo: IPostRepo}) {
        this.IPostRepo = IPostRepo;
    }

    findPost(id: number): Post {
        console.log("Initiated from PostService Logger");
        return this.IPostRepo.find(id);
    }
    
}