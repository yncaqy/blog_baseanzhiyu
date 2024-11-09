var posts=["1885882428/","1243066710/","4046760165/","3481172980/","668177610/","1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };