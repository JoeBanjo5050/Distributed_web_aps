/ Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses){
	if (totalGuesses == null){
  	totalGuesses = 12;
  }

	for(let count = 1; count < totalGuesses; count ++){
  	let number = prompt("Enter a number between 1 and 100.") 
		if(number < numToGuess && prompt() != null){
   	 prompt(number+" is too small. Guess a larger number.");
 
		}
		else if(number > numToGuess){
			prompt(number+" is too large. Guess a smaller number.");

		}
		else if(isNaN(number) && number != null){
			prompt( "Please enter a number and give the user another chance to enter another number without losing a turn.")

		}
		else if(prompt() == null){

			return "0";
		}  
		else if( number == numToGuess){
 
		  return count;
		}  
		else if (promt() == null){

		  return "0";
		}
		else if (count == totalGuesses){
   
		  return "0";
		}
 }
}

