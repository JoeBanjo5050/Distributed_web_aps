function calcWordFrequencies() {
  const wordFreqMap = new Map();
  const words = prompt("Enter a list of words separated by spaces:");
  const wordList = words.split(" ");

  // Count the frequencies of each word in the list
  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];  //.toLowerCase()
    if (wordFreqMap.has(word)) {
      wordFreqMap.set(word, wordFreqMap.get(word) + 1);
    } else {
      wordFreqMap.set(word, 1);
    }
  }

  // Output the word frequencies to the console
  for (const [word, freq] of wordFreqMap.entries()) {
    console.log(`${word} ${freq}`);
  }
}



