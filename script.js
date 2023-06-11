
/* Include a check to see if the user inputs a value out of scope of the desired values (1-100)
It should be compared to a variable named: numberToGuess
*/

let numberToGuess;
let max = 100;
let min = 1;
let guess = Math.floor((max + min) / 2);


function randomNumber(userGuess, computersNumber) {

    // YOUR CODE BELOW
    if (!(userGuess >= 1 && userGuess <= 100)) {
        return "Please enter a valid number between 1-100"//validate number is within the game rules
    }


    numberToGuess = computersNumber;

    if (userGuess < computersNumber) {
        return "To low. Try again"
    } else if (userGuess > computersNumber) {
        return "To high. Please try again"
    } else {
        return `You did it! my number was ${computersNumber} all along!`
    }


    // YOUR CODE ABOVE
}




//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

function startCompGuess(num) {
    // This should return a string that denotes the first guessed number

    // YOUR CODE ...
    max = 100;
    min = 1;
    guess = Math.floor((max + min) / 2)
    return `Is this your number? ${guess}?`
}

function compGuess(reply) {
    /* 
      The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */
    if (reply === "lower") {
        max = guess - 1; //minus the guess out of the range possible choices 
        guess = Math.floor((max + min) / 2);//New guess range
        return `Is this your number? ${guess}`;
    } else if (reply === "higher") {
        min = guess + 1; //add to the max guess 
        guess = Math.floor((max + min) / 2);//new guess
        return `Is this your number? ${guess}`;
    } else if (reply === "correct") {
        return `Haha that wasn't too hard! I knew it was ${guess} all along!`
    }

}

