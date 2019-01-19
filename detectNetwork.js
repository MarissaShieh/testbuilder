// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

//Check right number of numbers
if (cardNumber.length < 14 || cardNumber.length > 15) {
  return "ERROR: Not a valid number"
}

inputNum = cardNumber.split("");


//Check if it's a valid Diner's Club or AE card
if (inputNum[0] != "3"){
  return "This number is not part of the Diner's Club network nor American Express's."
} 
// checking Diner's Club
else if (inputNum[1] === "8" || inputNum[1] === "9"){
  if (inputNum.length === 14){
    return "Diner's Club"
  }
}
// checking American Express
else if (inputNum[1] === "4" || inputNum[1] === "7"){
  if (inputNum.length === 15){
    return "American Express"
  }
}


return "This number is not part of the Diner's Club network nor American Express's."
};


