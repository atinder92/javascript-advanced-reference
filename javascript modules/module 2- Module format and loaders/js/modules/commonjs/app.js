//main module

var game = require('./game.js');
var player = require('./player.js');
    
    
    player.setPlayerName('Atinder');
    game.setPlayer(player);
    
    
    
    game.setGameStatus('running');
    game.setGameType('arcade');
    game.whatPlayerDoing();
    console.log('Using CommonJS format');
    console.log(`Game is ${game.getGameStatus()}`);
    console.log(`You are running game in ${game.getGameType()} mode`);
    
    
    
