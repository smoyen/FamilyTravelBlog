class BlogPost 
{
    public comment: string
    
    constructor (public title: string, public author: User, public date: Date, public location: string)
    {
    }
    
    addComment(newComment:string) {
        this.comment = newComment;
    }
}

//var myBlogpost = new Blogpost("Sam", new Date(), "Minneapolis");

//console.log(myBlogpost);

//window.alert("new blog post created by " + myBlogpost.author)

//# sourceMappingURL=classes.js.map