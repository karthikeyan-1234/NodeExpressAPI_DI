import ICacheService from "../../Contracts/ICacheService";
import IPostRepo from "../../Contracts/IPostRepo";
import IPostService from "../../Contracts/IPostService";
import Post from "../../Models/Post";

export class PostService implements IPostService
{
    private IPostRepo: IPostRepo;
    private ICacheService: ICacheService;

    constructor({IPostRepo,ICacheService}:{IPostRepo: IPostRepo,ICacheService: ICacheService}) {
        this.IPostRepo = IPostRepo;
        this.ICacheService = ICacheService;
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
        
        console.log("Inside findPost of PostService");

        var res = await this.ICacheService.getCache("Post_" + id);

        if(res == null)
        {
            const post = this.IPostRepo.find(id);

            if(post != null)
            {
                console.log("From repo");
                await this.ICacheService.setCache("Post_" + id,JSON.stringify(post),10);
                return Promise.resolve(post);
            }
            else
                return null;
        }
        else{
            console.log("From CacheService ");
            var _post = JSON.parse(res as string);
            console.log(_post);
            return Promise.resolve(_post);
        }

    }
    
}