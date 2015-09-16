////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   
    return move || getInput();
}

function getComputerMove(move) {
   
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
  
    if (playerMove === computerMove){
        console.log('Its a Tie!')
    } else if(playerMove === 'rock' && computerMove === 'scissors'){
        winner = 'player';
    } else if(playerMove === 'scissors' && computerMove === 'rock'){
        winner = 'computer';
    } else if(playerMove === 'paper' && computerMove === 'rock'){
        winner = 'player';
    } else if(playerMove === 'rock' && computerMove === 'paper'){
        winner = 'computer';
    } else if(playerMove === 'paper' && computerMove === 'scissors'){
        winner = 'computer';
    } else if(playerMove === 'scissors' && computerMove === 'paper'){
        winner = 'player';
    }
    return winner;
    
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
while (playerWins < 5 && computerWins < 5) {
    
    var computerMove = getComputerMove();
    var playerMove = getPlayerMove();
    var winner = getWinner(computerMove, playerMove);

    if (winner === 'player') {
        playerWins += 1;
    } else if (winner === 'computer') {
        computerWins +=1;
    } else if (winner === 'Its a Tie!') {
        playerWins += 0;
        computerWins += 0;
    }

    console.log('Player chose ' + playerMove + ' and the Computer chose ' + computerMove);
    console.log('player wins ' + playerWins + ' to computer ' + computerWins);
    }
    return [playerWins, computerWins];
}


