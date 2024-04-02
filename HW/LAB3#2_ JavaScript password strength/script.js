function isStrongPassword(passWord){
	const indexOfpW = passWord.indexOf("password");
	if (passWord.length >7 && indexOfpW ==-1){
		for (let i = 0; i <= passWord.length; i++){
			if (passWord.charCodeAt(passWord[i]) > 64 && passWord.charCodeAt(passWord[i]) < 100) {
				return true;
			}
		}
	}
	else{
		return false;
	}
}
console.log(isStrongPassword("abc1235U"));
