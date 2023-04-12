import { PostSQLRepo } from "./DAL/Repositories/PostSQLRepo";
import { PostMongoRepo } from "./DAL/Repositories/PostMongRepo";
import { PostService } from "./BLL/Services/PostService";
import { PostServiceLogger } from "./BLL/Services/PostServiceLogger";

import {
    createContainer,
    asValue,
    asFunction,
    asClass,
    InjectionMode,
  } from 'awilix';


const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  IPostRepo: asClass<PostMongoRepo>(PostMongoRepo).singleton(),   //Replace PostMongRepo with PostSQLRepo to change the dependency
  IPostService: asClass<PostService>(PostService).singleton() //Replace PostService with PostServiceLogger service that implements IPostService to change the dependency
})

export default container;