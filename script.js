/* 
TODO:
-Position everything with CSS
-Grab the value the user submits in the input and checks it against total value of the money consumed
-Return messages if the user is correct or not
-Add sound effects
-Consider making a logo using a money-related font from Google Fonts
*/

let coinCount = 0;
let moneyTotal = 0;
let coinValue = 0;
let coinType = ""

//Determines which coin was consumed and reprints that coin to coin-div
const printCoin = (coin) => {
  if (coin == "penny") {
    document.querySelector("#coin-div").innerHTML +=
      `<img src="images/penny.png" alt="penny" id="penny-1" class="coin" draggable="true" ondragstart="drag(event)">`
  } else if (coin == "nickel") {
    document.querySelector("#coin-div").innerHTML +=
      `<img src="images/nickel.png" alt="nickel" id="nickel-5" class="coin" draggable="true" ondragstart="drag(event)">`
  } else if (coin == "dime") {
    document.querySelector("#coin-div").innerHTML +=
      `<img src="images/dime.png" alt="dime" id="dime-10" class="coin" draggable="true" ondragstart="drag(event)">`
  } else if (coin == "quarter") {
    document.querySelector("#coin-div").innerHTML +=
      `<img src="images/quarter.png" alt="quarter" id="quarter-25" class="coin" draggable="true" ondragstart="drag(event)">`
  }

}

const allowDrop = (ev) => {
  ev.preventDefault();
}

const drag = (ev) => {
  ev.dataTransfer.setData("text", ev.target.id);
  coinValue = ev.target.id.split("-").pop();
  coinType = ev.target.id.split("-")[0];
}

const drop = (ev) => {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  document.querySelector(`#${data}`).remove();
  printCoin(coinType);
  coinCount++;
  moneyTotal += eval(coinValue);
  console.log(moneyTotal / 100);
}