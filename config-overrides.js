const {
    override,
    addLessLoader,
    babelInclude,
  } = require('customize-cra');
  const path = require('path');
  
  module.exports = override(
    addLessLoader({
      javascriptEnabled: true
    }),
    babelInclude([path.resolve('src'), path.resolve(__dirname, '..', 'core')]),
  );
  