/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/***
 * Take aways from video
 */
var scores, roundScore, activePlayer, gamePlaying, previousDiceValue;

var playerNameText = [document.querySelector('#name-0'), document.querySelector('#name-1')];
var playerPanel = [document.querySelector('.player-0-panel'), document.querySelector('.player-1-panel')];
var playerGlobalScore = [document.querySelector('#score-0'), document.querySelector('#score-1')];
var playerRoundScore = [document.querySelector('#current-0'), document.querySelector('#current-1')];
var diceImg = document.querySelector('.dice');

init();

function init(){
    gamePlaying = true;
    
    playerNameText[0].textContent = 'Player 1'
    playerNameText[1].textContent = 'Player 2'
    
    playerPanel[0].classList.remove('winner', 'active')
    playerPanel[1].classList.remove('winner', 'active')
    playerPanel[0].classList.add('active')

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    playerGlobalScore[0].textContent = '0'
    playerGlobalScore[1].textContent = '0'
    playerRoundScore[0].textContent = '0'
    playerRoundScore[1].textContent = '0'
    diceImg.style.display = 'none'
}

document.getElementsByClassName('btn-roll')[0].addEventListener('click', function(){
    if(gamePlaying){
        //below will return random number btw 0 and 5(0 inclusive, 5 exlusive)
        var randomNum = Math.random()*6;
        var diceValue = Math.floor(randomNum+1);

        diceImg.style.display = 'block'
        diceImg.src = 'dice-'+diceValue+'.png'

        console.log(diceValue)
        if(diceValue == 1){        
            scores[activePlayer] += roundScore
            playerGlobalScore[activePlayer].textContent = scores[activePlayer]
            
            //hide the dice
            diceImg.style.display = 'none'

            //change player
            nextPlayer();
        }else if(diceValue === 6 && previousDiceValue && previousDiceValue === 6){
            nextPlayer();
        }else {
            roundScore += diceValue
            playerRoundScore[activePlayer].textContent = roundScore
        }
        previousDiceValue = diceValue;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;

        playerGlobalScore[activePlayer].textContent = scores[activePlayer]

        var winningScore = 100;
        var inputValue = document.getElementById('winningScore').value;
        if(inputValue){
            winningScore = inputValue;
        }

        if(scores[activePlayer] >= winningScore){
            // player won
            diceImg.style.display = 'none'
            playerRoundScore[activePlayer].textContent = 0
            playerNameText[activePlayer].textContent = 'Winner!'
            playerPanel[activePlayer].classList.add('winner')
            playerPanel[activePlayer].classList.remove('active')

            gamePlaying = false;
        }else{
            nextPlayer();
        }
    }
});

function nextPlayer(){
    playerRoundScore[activePlayer].textContent = '0'
    playerPanel[0].classList.toggle('active')
    playerPanel[1].classList.toggle('active')

    activePlayer = activePlayer === 0 ? 1 : 0
    roundScore = 0;
    previousDiceValue = 0;
}

document.querySelector('.btn-new').addEventListener('click', init);