class BlogComment 
{
    public likes: Array<User> = new Array<User>()
    
    constructor (public title: string, public author: User, public date: Date, public content: string)
    {
    }
    
    likeComment(userThatLiked:User) {
            this.likes.push(userThatLiked);
    }
}