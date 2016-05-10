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
      node: require('fs').readFileSync(__dirname + '/../samplecode/1/0.js', 'utf8'),
    },
    Name: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/1.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/1.rb', 'utf8'),
      // node: require('fs').readFileSync(__dirname + '/../samplecode/1/1.js', 'utf8'),  //unneeded
    },
    Url: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/2.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/2.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/1/2.js', 'utf8'),
    },
    ApiCall: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/3.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/3.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/1/3.js', 'utf8'),
    },
    parseJson: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/4.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/4.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/1/4.js', 'utf8'),
    },
    fixName: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/5.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/5.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/1/5.js', 'utf8'),
    },
    output: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/6.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/6.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/1/6.js', 'utf8'),
    },
    fullOutput: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/1/cli.ruby', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/1/cli.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/1/cli.js', 'utf8'),
    },
  },
  DataDragon: {
    SonaSkins: require('fs').readFileSync(__dirname + '/../samplecode/datadragon/sona-skins.json', 'utf8')
  },
  MatchHistory: {
    json: require('fs').readFileSync(__dirname + '/../samplecode/2/history.json', 'utf8'),
    id: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/2/1.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/2/1.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/2/1.js', 'utf8'),
    },
    Url: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/2/2.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/2/2.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/2/2.js', 'utf8'),
    },
    fullOutput: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/2/cli.ruby', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/2/cli.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/2/cli.js', 'utf8'),
    },

  },
  MatchData: {
    json: require('fs').readFileSync(__dirname + '/../samplecode/3/match.json', 'utf8'),
    id: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/3/1.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/3/1.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/3/1.js', 'utf8'),
    },
    timeline: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/3/2.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/3/2.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/3/2.js', 'utf8'),
    },
    Url: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/3/3.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/3/3.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/3/3.js', 'utf8'),
    },
    output: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/3/4.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/3/4.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/3/4.js', 'utf8'),
    },
    fullOutput: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/3/cli.ruby', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/3/cli.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/3/cli.js', 'utf8'),
    },
  },
  CurrentGame: {
    json: require('fs').readFileSync(__dirname + '/../samplecode/4/current-game.json', 'utf8'),
    id: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/4/1.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/4/1.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/4/1.js', 'utf8'),
    },
    status: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/4/2.rb', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/4/2.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/4/2.js', 'utf8'),
    },
    fullOutput: {
      ruby: require('fs').readFileSync(__dirname + '/../samplecode/4/cli.ruby', 'utf8'),
      php: require('fs').readFileSync(__dirname + '/../samplecode/4/cli.php', 'utf8'),
      node: require('fs').readFileSync(__dirname + '/../samplecode/4/cli.js', 'utf8'),
    },
  },
  Mastery: {
    singleChampion: require('fs').readFileSync(__dirname + '/../samplecode/5/1.json', 'utf8'),
    multiChampion: require('fs').readFileSync(__dirname + '/../samplecode/5/1.json', 'utf8'),
  }

};
