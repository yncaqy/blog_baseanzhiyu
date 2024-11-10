var posts=["1243066710/","4046760165/","668177610/","1885882428/","3481172980/","1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };