var posts=["1243066710/","4046760165/","3109476237/","1885882428/","668177610/","3481172980/","1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };