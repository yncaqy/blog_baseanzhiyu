var posts=["4046760165/","1243066710/","1885882428/","668177610/","3481172980/","3109476237/","1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };