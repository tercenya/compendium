/* eslint no-path-concat: 0, no-var: 0, key-spacing: 0 */

export default {

  DataDragon: {
    SonaSkins: require('fs').readFileSync(__dirname + '/../samplecode/datadragon/sona-skins.json', 'utf8')
  }
};
