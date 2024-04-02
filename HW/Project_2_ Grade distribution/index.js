function parseScores(scoreString) {
  const scoreArray = scoreString.trim().split(" ");
  console.log(scoreArray)
  return scoreArray.filter(score => score >= 0 && score <= 100);
}

function buildDistributionArray(scoresArray) {
  const distributionArray = [0, 0, 0, 0, 0];
  scoresArray.forEach(score => {
    if (score >= 90) {
      distributionArray[0]++;
    } else if (score >= 80) {
      distributionArray[1]++;
    } else if (score >= 70) {
      distributionArray[2]++;
    } else if (score >= 60) {
      distributionArray[3]++;
    } else {
      distributionArray[4]++;
    }
  });
  return distributionArray;
}

function setTableContent(scoreString) {
  const scoreArray = parseScores(scoreString);
  const distributionArray = buildDistributionArray(scoreArray);

  const firstRow = document.getElementById("firstRow");
  firstRow.innerHTML = "";

  for (let i = 0; i < distributionArray.length; i++) {
  const gradeCount = distributionArray[i];
  const barHeight = gradeCount * 10;
  const barClass = `bar${i}`;
  const barDiv = `<div style="height:${barHeight}px;" class="${barClass}"></div>`;
  const barCell = `<td>${barDiv}</td>`;
  firstRow.innerHTML += barCell;
}

  const thirdRow = document.getElementById("thirdRow");
  const gradeLabels = ["A", "B", "C", "D", "F"];
  thirdRow.innerHTML = "";

  for (let i = 0; i < distributionArray.length; i++) {
    const gradeCount = distributionArray[i];
    const gradeLabel = gradeLabels[i];
    const cellHTML = `<td>${gradeCount}</td>`;
    thirdRow.innerHTML += cellHTML;
  }
}


// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");
