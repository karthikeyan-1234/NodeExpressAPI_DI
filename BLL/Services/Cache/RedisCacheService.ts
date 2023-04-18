import * as Redis from 'redis'
import ICacheService from '../../../Contracts/ICacheService';

export class RedisCacheService implements ICacheService{

    private redisClient: any;

    constructor() {        
        this.redisClient = Redis.createClient();

        this.redisClient.connect().then(async () => {
            this.redisClient.on('connect',function(err: any){
                console.log("Connected to Redis");
            });
        });
    }
    async getCache(key: string): Promise<string | null> {

        console.log("Inside Redis GetCache");

        return new Promise<string | null>(async (resolve, reject) => {
            await this.redisClient.get(key).then((res:any)=>{
                console.log(res + " Redis value");
                if(res != null)
                    resolve(res);
            })

            resolve(null);
          });
    }


    async setCache(key: string, obj: string, expires: number): Promise<boolean | null> {

        console.log("Setting Redis Cache for value " + obj);

        return new Promise<boolean | null>(async (resolve, reject) => {
            await this.redisClient.set(key, obj).then((res: any) => {
                this.redisClient.expire(key,expires);
                  console.log(`Successfully set cache with key '${key}'`);
                  resolve(true);
            })
        })
    }


    
}




