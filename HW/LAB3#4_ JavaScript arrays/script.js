// Put your solution here
function divideArray(nums){
	
	evenNums = [];
	oddNums = [] ;
	
	for ( let i = 0; i < nums.length; i++){
	
		if (nums[i] % 2 == 0){
			evenNums.push(nums[i]);
		}
		
		if (nums[i] % 2 != 0){
			oddNums.push(nums[i]);
		}
	}
	
	evenNums = [...new Float64Array(evenNums).sort()];
	oddNums = [...new Float64Array(oddNums).sort()];
	
	if (evenNums.length < 1){
		evenNums.push("None") ;
	}
	
	if (oddNums.length < 1){
		oddNums.push("None") ;
	}
	
	console.log("Even numbers:")
	
	for (y = 0; y < evenNums.length; y++){
		console.log(evenNums[y]);
	}
	
	console.log("Odd numbers:");
	
	for (y = 0; y < oddNums.length; y++){
		console.log(oddNums[y]);
	}
}
