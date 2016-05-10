/* eslint no-path-concat: 0, no-var: 0, key-spacing: 0 */

export default {
  Overview: {
    JsonExample: require('fs').readFileSync(__dirname + '/../samplecode/overview/sona.json', 'utf8')
  },
  Summoner: {
    json: require('fs').readFileSync(__dirname + '/../samplecode/1/summoner.json', 'utf8'),
    apikey: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/0.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/0.php', 'utf8'),
    },
    Name: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/1.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/1.rb', 'utf8'),
    },
    Url: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/2.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/2.php', 'utf8'),
    },
    ApiCall: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/3.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/3.php', 'utf8'),
    },
    parseJson: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/4.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/4.php', 'utf8'),
    },
    fixName: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/5.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/5.php', 'utf8'),
    },
    output: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/6.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/6.php', 'utf8'),
    },
    fullOutput: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/cli.ruby', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/cli.php', 'utf8'),
    },
  },
  DataDragon: {
    SonaSkins: require('fs').readFileSync(__dirname + '/../samplecode/datadragon/sona-skins.json', 'utf8')
  }
};
