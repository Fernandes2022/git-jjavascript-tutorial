let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};


updateScoreElement();

// if(!score){
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   }
// }

// let isAutoPlaying = false;
// let intervalId;

// const autoPlay = () => {

// }
document.querySelector('.auto-play-button').
addEventListener('click', () => {
  autoPlay();
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter'){
    autoPlay();
  }
})

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'a'){
    autoPlay();
  }
});

let isAutoPlaying = false;
let intervalId;
function autoPlay() {
  const inputElement = document.querySelector('.auto-play-button');
  if (inputElement.innerText === 'Auto Play') {
    inputElement.innerHTML = 'Stop Playing';
  if(!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove = pickcomputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  }
}else{
  inputElement.innerHTML = 'Auto Play';
  clearInterval(intervalId);
      isAutoPlaying = false;
}
}

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace'){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  }
})

document.querySelector('.reset').
addEventListener('click', () => {
  show();
})

const show = () => {
  document.querySelector('.js-reset-show').innerHTML = `Are you sure you want to remove the score? <button onclick="score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  hideConfirmation();">Yes</button> <button onclick="hideConfirmation();">No</button>`
}

const hideConfirmation = () => {
  document.querySelector('.js-reset-show').innerHTML = '';
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  }else if(event.key === 'p') {
    playGame('paper');
  }else if(event.key === 's'){
    playGame('scissors');
  }
});

function playGame(playerMove){
const computerMove = pickcomputerMove();

let result = '';

if(playerMove === 'scissors'){
if(computerMove==='rock'){
result = 'You lose.';
}else if(computerMove==='paper'){
result = 'You win.';
}else if(computerMove==='scissors'){
result = 'Tie.';
}
}else if(playerMove === 'paper'){
if(computerMove==='rock'){
result = 'You win.';
}else if(computerMove==='paper'){
result = 'Tie.';
}else if(computerMove==='scissors'){
result = 'You lose.';
}
}else if(playerMove === 'rock'){
if(computerMove==='rock'){
result = 'Tie.';
}else if(computerMove==='paper'){
result = 'You lose.';
}else if(computerMove==='scissors'){
result = 'You win.';
}
}

if(result === 'You win.'){
score.wins +=1;
}else if(result === 'You lose.'){
score.losses += 1;
}else if(result === 'Tie.'){
score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-move').innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="" class="move-button"><img src="images/${computerMove}-emoji.png" alt="" class="move-button">Computer`;


}



function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function pickcomputerMove(){
const randomNumber = Math.random();
let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1/3){
computerMove = 'rock';
}else if(randomNumber >= 1/3 && randomNumber < 2/3){
computerMove = 'paper';
}else if(randomNumber >= 2/3 && randomNumber < 1){
computerMove = 'scissors';
}

return computerMove; 
}
