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
    
    
    
    
    
    


