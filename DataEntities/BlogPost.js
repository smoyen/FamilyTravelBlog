var BlogPost = (function () {
    function BlogPost(title, author, date, location, content) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.location = location;
        this.content = content;
        this.comments = new Array();
    }
    BlogPost.prototype.addComment = function (newComment) {
        this.comments.push(newComment);
    };
    return BlogPost;
}());
//var myBlogpost = new Blogpost("Sam", new Date(), "Minneapolis");
//console.log(myBlogpost);
//window.alert("new blog post created by " + myBlogpost.author)
//# sourceMappingURL=classes.js.map 
//# sourceMappingURL=BlogPost.js.map