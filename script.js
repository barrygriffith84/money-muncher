
//520 x 612 image size
let coinCount = 0;
let moneyTotal = 0;
let coinValue = 0;
let coinId = "";
let userGuess = 0;
const returnMessages = ["Sorry, that is an incorrect amount", "You did great, but I bet you could eat more change next time!", "You are a master of eating change!", "You are a coin-eating superhero.  They should call you the Human Piggybank!"]
const gulp = new Audio('sounds/gulp-sound.mp3');
const cheer = new Audio('sounds/kids-cheer.mp3');


//Determines which coin was consumed and reprints that coin to coin-div
const printCoin = (coinId) => {
console.log(coinId)
  const coin = coinId.split("-")[0]
  document.querySelector("#coin-div").innerHTML +=
      `<img src="images/${coin}.png" alt="${coin}" id="${coinId}" class="coin" draggable="true" ondragstart="drag(event)">`
}


const allowDrop = (ev) => {
  ev.preventDefault();
}

const drag = (ev) => {
  ev.dataTransfer.setData("text", ev.target.id);
  coinValue = ev.target.id.split("-").pop();
  coinId = ev.target.id
}

const drop = (ev) => {
  gulp.play();
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  document.querySelector(`#${data}`).remove();
  printCoin(coinId);
  coinCount++;
  moneyTotal += eval(coinValue);
  console.log(moneyTotal / 100);
}

const checkUser = () => {
  if(userGuess == moneyTotal/100){
    cheer.play();
    document.querySelector("#output-div").innerHTML = correctMessage();
    coinCount = 0;
    moneyTotal = 0;
  } else{
    document.querySelector("#output-div").innerHTML = returnMessages[0];
  }
}


const correctMessage = () => {
  if(coinCount <= 5){
    return returnMessages[1]
  } else if(coinCount > 5 && coinCount < 12){
    return returnMessages[2]
  } else if(coinCount >= 12){
    return returnMessages[3]
  }
}

document.querySelector("#submit-btn").addEventListener("click", () => {
  userGuess = document.querySelector("#user-input").value 
  console.log(userGuess)
  checkUser();
})