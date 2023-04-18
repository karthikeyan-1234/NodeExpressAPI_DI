export default interface ICacheService {
    getCache(key: string): Promise<string | null>;
    setCache(key: string,obj: string,expires: number): Promise<boolean | null>;
  }