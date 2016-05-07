var BlogComment = (function () {
    function BlogComment(title, author, date, content) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.content = content;
        this.likes = new Array();
    }
    BlogComment.prototype.likeComment = function (userThatLiked) {
        this.likes.push(userThatLiked);
    };
    return BlogComment;
}());
//# sourceMappingURL=BlogComment.js.map