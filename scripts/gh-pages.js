var ghpages = require('gh-pages');
 
ghpages.publish('docs', function(err) {
  if (!err) {
    console.log('sucess')
  }
  
});