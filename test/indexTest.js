const expect = require('chai').expect;
const {
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
} = require('../index');

describe('Basketball Stats', function () {

  // ----------------- Main Functions -----------------
  it('numPointsScored should return points scored by a player', function () {
    expect(numPointsScored('Alan Anderson')).to.equal(22);
    expect(numPointsScored('Ben Gordon')).to.equal(33);
  });

  it('shoeSize should return shoe size of a player', function () {
    expect(shoeSize('Mason Plumlee')).to.equal(19);
    expect(shoeSize('Jason Terry')).to.equal(15);
  });

  it('teamColors should return team colors', function () {
    expect(teamColors('Brooklyn Nets')).to.deep.equal(['Black', 'White']);
    expect(teamColors('Charlotte Hornets')).to.deep.equal(['Turquoise', 'Purple']);
  });

  it('teamNames should return both team names', function () {
    expect(teamNames()).to.deep.equal(['Brooklyn Nets', 'Charlotte Hornets']);
  });

  it('playerNumbers should return player numbers of a team', function () {
    expect(playerNumbers('Brooklyn Nets')).to.deep.equal([0, 30, 11, 1, 31]);
    expect(playerNumbers('Charlotte Hornets')).to.deep.equal([4, 0, 2, 8, 33]);
  });

  it('playerStats should return stats of a player', function () {
    expect(playerStats('Brook Lopez')).to.deep.equal({
      number: 11,
      shoe: 17,
      points: 17,
      rebounds: 19,
      assists: 10,
      steals: 3,
      blocks: 1,
      slamDunks: 15
    });
  });

  it('bigShoeRebounds should return number of rebounds for the player with the biggest shoe', function () {
    expect(bigShoeRebounds()).to.equal(12); // Mason Plumlee
  });

  // ----------------- Bonus Functions -----------------
  it('mostPointsScored should return the player with the highest points', function () {
    expect(mostPointsScored()).to.equal('Ben Gordon');
  });

  it('winningTeam should return the team with the most points', function () {
    expect(winningTeam()).to.equal('Brooklyn Nets');
  });

  it('playerWithLongestName should return the player with the longest name', function () {
    expect(playerWithLongestName()).to.equal('Bismack Biyombo');
  });

  // ----------------- Super Bonus Function -----------------
  it('doesLongNameStealATon should return true if the longest named player has the most steals', function () {
    expect(doesLongNameStealATon()).to.equal(true);
  });

});
