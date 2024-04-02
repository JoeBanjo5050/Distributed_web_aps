window.addEventListener("DOMContentLoaded", function (){
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

	function fetchQuotes(topic, count){
		// Get values from drop-downs
		const topicDropdown = document.getElementById("topicSelection");
		const selectedTopic = topicDropdown.value;
		const countDropdown = document.getElementById("countSelection");
		const selectedCount = countDropdown.value;
		
		var url = "https://wp.zybooks.com/quotes.php?topic=${selectedTopic}&count=${selectedCount}";
		
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.responseType = "json";
		
		xhr.onload = function () {
			if (xhr.status === 200) {
			  responseReceivedHandler(xhr.response);
			} else {
			  document.getElementById("quotes").textContent = "<ol><li>Topic ${selectedTopic} not found</li></ol>";
			}
		};
		
		xhr.send();
	}

	function responseReceivedHandler(response) {
		  const quotesDiv = document.getElementById("quotes");

		  const quotes = response;

		  const orderedList = document.createElement("ol");

		  quotes.forEach(function (quoteObj) {
				const listItem = document.createElement("li");
				const quoteText = document.createTextNode(`${quoteObj.quote} - ${quoteObj.source}`);
				listItem.appendChild(quoteText);
				orderedList.appendChild(listItem);
		  });

		  quotesDiv.innerHTML = "";
		  quotesDiv.appendChild(orderedList);
	}
	
   });
});
