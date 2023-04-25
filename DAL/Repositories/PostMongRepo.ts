import IPostRepo from "../../Contracts/IPostRepo";
import Post from "../../Models/Post";
import { MongoClient, Db, Collection,Document } from 'mongodb';

export class PostMongoRepo implements IPostRepo{
   
    private conn_str: string;
    private conn: any;
    private client: MongoClient;
    private _collection!: Collection<Document>;


    constructor() {
        this.conn_str = "mongodb://localhost:27017";
        this.client = new MongoClient(this.conn_str);
        console.log('Connecting to MongoDB...');
     }

     async getAll(): Promise<Post[]> {
        await this.connectToDB();
        const results = await this._collection.find().toArray();
        return results.map(res => new Post(res.id));
      }
      


    async update(updPost: Post): Promise<Post | null> {

        console.log("---Mongo Repo - Update---");
        console.log(updPost);

        await this.connectToDB();
        await this._collection.updateOne({ id: updPost.id }, { $set: updPost });

        return updPost;
    }


    async connectToDB(){
        const connection = await MongoClient.connect('mongodb://localhost');
        const db = connection.db('MyDB');
        this._collection = await db.collection("MyCollection");
    }

    async add(newPost: Post): Promise<Post | null> {
        await this.connectToDB();
        await this._collection.insertOne(newPost);
        return newPost;
    }

    async find(id: number): Promise<Post | null> {

        console.log("---Mongo Repo----");

        const newPost = new Post(id);
        //newPost.id = id + 1;

        await this.connectToDB();
        //await this._collection.insertOne(new Post(15));

        var result = this._collection.findOne(newPost).then(res => {
            if(res != null)
               return new Post(res.id);
            return null;
        });     
        
        return result;
    }
}