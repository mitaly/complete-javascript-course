/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores = [0, 0];
var roundScore = 0;
var diceValue = 5;
var activePlayer = 0;
var playerNameText = [document.getElementById('name-0'), document.getElementById('name-1')];
var playerPanel = [document.getElementsByClassName('player-0-panel')[0], document.getElementsByClassName('player-1-panel')[0]];
var playerGlobalScore = [document.getElementById('score-0'), document.getElementById('score-1')];
var playerRoundScore = [document.getElementById('current-0'), document.getElementById('current-1')];
var diceImg = document.getElementsByClassName('dice')[0];

//Initialization of refreshed screen
playerGlobalScore[0].textContent = '0'
playerGlobalScore[1].textContent = '0'
playerRoundScore[0].textContent = '0'
playerRoundScore[1].textContent = '0'
diceImg.style.display = 'none'

function rollDice(){
    var randomNum = Math.random()*6;
    diceValue = Math.floor(randomNum+1);

    diceImg.style.display = 'block'
    diceImg.setAttribute('src', 'dice-'+diceValue+'.png')

    if(diceValue == 1){
        roundScore = 0;
        playerRoundScore[activePlayer].innerHTML = 0    
        return;
    }
    roundScore += diceValue
    playerRoundScore[activePlayer].innerHTML = roundScore
}

function hold(){
    scores[activePlayer] += roundScore;

    playerGlobalScore[activePlayer].innerHTML = scores[activePlayer]

    if(scores[activePlayer] >= 100){
        // player won
        playerRoundScore[activePlayer].textContent = 0
        playerNameText[activePlayer].innerHTML = 'WINNER!'
        playerPanel[activePlayer].classList.add('winner')
        return;
    }
    playerRoundScore[activePlayer].innerHTML = 0

    playerPanel[activePlayer].classList.remove('active')

    if(activePlayer == 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }

    playerPanel[activePlayer].classList.add('active')
    roundScore = 0;
}

function newGame(){
    for(var i = 0; i<playerNameText.length; i++){
        scores[i] = 0;
        playerNameText[i].innerHTML = 'PLAYER '+ (i+1)
        playerPanel[activePlayer].classList.remove('winner')
        playerRoundScore[i].innerHTML = '0';
        playerGlobalScore[i].innerHTML = '0';
    }
    diceImg.style.display = 'block'
    roundScore = 0;
    activePlayer = 0;
    playerPanel[activePlayer].classList.add('active')
}