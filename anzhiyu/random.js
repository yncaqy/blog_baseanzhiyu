var posts=["1243066710/","668177610/","1885882428/","1/","3481172980/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };