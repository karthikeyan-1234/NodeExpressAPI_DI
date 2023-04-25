import Post from "../Models/Post";

interface Range {
  $gte?: number;
  $lte?: number;
}

export interface SearchCriteria<T> {
  id?: Range;
  name?: {
    $regex?: string;
  };
  active?: boolean;
  // other search criteria properties as needed
}

export default interface IPostRepo {
    find(id: number): Promise<Post | null>;
    add(newPost: Post): Promise<Post | null>;
    update(updPost: Post): Promise<Post | null>;
    getAll(): Promise<Post[] | null>;
    delete(delPost: Post):Promise<boolean>;
    search(criteria: SearchCriteria<Post>): Promise<Post[] | null>;
  }
  