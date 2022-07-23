let chargesRange = document.querySelector("#charge-percentage");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
let rateInput = document.querySelector("#black-market-rate");
let zwPriceInput = document.querySelector("#zw-price");
let ratedUsdPrice = document.querySelector("#rated-usd-price");
// let blackMarketRate = rateInput.value;
// const billInput = document.querySelector("#bill");
// let result = document.querySelector("#result");

console.log(ratedUsdPrice);

/*********************************
 * SETTING THE BLACK MARKET RATE *
 *********************************/
setRate = () => {
  let blackMarketRate = rateInput.value;
};

rateInput.addEventListener("change", setRate);

/*******************************
 * SETTING THE CHARGES COUNTER *
 *******************************/

increaseBtn.addEventListener("click", function () {
  return chargesRange.innerHTML++;
  console.log(chargesRange);
});

decreaseBtn.addEventListener("click", () => {
  return chargesRange.innerText--;
});

/************************
 * SETTING THE ZW PRICE *
 ************************/
calculateUsdPrice = () => {};

setZwPrice = () => {
  let zwPrice = +zwPriceInput.value;
  let blackMarketRate = +rateInput.value;
  let chargeRate = chargesRange.innerText-- / 100;
  let charges = zwPrice * chargeRate;
  let zwPricePlusCharge = zwPrice + charges;
  console.log(zwPricePlusCharge);

  ratedUsdPrice.innerHTML = +(zwPricePlusCharge / blackMarketRate).toFixed(2);

  console.log(ratedUsdPrice);

  setRate();
  console.log(blackMarketRate);
  calculateUsdPrice();
};

zwPriceInput.addEventListener("change", setZwPrice);
