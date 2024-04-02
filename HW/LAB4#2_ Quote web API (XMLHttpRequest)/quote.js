window.addEventListener("DOMContentLoaded", function (){
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);
	  responseReceivedHandler();
		
   });
});

function fetchQuotes(topic, count){
	var url = "https://wp.zybooks.com/quotes.php?topic="+topic+"&count="+count;
	const xhr = new XMLHttpRequest();
	xhr.addEventListener("load", responseReceivedHandler);
	xhr.responseType = "json";
	xhr.open("GET", url);
	xhr.send();
	}

function responseReceivedHandler(){
	let html = "<ol>";
	if (this.status == 200){
		for (let c = 0; c < this.response.length; c++){
			html += "<li>"+this.response[c].quote+" - "+this.response[c].source+"</li>";
		}
	}else {
		document.querySelector("#quotes").innerHTML = "Topic 'friendship' not found";
		console.log(document.querySelector("#quotes").innerHTML)
	}
	html += "</ol>"
	console.log(html)
	document.querySelector("#quotes").innerHTML = html;
	
}

