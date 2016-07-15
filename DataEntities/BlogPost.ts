class BlogPost 
{
    public comments: Array<BlogComment> = new Array<BlogComment>()
    
    constructor (public title: string, public author: User, public date: Date, public location: string, public content: string)
    {
    }
    
    addComment(newComment:BlogComment) {
        this.comments.push(newComment);
    }
    // todo - add getters and setters for edit functionality
}

//var myBlogpost = new Blogpost("Sam", new Date(), "Minneapolis");

//console.log(myBlogpost);

//window.alert("new blog post created by " + myBlogpost.author)

//# sourceMappingURL=classes.js.map