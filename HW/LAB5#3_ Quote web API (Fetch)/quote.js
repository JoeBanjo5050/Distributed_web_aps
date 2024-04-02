window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

// TODO: Modify to use Fetch API
function fetchQuotes(topic, count) {
   const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;

   fetch(url)
      .then(response => {
         if (response.ok) {
            return response.json();
         } else {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
         }
      })
      .then(data => {
         let html = "<ol>";
         for (let quote of data) {
            html += `<li>${quote.quote} - ${quote.source}</li>`;
         }
         html += "</ol>";
         document.querySelector("#quotes").innerHTML = html;
      })
      .catch(error => {
         document.querySelector("#quotes").innerHTML = "Topic 'friendship' not found";;
      });
}
