import ICacheService from "../../../Contracts/ICacheService";
import NodeCache from 'node-cache';

export class InMemCacheService implements ICacheService{

    private cache: NodeCache;

    constructor() {
        this.cache = new NodeCache();
    }

    async getCache(key: string): Promise<string | null> {

        console.log("---Cache----");

        console.log("Inside Node GetCache");

        return new Promise<string | null>((resolve, reject) => {

            console.log("Trying to get cache");

            var res = this.cache.get(key);
            console.log(res);
            if(res != null || res != undefined)
            {
                console.log("res is not null in Node GetCache");
                console.log(res);
                resolve(res as string);
            }
            else
            {
                console.log("No Cache");
                resolve(null);
            }
          });        
    }

    async setCache(key: string, obj: string,expires: number): Promise<boolean| null> {

        console.log("---Cache----");

        console.log("Setting Node Cache for value " + obj);

        return new Promise<boolean | null>((resolve, reject) => {
            var res = this.cache.set(key,obj,expires);
            resolve(res);
          });
    }

}