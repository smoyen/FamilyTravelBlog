var BlogPost = (function () {
    function BlogPost(title, author, date, location) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.location = location;
    }
    BlogPost.prototype.addComment = function (newComment) {
        this.comment = newComment;
    };
    return BlogPost;
}());
//var myBlogpost = new Blogpost("Sam", new Date(), "Minneapolis");
//console.log(myBlogpost);
//window.alert("new blog post created by " + myBlogpost.author)
//# sourceMappingURL=classes.js.map 
//# sourceMappingURL=BlogPost.js.map