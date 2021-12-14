const team = {
  _players: [
    {
      firstName: 'Pablo', lastName: 'Sanchez', age: 24,
    },
    {
      firstName: 'Kingsley', lastName: 'Scoffer', age: 30,
    },
    {
      firstName: 'Grant', lastName: 'Shaik', age: 23,
    }
  ],
  _games: [
    {
       opponent: 'Broncos', teamPoints: 29, opponentPoints: 19,
    },
    {
       opponent: 'Chelsea', teamPoints: 34, opponentPoints: 29,
    },
    {
       opponent: 'Manchester', teamPoints: 23, opponentPoints: 32,
    },
  ],
  get games() {
    return this._games;
  },
  get players(){
    return this._players;
  },
  addPlayer(firstName, lastName, age){
    let player ={
      firstName: firstName,
      lastName: lastName,
      age: age,
    }
     this.players.push(player);
  },
  addGame(oppName, MyPoints, oppPoints) {
    const game = {
    opponent: oppName,
    teamPoints: MyPoints,
    opponentPoints: oppPoints
    };
    this.games.push(game);
  }
};
//console.log(team._players)

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Titans', 100, 76);
team.addGame('Chelsea', 100, 38);
team.addGame('Barcelona', 200, 80);


console.log(team.games);

