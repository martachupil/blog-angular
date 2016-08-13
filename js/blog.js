/**
 * Created by Marta on 03.08.2016.
 */
(function(){
    var app = angular.module('blogMch',['ngMaterial']);

    app.controller('BlogController', ['$http', function($http){

        var blog = this;
        blog.title = "Blog";

        blog.posts = {};
        $http.get('js/posts_1.json').success(function(data){
            blog.posts = data;
        });

        blog.tab = 'main';

        blog.choose = function (setTab) {
            blog.tab = setTab;
        };

        blog.select = function(check) {
            return blog.tab === check;
        };

        blog.post = {};
        blog.addPost = function(){
            blog.post.createdOn = Date.now();
            blog.post.comments = [];
            blog.post.likes = 0;
            blog.posts.unshift(this.post);
            blog.tab = 0;
            blog.post ={};
        };

    }]);


    app.controller('Comment', [ function(){
        this.comment = {};
        this.addComment = function(post) {
            this.comment.createdOn = Date.now();
            post.comments.push(this.comment);
            this.comment ={};
        };

    }]);

})();