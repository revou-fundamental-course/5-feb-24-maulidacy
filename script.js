var isCelsius = true;
function convertToCelsius() {
    var temp = document.getElementById('celsius').value;
    if (temp === '' || isNaN(temp)) {
        alert('Silakan masukkan angka yang valid');
    } else {
        var result;
        if (isCelsius) {
            result = temp * 9 / 5 + 32;
            document.getElementById('outputFahrenheit').innerText = result;
            document.getElementById('calculation').innerText = temp + '°C * 9/5 + 32 = ' + result + '°F';
        } else {
            result = (temp - 32) * 5 / 9;
            document.getElementById('outputCelcius').innerText = result;
            document.getElementById('calculation').innerText = '(' + temp + '°F - 32) * 5/9 = ' + result + '°C';
        }
    }
}

function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('outputFahrenheit').innerText = '';
    document.getElementById('outputCelcius').innerText = '';
    document.getElementById('calculation').innerText = '';
}

function reverse() {
    isCelsius = !isCelsius;
    document.getElementById('celsius').placeholder = isCelsius ? 'Masukkan Suhu (°C)' : 'Masukkan Suhu (°F)';
    reset();
}


