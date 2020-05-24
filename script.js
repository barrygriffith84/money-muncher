/* 
TODO:
-Position everything with CSS
-Grab the value the user submits in the input and checks it against total value of the money consumed
-Return messages if the user is correct or not
-Add sound effects
-Consider making a logo using a money-related font from Google Fonts
*/

//520 x 612
let coinCount = 0;
let moneyTotal = 0;
let coinValue = 0;
let coinId = ""
let userGuess = 0;
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
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  document.querySelector(`#${data}`).remove();
  printCoin(coinId);
  coinCount++;
  moneyTotal += eval(coinValue);
  console.log(moneyTotal / 100);
}

const checkUser = () => {
  if(userGuess == moneyTotal/100){console.log("You are right")}
  else{
    console.log("WRONG")
  }
}

document.querySelector("#submit-btn").addEventListener("click", () => {
  
  userGuess = document.querySelector("#user-input").value 
  console.log(userGuess)
  checkUser();
})