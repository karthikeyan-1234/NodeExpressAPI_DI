import findProductAction from '../Controllers/PostController'
import { PostService } from '../BLL/Services/PostService';
import { Request, Response } from 'express';
import IPostRepo from '../Contracts/IPostRepo';
import Post from '../Models/Post';


describe('Post Controller Test', () => {

    let request: Request;
    let response: Response;
    let tempPost: Post;
    let postRepoMock: jest.Mocked<IPostRepo>;


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


        postRepoMock.find.mockImplementation((id:number) => {
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

    it('findProduct action endpoint should find product', async () => {      
        const result = await findProductAction(request,response);       //Act
        expect(result).not.toBeNull()                                   //Assert
    })

    it('findPost function in PostService should return post', async() => {        
        const service = new PostService({ IPostRepo: postRepoMock })    //Act
        expect(service.findPost(2)).not.toBeNull()                      //Assert
    })
    
})
