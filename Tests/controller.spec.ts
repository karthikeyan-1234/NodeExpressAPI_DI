import findProductAction from '../Controllers/PostController'
import { PostService } from '../BLL/Services/PostService';
import { Request, Response } from 'express';
import IPostRepo from '../Contracts/IPostRepo';
import Post from '../Models/Post';
import ICacheService from '../Contracts/ICacheService';


describe('Post Controller Test', () => {

    let request: Request;
    let response: Response;
    let tempPost: Post;
    let postRepoMock: jest.Mocked<IPostRepo>;
    let cacheServiceMock: jest.Mocked<ICacheService>;


    //Arrange
    beforeEach(() => {
        tempPost = {
            id: 3
        } as Post;

        request = {
          body: { id: Number },
        } as Request;

        response = {
          send: jest.fn().mockReturnThis(),
          status: jest.fn().mockReturnThis(),
        } as any;
        
        postRepoMock = {
            find: jest.fn()
        } as jest.Mocked<IPostRepo>;

        cacheServiceMock = {
            getCache: jest.fn().mockResolvedValue(null),
            setCache: jest.fn().mockResolvedValue(null),
          } as any;

        cacheServiceMock.getCache.mockImplementation((key:string) => {
          if(key == "2")
          {
            return Promise.resolve(JSON.stringify({
              id: 2,
              title: "Post 2",
              content: "Content 2",
            }));
          }

          return Promise.resolve(null);
        })


        postRepoMock.find.mockImplementation(async (id:number) => {
            if (id === 2) {
            return {
                id: 2,
                title: "Post 2",
                content: "Content 2",
              };
            }

            return null;
        })


    })


    it('findPost function in PostService should return post', async() => {        
        const service = new PostService({ IPostRepo: postRepoMock ,ICacheService: cacheServiceMock})    //Act
        expect(service.findPost(2)).not.toBeNull()                      //Assert
    })
    
})
