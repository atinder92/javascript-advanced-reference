(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//main module

var game = require('./game.js');
var player = require('./player.js');
    
    
    console.log("Running from bundle.js");
    player.setPlayerName('Atinder');
    
    game.setPlayer(player);
    
    
    
    game.setGameStatus('running');
    game.setGameType('arcade');
    game.whatPlayerDoing();
    console.log(`Game is ${game.getGameStatus()}`);
    console.log(`You are running game in ${game.getGameType()} mode`);
    
    
    

},{"./game.js":2,"./player.js":3}],2:[function(require,module,exports){
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
    
    
    
    


},{"./player.js":3}],3:[function(require,module,exports){
//player module does not depend upon anything



        //module defination here

        var playerName = '';


        //set function -> playerName
        function setPlayerName(playerName){

        if(playerName === ""){

        throw "Player name cannot be empty" ;
        return

        }

        this.playerName = playerName;
        }

        //get function -> playerName
        function getPlayerName(){

        return this.playerName;
        }

    
        exports.setPlayerName = setPlayerName;
        exports.getPlayerName = getPlayerName;
    
    
    
    
    
    



},{}]},{},[1]);
