let coinCount = 0;
let moneyTotal = 0;
let coinValue = 0;
let coinType = ""

const printCoin = (coin) => {
  if (coin == "penny") {
    document.querySelector("#coin-div").innerHTML += `
  <img src="images/penny.png" alt="penny" id="penny-1" class="coin" draggable="true" ondragstart="drag(event)">
  `
  } else if (coin == "nickel") {
    document.querySelector("#coin-div").innerHTML +=
      `<img src="images/nickel.png" alt="nickel" id="nickel-5" class="coin" draggable="true" ondragstart="drag(event)">`
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