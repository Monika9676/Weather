const apiKey="b5d4bd4ff55e9e7241de2c945e55e330";
const url=`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

const textarea=document.querySelector(".textarea");
const btn=document.querySelector(".btn");
const weatherImage=document.querySelector(".weather_images");



async function checkWeather(city){
    const response=await fetch(url + city +`&appid=${apiKey}`);
    
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data =await response.json();
        console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "Km/h";

    if(data.weather[0].main=="Clouds"){
           weatherImage.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
           weatherImage.src="clear.png";
    }
    else if(data.weather[0].main=="Rain"){
           weatherImage.src="rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
           weatherImage.src="drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
           weatherImage.src="mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";}
    
}

 btn.addEventListener("click",()=>{
    checkWeather(textarea.value);
 })