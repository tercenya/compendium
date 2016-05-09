/* eslint no-path-concat: 0, no-var: 0, key-spacing: 0 */

export default {
  Overview: {
    JsonExample: require('fs').readFileSync(__dirname + '/../samplecode/overview/sona.json', 'utf8')
  },
  DataDragon: {
    SonaSkins: require('fs').readFileSync(__dirname + '/../samplecode/datadragon/sona-skins.json', 'utf8')
  }
};
