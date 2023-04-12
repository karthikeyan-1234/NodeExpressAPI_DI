import Post from "../Models/Post";

export default interface IPostService {
    findPost(id: number): Post;
  }