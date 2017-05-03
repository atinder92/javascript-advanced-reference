//main module

define(['./game','./player'],function(game,player){
    
    
    player.setPlayerName('Atinder');
    
    game.setPlayer(player);
    
    
    
    game.setGameStatus('running');
    game.setGameType('arcade');
    game.whatPlayerDoing();
    console.log(`Game is ${game.getGameStatus()}`);
    console.log(`You are running game in ${game.getGameType()} mode`);
    
    
    
});