import Post from "../Models/Post";

export default interface IPostService {
    findPost(id: number): Post;
    addPost(newPost: Post): Post;
    updatePost(upPost: Post): Post;
    deletePost(delPost: Post): Post;
  }