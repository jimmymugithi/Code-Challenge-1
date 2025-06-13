// function estimateTransactionFee() {
//   const amountStr = window.prompt("How much are you sending");
//   //parseInt()
//   const amount = parseInt(amountStr);

//   if (isNaN(amount) || amount <= 0) {
//     console.log("failed to convert");
//     console.log(amountStr);
//     return;
//   }

//   let transactionCost = (amount * 1.5) / 100;
//   //console.log(transactionCost)
//   if (transactionCost <= 10) {
//     alert(
//       `Sending KES ${amount}\nTransaction cost = KES ${transactionCost}\nTotal Amount = KES ${
//         amount + transactionCost
//       }`
//     );
//     return;
//   }

//   if (transactionCost >= 70) {
//     alert(`sending KES ${amount}
//         transactionCost = 70
//         Total Amount = ${amount + 70}
//         `);
//   }
//   alert(`sending KES ${amount}
//     transactionCost = 70
//     Total Amount = ${parseInt(amount + transactionCost)}
//     `);
// }
function estimateTransactionFee() {
  const amountStr = window.prompt("How much are you sending?");
  //parseInt()
  const amount = parseInt(amountStr);

  if (isNaN(amount) || amount <= 0) {
    console.log("Failed to convert.");
    return;
  }

  let transactionCost = (amount * 1.5) / 100;
  //console.log(transactionCost)

  if (transactionCost <= 10) {
    transactionCost = 10;
    alert(
      `Sending KES ${amount}\nTransaction cost = ${transactionCost}\nTotal Amount = ${
        amount + transactionCost
      }`
    );
    return;
  }

  if (transactionCost >= 70) {
    transactionCost = 70;
    alert(
      `Sending KES ${amount}\nTransaction cost = ${transactionCost}\nTotal Amount = ${
        amount + transactionCost
      }`
    );
    return;
  }

  alert(
    `Sending KES ${amount}\nTransaction cost = ${transactionCost}\nTotal Amount = ${parseInt(
      amount + transactionCost
    )}`
  );
}

// Now we call it:
estimateTransactionFee();
