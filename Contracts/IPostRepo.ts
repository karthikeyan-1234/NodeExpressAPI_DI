import Post from "../Models/Post";

export default interface IPostRepo {
    find(id: number): Promise<Post | null>;
  }
  