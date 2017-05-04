//game module depends upon player module
var player = require('./player.js');

    //module defination here
    
    this.gameType = ''; // arcade or adventure
    this.gameStatus = ''// example: running or finish
    
    
    
    function setGameType(gameType){
        this.gameType = gameType;
    
    }
    
    function getGameType(){
        return this.gameType;
    
    }
    
    
    function setGameStatus(gameStatus){
        this.gameStatus = gameStatus;
    
    }

    function getGameStatus(){
        return this.gameStatus;
        
    }
    
    function whatPlayerDoing(){
        console.log(`${this.player.getPlayerName()} is playing ${this.gameType} game`);
    
    }
    function setPlayer(player){
        this.player = player;
    }
    
    
    module.exports =  {
        getGameType:getGameType,
        getGameStatus:getGameStatus,
        setGameType:setGameType,
        setGameStatus:setGameStatus,
        setPlayer:setPlayer,
        whatPlayerDoing:whatPlayerDoing
        
    
    };
    
    
    
    

