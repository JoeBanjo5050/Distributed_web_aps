function convertCtoF(celsius) {
  return celsius * 9/5 + 32;
}

function convertFtoC(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function domLoaded() {
  const cInput = document.getElementById('cInput');
  const fInput = document.getElementById('fInput');
  const convertButton = document.getElementById('convertButton');
  const errorMessage = document.getElementById('errorMessage');
  const weatherImage = document.getElementById('weatherImage');

  cInput.addEventListener('input', function() {
    fInput.value = '';
  });

  fInput.addEventListener('input', function() {
    cInput.value = '';
  });

  convertButton.addEventListener('click', function() {
    let convertedTemp;
    if (cInput.value) {
      const cTemp = parseFloat(cInput.value);
      if (isNaN(cTemp)) {
        errorMessage.innerHTML = `${cInput.value} is not a number`;
      } else {
        convertedTemp = convertCtoF(cTemp);
		console.log("c"+convertedTemp)
        fInput.value = convertedTemp.toFixed(0);
        errorMessage.innerHTML = '';
      }
    } else if (fInput.value) {
      const fTemp = parseFloat(fInput.value);
      if (isNaN(fTemp)) {
        errorMessage.innerHTML = `${fInput.value} is not a number`;
      } else {
        convertedTemp = convertFtoC(fTemp);
		console.log("f"+convertedTemp)
        cInput.value = convertedTemp.toFixed(0);
        errorMessage.innerHTML = '';
      }
    }
    if (fInput.value  < 32) {
      weatherImage.src = 'cold.png';
    } else if (fInput.value  >= 32 && fInput.value  <= 50) {
      weatherImage.src = 'cool.png';
    } else if(fInput.value  > 50) {
      weatherImage.src = 'warm.png';
    }
  });
}

document.addEventListener('DOMContentLoaded', domLoaded);
