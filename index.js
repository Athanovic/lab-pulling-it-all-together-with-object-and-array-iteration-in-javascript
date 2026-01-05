// index.js

// ----------------- Game Object -----------------
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
          "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
          "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismack Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 22, blocks: 15, slamDunks: 10 },
          "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
          "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
          "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
        }
      }
    };
  }
  
  // ----------------- Player Functions -----------------
  function numPointsScored(playerName) {
    const game = gameObject();
    for (let team of [game.home, game.away]) {
      if (team.players[playerName]) return team.players[playerName].points;
    }
    return null;
  }
  
  function shoeSize(playerName) {
    const game = gameObject();
    for (let team of [game.home, game.away]) {
      if (team.players[playerName]) return team.players[playerName].shoe;
    }
    return null;
  }
  
  // ----------------- Team Functions -----------------
  function teamColors(teamName) {
    const game = gameObject();
    for (let team of [game.home, game.away]) {
      if (team.teamName === teamName) return team.colors;
    }
    return null;
  }
  
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // ----------------- Player Numbers & Stats -----------------
  function playerNumbers(teamName) {
    const game = gameObject();
    for (let team of [game.home, game.away]) {
      if (team.teamName === teamName) return Object.values(team.players).map(p => p.number);
    }
    return [];
  }
  
  function playerStats(playerName) {
    const game = gameObject();
    for (let team of [game.home, game.away]) {
      if (team.players[playerName]) return team.players[playerName];
    }
    return null;
  }
  
  // ----------------- Advanced Challenge -----------------
  function bigShoeRebounds() {
    const game = gameObject();
    let maxShoe = 0, rebounds = 0;
    for (let team of [game.home, game.away]) {
      for (let player in team.players) {
        if (team.players[player].shoe > maxShoe) {
          maxShoe = team.players[player].shoe;
          rebounds = team.players[player].rebounds;
        }
      }
    }
    return rebounds;
  }
  
  // ----------------- Bonus Functions -----------------
  
  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0, topPlayer = "";
    for (let team of [game.home, game.away]) {
      for (let player in team.players) {
        if (team.players[player].points > maxPoints) {
          maxPoints = team.players[player].points;
          topPlayer = player;
        }
      }
    }
    return topPlayer;
  }
  
  function winningTeam() {
    const game = gameObject();
    let homePoints = Object.values(game.home.players).reduce((sum, p) => sum + p.points, 0);
    let awayPoints = Object.values(game.away.players).reduce((sum, p) => sum + p.points, 0);
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    for (let team of [game.home, game.away]) {
      for (let player in team.players) {
        if (player.length > longestName.length) longestName = player;
      }
    }
    return longestName;
  }
  
  function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let maxSteals = 0;
    for (let team of [game.home, game.away]) {
      for (let player in team.players) {
        if (team.players[player].steals > maxSteals) maxSteals = team.players[player].steals;
      }
    }
    return game.home.players[longestName]?.steals === maxSteals || game.away.players[longestName]?.steals === maxSteals;
  }
  
  // ----------------- Export All Functions -----------------
  module.exports = {
    numPointsScored,
    shoeSize,
    teamColors,
    teamNames,
    playerNumbers,
    playerStats,
    bigShoeRebounds,
    mostPointsScored,
    winningTeam,
    playerWithLongestName,
    doesLongNameStealATon
  };
  