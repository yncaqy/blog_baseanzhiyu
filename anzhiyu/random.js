var posts=["1243066710/","668177610/","1885882428/","3481172980/","1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };