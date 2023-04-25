import Post from "../Models/Post";

export default interface IPostService {
    findPost(id: number): Promise<Post|null>;
    addPost(newPost: Post): Promise<Post|null>;
    updatePost(upPost: Post): Promise<Post|null>;
    deletePost(delPost: Post): Post|null;
  }