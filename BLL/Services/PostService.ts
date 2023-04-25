import ICacheService from "../../Contracts/ICacheService";
import IPostRepo, { SearchCriteria } from "../../Contracts/IPostRepo";
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

    async addPost(newPost: Post): Promise<Post | null> {
        try{
        return await this.IPostRepo.add(newPost);
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async getAllPosts(): Promise<Post[] | null>{

        console.log("---getAllPosts Service---")

        var res = await this.ICacheService.getCache("All_Posts");
        console.log(res);

        if(res == null)
        {
           var posts = await this.IPostRepo.getAll();

           if(posts != null)
           {
               await this.ICacheService.setCache("All_Posts",JSON.stringify(posts),10);
               return Promise.resolve(posts);
           }
           else
               return Promise.resolve(null);
        }
        else
        {
            console.log("From CacheService ");
            var _posts = JSON.parse(res as string);
            console.log(_posts);
            return Promise.resolve(_posts);
        }
    }

    async updatePost(upPost: Post): Promise<Post | null>{

        console.log("---UpdatePost Service---")
        console.log(upPost);

        const post = await this.IPostRepo.update(upPost);
        await this.ICacheService.setCache("Post_" + post!.id,JSON.stringify(post),10);
        return Promise.resolve(post);
    }

    deletePost(delPost: Post): Promise<boolean> {
        try
        {
            return Promise.resolve(this.IPostRepo.delete(delPost));            
        }
        catch(err){
            return Promise.resolve(false);
        }
    }

    async findPost(start_id: number, end_id:number): Promise<Post[] | null> {   
        
        console.log("---FindPost Service----");
        var res = await this.ICacheService.getCache("Post_" + start_id + end_id);

        console.log("---FindPost result of cache---");
        console.log(res);



        if(res == null)
        {
            console.log("---FindPost using IPostRepo---");

            const post = await this.IPostRepo.search(
                { 
                    id: { $gte: start_id, $lte: end_id }, 
                    //name: { $regex: /^AB/i }
                } as unknown as SearchCriteria<Post>);

            console.log(post);

            if(post != null)
            {
                console.log("---FindPost setting cache----");
                await this.ICacheService.setCache("Post_" + start_id + end_id,JSON.stringify(post),10);
                return Promise.resolve(post);
            }
            else
                return Promise.resolve(null);
        }
        else{
            console.log("---FindPost From CacheService---");
            var _post = JSON.parse(res as string);
            console.log(_post);
            return Promise.resolve(_post);
        }

    }
    
}