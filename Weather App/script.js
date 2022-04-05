var getInput = document.getElementById("textInput");


var descEle = document.getElementById("weatherDesc");
var descImgEle = document.getElementById("weatherImg");
var descImgTemp = document.getElementById("weatherTemp");
var descImgHumid = document.getElementById("weatherHumid");
var createLabel = document.createElement("label");
var labelTwo = document.getElementById("labelOne");

function weatherInfo(){
    fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q="+getInput.value+"&days=3", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a0d6678f1emsh3a0930cbbcb9fd8p13e4a0jsn4497624ab91a",
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
	}
    })
    .then(response => response.json())
    .then(response => responseData(response))
}


function responseData(response){
    console.log(response);
    if(response.error){
        console.log("Error");
        labelTwo.innerText = `Error: ${response.error.code} - ${response.error.message}`;
    }

    if(response.current){
        labelTwo.innerText = ` Current Weather Forecast of ${response.location.name}, ${response.location.region} `;
        var descIcon = response.current.condition.icon;
        descEle.innerText = response.current.condition.text;
        descImgEle.setAttribute("src",descIcon);
        descImgTemp.innerHTML = `Temperature: ${response.current.temp_c}C / ${response.current.temp_f}F `
        descImgHumid.innerText = `Humidity:  ${response.current.humidity}`;
    }
}