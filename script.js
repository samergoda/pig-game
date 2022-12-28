const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const score0el = document.getElementById("score--0");
const score1el = document.getElementById("score--1");
const diceel = document.querySelector(".dice");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

let score ,currentScore ,activePlayer,playing 

const init = function(){
  score0el.textContent = 0;
  score1el.textContent = 0;
  current0.textContent=0
  current1.textContent=0
  score = [0,0]
  currentScore = 0;
  activePlayer = 0;
  playing = true 

  player0.classList.add('player--active')
  player1.classList.remove('player--active')
  player0.classList.remove('player--winner')
  player1.classList.remove('player--winner')
}
init()

const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active')
  player1.classList.toggle('player--active')
}

btnRoll.addEventListener("click", function () {
  if (playing) {
    
  
  diceel.classList.remove("hidden");
  let dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);
  diceel.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    switchPlayer()

  }
}
});
btnHold.addEventListener('click', function () {
  if (playing){
    score[activePlayer]+= currentScore
    // console.log(score[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =score[activePlayer]
    
    if (score[activePlayer] >= 100){
    playing = false
    diceel.classList.add('hidden')
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }else{
      switchPlayer()
    }
    
  }
  
})
btnNew.addEventListener('click', function(){
  init()
})