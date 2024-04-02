window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

  // Get values from drop-downs
  const topicDropdown = document.querySelector("#topicSelection");
  const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
  const countDropdown = document.querySelector("#countSelection");
  const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;

  // Get and display quotes
	function fetchQuotes(topic, count) {
	   // TODO: Modify to use XMLHttpRequest
		const xhr = new XMLHttpRequest();
		xhr.responseType = "json";
		var url = "https://wp.zybooks.com/quotes.php?topic="+selectedTopic+"&count="+selectedCount;
		xhr.open("GET", url);
		
		console.log(JSON.parse(this.response))
		
		xhr.onreadystatechange = function(){
			if (this.readyState === selectedCount) {
				xhr.onreadystatechange = null;
			}
			if (this.status === 200) {
				var jsonResponse = JSON.parse(this.response);
				console.log(jsonResponse)
			} else if (this.status !== 0) {
				var jsonResponse = JSON.parse(this.response);
			}
		}	
		xhr.send();
	}
	   
   });
});

/* function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
	const xhr = new XMLHttpRequest();
	xhr.responseType = "json";
	var url = "https://wp.zybooks.com/quotes.php?topic="+selectedTopic+"&count="+selectedCount;
	xhr.open("GET", url);
	
	console.log(JSON.parse(this.response))
	
	xhr.onreadystatechange = function(){
		if (this.readyState === selectedCount) {
			xhr.onreadystatechange = null;
		}
		if (this.status === 200) {
			var jsonResponse = JSON.parse(this.response);
			console.log(jsonResponse)
		} else if (this.status !== 0) {
			var jsonResponse = JSON.parse(this.response);
		}
	}	
	xhr.send();
}
 */
function responseReceivedHandler(){
	document.querySelector("#quotes").innerHTML = 
		"<li>"+jsonResponse[1]+"</li>"
		"<li>"+jsonResponse[2]+"</li>"
		"<li>"+jsonResponse[3]+"</li>"
		"<li>"+jsonResponse[4]+"</li>"
		"<li>"+jsonResponse[5]+"</li>"
}
