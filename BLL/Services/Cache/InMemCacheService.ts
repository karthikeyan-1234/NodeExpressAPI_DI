import ICacheService from "../../../Contracts/ICacheService";
import NodeCache from 'node-cache';

export class InMemCacheService implements ICacheService{

    private cache: NodeCache;

    constructor() {
        this.cache = new NodeCache();
    }

    getCache(key: string): Promise<string | null> {
        throw console.error();
        
    }
    setCache(key: string, obj: string): Promise<boolean| null> {
        throw console.error();
    }

}