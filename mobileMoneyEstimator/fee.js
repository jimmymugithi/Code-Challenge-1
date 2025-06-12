  function estimateTransactionFee(){
    const amountStr =window.prompt("How much are you sending")
    //parseInt()
    const amount =parseInt(amountStr);

    if (!amount) {
      console.log("failed to convert");
      console.log( amountStr);
      return;
    }

    let transactionCost = (amount * 1.5) / 100;
    //console.log(transactionCost)
    if (transactionCost <=10){
        alert (`sending KES $ {amount}
            Transaction cost KES 10
            Total Amount = ${amount +10}
            `);
            return;
    }

if (transactionCost >= 70) {
    alert (`sending KES ${amount}
        Transaction cost KES 10
        Total Amount = ${amount + 70}
        `)
}
alert (`sending KES ${amount}
    Transaction cost KES 70
    Total Amount = ${parseInt(amount + transactionCost)}
    `);
}
   