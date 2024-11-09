var posts=["1243066710/","668177610/","1/","3481172980/","1885882428/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };