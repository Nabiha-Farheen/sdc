
function getWeather() {

    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Enter a city name!");
        return;
    }

    let temp = Math.floor(Math.random() * 40);
    let humidity = Math.floor(Math.random() * 100);
    let wind = Math.floor(Math.random() * 30);

    document.getElementById("cityName").innerHTML = city;

    document.getElementById("result").innerHTML =
        `<h3>Temperature: ${temp} °C</h3>
         <h3>Humidity: ${humidity}%</h3>
         <h3>Wind Speed: ${wind} km/h</h3>`;
}
