var posts=["2023/12/09/hello-world/","2023/11/13/“第一篇文章”/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };