const inputValue = document.getElementById("input-temp")
const celsiusToFahrenheit = document.getElementById("celsius-to-fahrenheit")
const fahrenheitToCelsius = document.getElementById("fahrenheit-to-celsius")

const submit = document.getElementById("btn-submit")

const pOutput = document.getElementById("output-temp")

function conversionTemp() {
    let temp = inputValue.value

    if (celsiusToFahrenheit.checked) {
        temp = Number(temp)
        temp = temp * 9 / 5 + 32
        pOutput.textContent = temp.toFixed(1) + "°F"
    }
    else if (fahrenheitToCelsius.checked) {
        temp = Number(temp)
        temp = (temp - 32) * (5 / 9)
        pOutput.textContent = temp.toFixed(1) + "°C"
    } else {
        pOutput.textContent = "Select a option!"
    }
}

submit.onclick = conversionTemp