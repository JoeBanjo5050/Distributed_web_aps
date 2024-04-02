//Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses=10){
	
	if (totalGuesses == null){
		totalGuesses = 12;
	}
	
	let number = prompt("Enter a number between 1 and 100.") 
	for(let count = 1; count <  totalGuesses+1; count ++){
		
		if(isNaN(number)){
			prompt( "Please enter a number.")
			if(isNaN(number)){
				number = prompt( "Please enter a number.")
				if(number == numToGuess){
					return count;
				} 
			}
		}
   	
		if(number < numToGuess && number != null){
    	
			if(count == totalGuesses){
				return "0";
			}
			number = prompt(number+" is too small. Guess a larger number.");

		continue; 
		}
		
		if(number > numToGuess && number != null){
    	
		  if(count == totalGuesses){
				return "0";
			}
			number = prompt(number+" is too large. Guess a smaller number.");
		
		continue; 
		}
		
		if(number == numToGuess){
			return count;
		} 

		if(number == null){
			return "0";
		} 

	}
}