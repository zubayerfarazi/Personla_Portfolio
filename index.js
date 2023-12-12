// opening and closing Hambergar
document.getElementById('openHam').addEventListener('click', function(){
    document.getElementById('navigationItems').style.display = 'flex';
    document.getElementById('closeHam').style.display = 'block';
    document.getElementById('openHam').style.display = 'none';
})

document.getElementById('closeHam').addEventListener('click', function(){
    document.getElementById('navigationItems').style.display = 'none';
    document.getElementById('closeHam').style.display = 'none';
    document.getElementById('openHam').style.display = 'block';
})

//Skills, Experiences, and Education
document.getElementById('experience').addEventListener('click', function(){
    document.getElementById('skills_li').style.display = 'none';
    document.getElementById('experience_li').style.display = 'block';
    document.getElementById('education_li').style.display = 'none';
})
document.getElementById('education').addEventListener('click', function(){
    document.getElementById('skills_li').style.display = 'none';
    document.getElementById('experience_li').style.display = 'none';
    document.getElementById('education_li').style.display = 'block';
})
document.getElementById('skills').addEventListener('click', function(){
    document.getElementById('skills_li').style.display = 'block';
    document.getElementById('experience_li').style.display = 'none';
    document.getElementById('education_li').style.display = 'none';
})

//sending mail
// document.getElementById('goButton').addEventListener('click', function(){
//     let words = document.getElementById('emailField').value;
//     alert('Thanks For your Beautiful Words: ' + words);
// })

//Let us Talk Button 
document.getElementById('letusTalk').addEventListener('click', function(){
    let contactInfo = document.getElementById('card');
    if (contactInfo.style.display === 'block') {
        contactInfo.style.display = 'none';
    } else {
        contactInfo.style.display = 'block';
    }
})

//API Fetch
fetch('http://www.boredapi.com/api/activity/')
.then(res => res.json())
.then(data => {
    document.getElementById('goButton').addEventListener('click', function(event){
        document.getElementById('emailField').innerHTML = '';
        
        let createElement = document.createElement('p');
        createElement.innerHTML = data.activity;
       document.getElementById('emailField').appendChild(createElement);
       document.getElementById('emailField').style.border = '2px solid red';
       document.getElementById('emailField').style.borderRadius = '10px';
       document.getElementById('emailField').style.padding = '10px';
       document.getElementById('goButton').innerHTML = "Refresh Again"

        // console.log(data.activity);
        
    })
})


const apiKey = 'a43e5c8253adc3e603997f97943b4429';
const cityName = 'Dhaka';
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    let weatherDegree = document.getElementById('degree');
    let getWeather = document.createElement('p');
    getWeather.innerText = (data.main.temp - 273.15).toFixed() + ' °C';

    document.getElementById('modeOption').appendChild(getWeather);
    document.getElementById('modeOption').style.fontSize = '20px';
    document.getElementById('modeOption').style.border = '2px solid red';
    document.getElementById('modeOption').style.borderRadius = '20px';
    document.getElementById('modeOption').style.padding = '10px';
    document.getElementById('modeOption').style.backgroundColor = 'white';
    document.getElementById('modeOption').style.textAlign = 'center';
    document.getElementById('modeOption').style.cursor = 'pointer';
  })