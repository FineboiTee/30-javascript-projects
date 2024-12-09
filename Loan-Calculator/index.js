function calculateLoan(){

    loanAmountValue = parseFloat(document.getElementById("loan").value);
      
    interestRateValue = parseFloat(document.getElementById("interest").value);

    monthsValue = parseInt(document.getElementById("months").value);


    interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsValue;

   monthlyPayment = (loanAmountValue/monthsValue + interest).toFixed(2);

  document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`;
}

