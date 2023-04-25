import IPostRepo, { SearchCriteria } from "../../Contracts/IPostRepo";
import Post from "../../Models/Post";

export class PostSQLRepo implements IPostRepo{
    search(criteria: SearchCriteria<Post>): Promise<Post[] | null> {

        const { id, name } = criteria as SearchCriteria<Post>;
        let query = 'SELECT * FROM posts WHERE 1=1';
        const params = [] as any;

        if (id) {
            if (id.$gte) {
              query += ' AND id >= ?';
              params.push(id.$gte);
            }
            if (id.$lte) {
              query += ' AND id <= ?';
              params.push(id.$lte);
            }
          }
        
          if (name) {
            if (name.$regex) {
              query += ' AND name LIKE ?';
              params.push(`${name.$regex}%`);
            }
          }
        
        //   const result = await pool.query(query, params);
        //   return result.rows;

        return Promise.resolve(null);
    }

    delete(delPost: Post): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<Post[] | null> {
        throw new Error("Method not implemented.");
    }
    update(updPost: Post): Promise<Post | null> {
        throw new Error("Method not implemented.");
    }
    add(newPost: Post): Promise<Post | null> {
        throw new Error("Method not implemented.");
    }
   
    async find(id: number): Promise<Post> {
        const newPost = new Post(id,"",false);
        newPost.id = id;
        return newPost;
    }
}