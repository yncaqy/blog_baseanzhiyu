var posts=["1885882428/","4046760165/","1243066710/","1/","668177610/","3481172980/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };