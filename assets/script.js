const searchinput = document.getElementById('city');
const searchbutton = document.getElementById('search-btn');
const locationButton=document.querySelector('.location-btn');
const currentWeatherDiv = document.querySelector('.current-weather');
const weatherCardsDiv = document.querySelector('.weather-cards');
const apiKey ="917671694a7f09e7b8676dc2d9243549"
const searchHistory = document.querySelector('.searchHistory')
const historyArray = JSON.parse(localStorage.getItem('history')) || []

searchbutton.addEventListener('click', () => {
    
    const searchvalue = searchinput.value;
    console.log(searchvalue)
    if (searchvalue) {
        geoCode(searchvalue);
        historyArray.push(searchvalue)
        console.log(historyArray)
        localStorage.setItem('history', JSON.stringify(historyArray))
        const histButton = document.createElement("button")
        histButton.textContent = searchvalue
        searchHistory.append(histButton)

    }
})

for(let i = 0; i < historyArray.length; i++){
    const histButton = document.createElement("button")
        histButton.textContent = historyArray[i]
        searchHistory.append(histButton)
}




function geoCode(city){
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=2&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        const lat = data[0].lat
        const lon = data[0].lon
        currentWeather(lat,lon)
        forcastWeather(lat,lon)
    })
}

function currentWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // clear old data
        document.querySelector(".city").innerHTML = '';
        document.querySelector(".currenticon").innerHTML = '';
        document.querySelector(".currenttemp").innerHTML = '';
        document.querySelector(".currenthumid").innerHTML = '';
        document.querySelector(".currentwind").innerHTML = '';
        // append new data
        const city = document.createElement("h2")
        city.textContent = data.name
        document.querySelector(".city").append(city)

        const icon = document.createElement("img")
        icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
        document.querySelector(".currenticon").append(icon)
        const temp = document.createElement("h3")
        temp.textContent = "Temp: " + data.main.temp + "°F"
        document.querySelector(".currenttemp").append(temp)

        const humidity = document.createElement("h3")
        humidity.textContent = "Humidity: " + data.main.humidity + "%"
        document.querySelector(".currenthumid").append(humidity)

        const wind = document.createElement("h3")
        wind.textContent = "Wind: " + data.wind.speed + "mph"
        document.querySelector(".currentwind").append(wind)
    })
}

function forcastWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        document.querySelector(".dayone").innerHTML = '';
        document.querySelector(".forecasticon1").innerHTML = '';
        document.querySelector(".forecasttemp1").innerHTML = '';
        document.querySelector(".forecasthumid1").innerHTML = '';
        document.querySelector(".forecastwind1").innerHTML = '';

        document.querySelector(".day2").innerHTML = '';
        document.querySelector(".forecasticon2").innerHTML = '';
        document.querySelector(".forecasttemp2").innerHTML = '';
        document.querySelector(".forecasthumid2").innerHTML = '';
        document.querySelector(".forecastwind2").innerHTML = '';

        document.querySelector(".day3").innerHTML = '';
        document.querySelector(".forecasticon3").innerHTML = '';
        document.querySelector(".forecasttemp3").innerHTML = '';
        document.querySelector(".forecasthumid3").innerHTML = '';
        document.querySelector(".forecastwind3").innerHTML = '';

        document.querySelector(".day4").innerHTML = '';
        document.querySelector(".forecasticon4").innerHTML = '';
        document.querySelector(".forecasttemp4").innerHTML = '';
        document.querySelector(".forecasthumid4").innerHTML = '';
        document.querySelector(".forecastwind4").innerHTML = '';

        document.querySelector(".day5").innerHTML = '';
        document.querySelector(".forecasticon5").innerHTML = '';
        document.querySelector(".forecasttemp5").innerHTML = '';
        document.querySelector(".forecasthumid5").innerHTML = '';
        document.querySelector(".forecastwind5").innerHTML = '';
        

        // day 1
        const date = document.createElement("h4")
        date.textContent = moment.unix(data.list[5].dt).format("MM/DD/YYYY")
        console.log(date)
        document.querySelector(".dayone").append(date)

        const icon = document.createElement("img")
        icon.src = `https://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png`
        document.querySelector(".forecasticon1").append(icon)

        const temp = document.createElement("p")
        temp.textContent = "Temp: " + data.list[5].main.temp + "°F"
        document.querySelector(".forecasttemp1").append(temp)

        const humidity = document.createElement("p")
        humidity.textContent = "Humidity: " + data.list[5].main.humidity + "%"
        document.querySelector(".forecasthumid1").append(humidity)

        const wind = document.createElement("p")
        wind.textContent = "Wind: " + data.list[5].wind.speed + "mph"
        document.querySelector(".forecastwind1").append(wind)

        console.log(data.list[13].main.temp)

        // day 2
        const date2 = document.createElement("h4")
        date2.textContent = moment.unix(data.list[13].dt).format("MM/DD/YYYY")
        document.querySelector(".day2").append(date2)

        const icon2 = document.createElement("img")
        icon2.src = `https://openweathermap.org/img/w/${data.list[13].weather[0].icon}.png`
        document.querySelector(".forecasticon2").append(icon2)

        const temp2 = document.createElement("p")
        temp2.textContent = "Temp: " + data.list[13].main.temp + "°F"
        document.querySelector(".forecasttemp2").append(temp2)

        const humidity2 = document.createElement("p")
        humidity2.textContent = "Humidity: " + data.list[13].main.humidity + "%"
        document.querySelector(".forecasthumid2").append(humidity2)

        const wind2 = document.createElement("p")
        wind2.textContent = "Wind: " + data.list[13].wind.speed + "mph"
        document.querySelector(".forecastwind2").append(wind2)
        //day3
        const date3 = document.createElement("h4")
        date3.textContent = moment.unix(data.list[21].dt).format("MM/DD/YYYY")
        document.querySelector(".day3").append(date3)

        const icon3 = document.createElement("img")
        icon3.src = `https://openweathermap.org/img/w/${data.list[21].weather[0].icon}.png`
        document.querySelector(".forecasticon3").append(icon3)

        const temp3 = document.createElement("p")
        temp3.textContent = "Temp: " + data.list[21].main.temp + "°F"
        document.querySelector(".forecasttemp3").append(temp3)

        const humidity3 = document.createElement("p")
        humidity3.textContent = "Humidity: " + data.list[21].main.humidity + "%"
        document.querySelector(".forecasthumid3").append(humidity3)

        const wind3 = document.createElement("p")
        wind3.textContent = "Wind: " + data.list[21].wind.speed + "mph"
        document.querySelector(".forecastwind3").append(wind3)

        //day 4
        const date4 = document.createElement("h4")
        date4.textContent = moment.unix(data.list[29].dt).format("MM/DD/YYYY")
        document.querySelector(".day4").append(date4)

        const icon4 = document.createElement("img")
        icon4.src = `https://openweathermap.org/img/w/${data.list[29].weather[0].icon}.png`
        document.querySelector(".forecasticon4").append(icon4)

        const temp4 = document.createElement("p")
        temp4.textContent = "Temp: " + data.list[29].main.temp + "°F"
        document.querySelector(".forecasttemp4").append(temp4)
        const humidity4 = document.createElement("p")
        humidity4.textContent = "Humidity: " + data.list[29].main.humidity + "%"
        document.querySelector(".forecasthumid4").append(humidity4)

        const wind4 = document.createElement("p")
        wind4.textContent = "Wind: " + data.list[29].wind.speed + "mph"
        document.querySelector(".forecastwind4").append(wind4)
        //day 5

        const date5 = document.createElement("h4")
        date5.textContent = moment.unix(data.list[38].dt).format("MM/DD/YYYY")
        document.querySelector(".day5").append(date5)

        const icon5 = document.createElement("img")
        icon5.src = `https://openweathermap.org/img/w/${data.list[38].weather[0].icon}.png`
        document.querySelector(".forecasticon5").append(icon5)

        const temp5 = document.createElement("p")
        temp5.textContent = "Temp: " + data.list[38].main.temp + "°F"
        document.querySelector(".forecasttemp5").append(temp5)
        const humidity5 = document.createElement("p")
        humidity5.textContent = "Humidity: " + data.list[38].main.humidity + "%"
        document.querySelector(".forecasthumid5").append(humidity5)

        const wind5 = document.createElement("p")
        wind5.textContent = "Wind: " + data.list[38].wind.speed + "mph"
        document.querySelector(".forecastwind5").append(wind5)
    })

 
}

geoCode("Kannapolis")
