var posts=["1885882428/","1243066710/","3109476237/","4046760165/","668177610/","3481172980/","1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };