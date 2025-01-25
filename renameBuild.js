const fs = require('fs-extra');

fs.rename('./build', './dist', (err) => {
  if (err) {
    console.error('Error renaming build directory to dist:', err);
  } else {
    console.log('Successfully renamed build directory to dist');
  }
});