// *MILD CHALLENGE*

function evenOdd(number) {
    var number;
    if (number % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
};

evenOdd(12); // prints even
evenOdd(3); // prints odd
evenOdd(56); // prints even
evenOdd(77); // prints odd


// **MEDIUM CHALLENGE**

var goodDrivingRecord = true;
var age = 24;
// prints Enjoy your competitively priced rental car!

goodDrivingRecord = false
age = 47
//prints Enjoy your competitively priced rental car!

goodDrivingRecord = true
age = 32
// prints Enjoy %10 off your rental car!

goodDrivingRecord = false
age = 23
// prints You will need a co-signer to move forward with the car rental.

if (goodDrivingRecord === true && age > 25) {
  console.log("Enjoy %10 off your rental car!");
} else if (goodDrivingRecord === true || age > 25) {
  console.log("Enjoy your competitively priced rental car!")
} else {
  console.log("You will need a co-signer to move forward with the car rental.")
};


// ***SPICY CHALLENGE***

function fizzBuzz(number) {
    var number;
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0){
      console.log("Buzz")
    } else {
      console.log(number);
    }
  };
  
  fizzBuzz(12); // prints Fizz
  fizzBuzz(20); // prints Buzz
  fizzBuzz(60); // prints FizzBuzz
  fizzBuzz(17); // prints 17