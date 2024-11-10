var posts=["1885882428/","4046760165/","1243066710/","1/","3481172980/","668177610/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };