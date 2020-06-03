const withImages = require('next-images');

global.navigator = () => null;
module.exports = withImages();

module.exports = {
  target: 'serverless',
};
