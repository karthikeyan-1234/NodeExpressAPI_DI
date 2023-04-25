export default class Post{

    constructor(id: number,name: string,active: boolean){
        this.id = id;
        this.name = name;
        this.active = active;
    }

    id!: number
    name: string
    active: boolean
}