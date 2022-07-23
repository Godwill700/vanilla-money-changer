let chargesRange = document.querySelector("#charge-percentage");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
let rateInput = document.querySelector("#black-market-rate");
let zwPriceInput = document.querySelector("#zw-price");
let ratedUsdPrice = document.querySelector("#rated-usd-price");
let estUsdPriceInput = document.querySelector("#est-usd-price");
let savingOrLoss = document.querySelector("#total-saving-loss");

/************************
 * CALCULATE USD PRICE FORMULA *
 ************************/

calculateUsdPrice = () => {
  let blackMarketRate = +rateInput.value;
  let chargeRate = chargesRange.innerText / 100;
  let zwPrice = +zwPriceInput.value;
  let charges = zwPrice * chargeRate;
  let zwPricePlusCharge = zwPrice + charges;
  ratedUsdPrice.innerHTML = +(zwPricePlusCharge / blackMarketRate).toFixed(2);
};

/*******************************
 * SETTING THE CHARGES COUNTER *
 *******************************/

decrease = () => {
  return chargesRange.innerHTML--;

  calculateUsdPrice();
};

increase = () => {
  return chargesRange.innerHTML++;

  calculateUsdPrice();
};

calculateSavingOrLoss = () => {
  let equivPrice = ratedUsdPrice.innerHTML;
  savingOrLoss.innerHTML = +(estUsdPriceInput.value - equivPrice).toFixed(2);
  let totalSavingOrLoss = +savingOrLoss.innerHTML;
  let totalSaving = document.getElementById("saving");
  let totalLoss = document.getElementById("loss");
  console.log(totalSaving);
  if (totalSavingOrLoss > 0) {
    totalSaving.style.display = "inline-block";
    totalSaving.style.marginLeft = "2.5rem";
  } else {
    totalLoss.style.display = "inline-block";
    totalLoss.style.color = "#F71735";
    totalLoss.style.marginLeft = "2rem";
  }
};

zwPriceInput.addEventListener("change", calculateUsdPrice);

rateInput.addEventListener("change", calculateUsdPrice);

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);

estUsdPriceInput.addEventListener("change", calculateSavingOrLoss);
