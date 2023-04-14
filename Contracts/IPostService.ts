import Post from "../Models/Post";

export default interface IPostService {
    findPost(id: number): Post|null;
    addPost(newPost: Post): Post|null;
    updatePost(upPost: Post): Post|null;
    deletePost(delPost: Post): Post|null;
  }