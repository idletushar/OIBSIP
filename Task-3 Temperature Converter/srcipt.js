function convertTemperature() {
    let temperatureInput = document.getElementById('temperature').value;
    let unitInput = document.getElementById('unit').value;
    let resultElement = document.getElementById('result');

    // Validate the temperature input
    if (isNaN(temperatureInput)) {
        resultElement.textContent = 'Invalid temperature input.';
        return;
    }

    let temperature = parseFloat(temperatureInput);
    let convertedTemperature, unit;

    if (unitInput === 'celsius') {
        convertedTemperature = (temperature * 9 / 5) + 32;
        unit = 'Fahrenheit';
    } else {
        convertedTemperature = (temperature - 32) * 5 / 9;
        unit = 'Celsius';
    }

    resultElement.textContent = 'Converted temperature: ' + convertedTemperature.toFixed(2) + ' ' + unit;
}

let convertBtn = document.getElementById('convertBtn');
convertBtn.addEventListener('click', convertTemperature);