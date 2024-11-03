var posts=["2024/10/30/hello-world/","2023/04/14/DRF/","2024/10/29/线性代数的解法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };