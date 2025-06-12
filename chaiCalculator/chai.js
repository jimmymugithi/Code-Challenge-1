function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200; // ml
  const milkPerCup = 50; // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2; // teaspoons

  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  console.log(`To make ${numberOfCups} cup(s) of Kenyan Chai, you will need:
  Water: ${totalWater} ml
  Milk: ${totalMilk} ml
  Tea Leaves (Majani): ${totalTeaLeaves} tablespoon(s)
  Sugar (Sukari): ${totalSugar} teaspoon(s)

  Enjoy your Chai Bora!`);
}

// Prompt the user for input
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseInt(input);

// Call the function with user input
if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Please enter a valid number of cups.");
}


