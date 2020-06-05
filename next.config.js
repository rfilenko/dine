const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

global.navigator = () => null;
module.exports = withPlugins([[withImages]]);
