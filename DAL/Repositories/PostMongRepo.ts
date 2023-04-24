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

    async connectToDB(){
        const connection = await MongoClient.connect('mongodb://localhost');
        const db = connection.db('MyDB');
        this._collection = await db.collection("MyCollection");
    }

    async find(id: number): Promise<Post | null> {

        const newPost = new Post(id);
        //newPost.id = id + 1;

        await this.connectToDB();
        //await this._collection.insertOne(new Post(15));

        var result = this._collection.findOne(newPost).then(res => {
            if(res != null)
               return new Post(res.id);
            return null;
        });     
        
        return result as Promise<Post>;
    }
}