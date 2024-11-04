var posts=["1243066710/","3481172980/","1885882428/","1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };