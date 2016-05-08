/* eslint no-path-concat: 0, no-var: 0, key-spacing: 0 */

export default {
  SonaSkins: require('fs').readFileSync(__dirname + '/../src/guides/sona-skins.json', 'utf8')
};
