if(!Posts.findOne()) {
  console.log('initializing database...');
  for(var lc=0; lc<10000; lc++) {
    var cat1 = Math.ceil(Math.random() * 10);
    var cat2 = Math.ceil(Math.random() * 1000);

    cat1 = "cat1-" + cat1;
    cat2 = "cat2-" + cat2;

    Posts.insert({
      cat1: cat1,
      cat2: cat2
    });

    if(lc > 0 && (lc % 1000) == 0) {
      console.log("docs added: %s", lc);
    }
  }

  Posts._ensureIndex({cat1: 1});
  Posts._ensureIndex({cat2: 1});
  console.log('database initialized');
}