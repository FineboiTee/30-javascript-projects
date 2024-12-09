const btnEl = document.getElementById("calculate")
const billInput = document.getElementById("bill")
const tipEl = document.getElementById("tip")
const totalSpan = document.getElementById("total")

function calculateTotal(){
   const billValue = billInput.value;
   console.log(billValue);
   const tipValue = tipEl.value;
   const totalValue = billValue*(1 + tipValue/100);
   totalSpan.innerText = totalValue.toFixed(2);


}

btnEl.addEventListener("click", calculateTotal)