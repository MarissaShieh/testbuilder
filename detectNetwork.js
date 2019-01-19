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


  inputNum = cardNumber.split("");


//Check if it's a valid Diner's Club or AE card
  if (inputNum[0] === "3"){
    return validDinerOrAmerican(inputNum);
  } 

  //Valid Visa?
  else if (inputNum[0] === "4"){
    if (isVisa(inputNum)){
      return "Visa";
    } else {
      return "Not a valid Visa number";
    }
  }

  //Valid Mastercard or Maestro?
  else if (inputNum[0] === "5"){
    //Test if Maestro
    if (inputNum[1] === "0"){
      if (isMaestro(inputNum)){
        return "Maestro";
      } else {
        return "Not a valid Maestro";
      } 
    }

    //Otherwise send to Mastercard tester
    else if (isMastercard(inputNum)){
      return "MasterCard";
    } else {
      return "Not a valid MasterCard";
    }
  }


  //Valid Discover or Maestro?
  else if (inputNum[0] === "6"){
    //Test if Maestro
    if (inputNum[1] === "3"){
      if (isMaestro(inputNum)){
        return "Maestro";
      } else {
        return "Not a valid Maestro";
      } 
    }

    //Otherwise send to Discover tester
    else if (isDiscover(inputNum)){
      return "Discover";
    } else {
      return "Not a valid Discover";
    }
  }


  return "This number is not a valid credit card number.";
};


//////HELPER FUNCTIONS BELOW////////

//Helper Function which determines the #s beginning in 3: Diner's Club and American Express
var validDinerOrAmerican = function(cardNumArray){
  // checking Diner's Club
  if (cardNumArray[1] === "8" || cardNumArray[1] === "9"){
    if (cardNumArray.length === 14){
      return "Diner's Club";
    }
  }
  // checking American Express
  else if (cardNumArray[1] === "4" || cardNumArray[1] === "7"){
    if (cardNumArray.length === 15){
      return "American Express";
    }
  }

  return "This number is not part of the Diner's Club network nor American Express's.";
};



//Visa helper function: Visa always has a prefix of 4 and a length of 13, 16, or 19.
var isVisa = function(cardNumArray){
  if (cardNumArray.length === 13 || cardNumArray.length === 16 || cardNumArray.length === 19){
    return true;
  } 
  return false;
};



//MasterCard helper function: Mastercard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
var isMastercard = function(cardNumArray){
  if (cardNumArray.length != 16){
    return false;
  }

  if (cardNumArray[1]==="1" || cardNumArray[1]==="2" || cardNumArray[1]==="3" || cardNumArray[1]==="4" || cardNumArray[1]==="5"){
    return true;
  }
  return false;
};



//Discover helper function. Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
var isDiscover = function(cardNumArray){
  if (cardNumArray.length === 16 || cardNumArray.length === 19){
    if (cardNumArray[1] === "5"){
      return true;
    } else if (cardNumArray.slice(1,4).toString() === "0,1,1"){
      return true;
    } else if (cardNumArray.slice(1,3).toString() === "4,4" || cardNumArray.slice(1,3).toString() === "4,5" || cardNumArray.slice(1,3).toString() === "4,6" || cardNumArray.slice(1,3).toString() === "4,7" || cardNumArray.slice(1,3).toString() === "4,8" || cardNumArray.slice(1,3).toString() === "4,9") {
      return true;
    }
  }

  return false;
};


//Maestro helper function. Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
var isMaestro = function(cardNumArray){ 
  return false;
}