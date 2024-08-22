let inputvalue = document.querySelector('#cityinput')
let btn = document.querySelector('#add')
let city = document.querySelector('#cityoutput')
let descript = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')
apik = "63a90ae96d390ec37d6c1252f5a86e1a"
function convertion(val)
{
    return(val-273).toFixed(3)
}
btn.addEventListener('click', function()
{
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputvalue.value+"&appid="+apik)
    .then(res=>res.json())
    .then(data=>
    {
        let nameval = data["name"]
        let description = data["weather"]["0"]["description"]
        let temperature = data["main"]["temp"]
        let windspeed = data["wind"]["speed"]

        city.innerHTML=`Weather of <span>${nameval}</span>`
        temp.innerHTML=`Temperature: <span>${convertion(temperature)} °C</span>`
        descript.innerHTML=`Sky Conditions: <span>${description}<span>`
        wind.innerHTML=`Wind Speed: <span>${windspeed} km/h<span>`
    })
    .catch(err=> alert("You entered invalid city name."))
})