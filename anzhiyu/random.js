var posts=["1243066710/","668177610/","3481172980/","1885882428/","1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };