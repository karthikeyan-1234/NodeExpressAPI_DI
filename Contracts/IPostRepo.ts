import Post from "../Models/Post";

export default interface IPostRepo {
    find(id: number): Promise<Post | null>;
    add(newPost: Post): Promise<Post | null>;
    update(updPost: Post): Promise<Post | null>;
    getAll(): Promise<Post[] | null>;
    delete(delPost: Post):Promise<boolean>;
  }
  