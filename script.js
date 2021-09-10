let button = document.querySelector('.button');
let inputVal = document.querySelector('.inputVal');
let CityName = document.querySelector('.CityName');
let note = document.querySelector('.note');
let display = document.querySelector('.display');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let speed = document.querySelector('.speed');
let myVideo = document.querySelector('#myVideo');
let foot = document.querySelector('.foot');
let mic = document.querySelector('.fa-microphone');

function myFunction() {
    alert('*Please refresh the page before every input to feel the weather with background.');
}

mic.addEventListener('click', ()=>{
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function(event) {
        console.log(event);
        inputVal.value = event.results[0][0].transcript;
    }
    recognition.start();
})

let audio = document.createElement('audio');
function change(img)
{
    if(img == 'Rain')
    {
        myVideo.innerHTML = `<source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/HyK36gOdmjm0pmnp3/videoblocks-rain-drops-in-montpellier-streets-close-up-view-france-slow-motion_sc_6ffq5r__9e7f9e9f85141d412a4e03d10bc176dc__P360.mp4" type="video/mp4">`
        
        audio.setAttribute('src' , 'https://www.soundjay.com/nature/rain-02.mp3');
        audio.loop = true;
        audio.play();
    }
    else if(img == 'Clouds')
    {
        myVideo.innerHTML = `<source src="https://cdn.videvo.net/videvo_files/video/free/2015-07/small_watermarked/Clouds_1_1_preview.webm" type="video/mp4">`
        
        audio.setAttribute('src' , '');
    }
    else if(img == 'Thunderstorm')
    {
        myVideo.innerHTML = `<source src="https://static.videezy.com/system/resources/previews/000/039/141/original/stockvideo_01054.mp4" type="video/mp4">`
        
        audio.setAttribute('src' , 'http://soundbible.com/grab.php?id=2053&type=mp3');
        audio.loop = true;
        audio.play();
    }
    else if(img == 'Clear')
    {
        myVideo.innerHTML = `<source src="https://static.videezy.com/system/resources/previews/000/040/880/original/stockfootage0691.mp4" type="video/mp4">`
        
        audio.setAttribute('src' , 'https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/manoj-mix-3314.mp3');
        audio.loop = true;
        audio.play();
    }
    else if(img == 'Mist')
    {
        myVideo.innerHTML = `<source src="https://static.videezy.com/system/resources/previews/000/044/624/original/62244_Dark-foggy-background_HD_BG.mp4" type="video/mp4">`
        foot.style.color = "white";
        
        audio.setAttribute('src' , 'http://soundbible.com/grab.php?id=951&type=mp3');
        audio.loop = true;
        audio.play();
    }
    else if(img == 'Smoke')
    {
        myVideo.innerHTML = `<source src="https://static.videezy.com/system/resources/previews/000/038/233/original/2.mp4" type="video/mp4">`
        display.style.color = "white";
        inputVal.style.color = "white";
        button.style.color = "white";
        foot.style.color = "white";
        
        audio.setAttribute('src' , 'https://www.soundjay.com/nature/ocean-wave-1.mp3');
        audio.loop = true;
        audio.play();
    }
    else if(img == 'Haze')
    {
        myVideo.innerHTML = `<source src="https://static.videezy.com/system/resources/previews/000/000/124/original/MVI_0778.mp4" type="video/mp4">`
        display.style.color = "white";
        inputVal.style.color = "white";
        button.style.color = "white";
        foot.style.color = "white";
        
        audio.setAttribute('src' , 'https://www.soundjay.com/nature/hurricane-02.mp3');
        audio.loop = true;
        audio.play();
    }
}

button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputVal.value+'&appid=dd4413e384150aaa3934c39df67c9c1e')
    .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let nameVal = data.name;
            let tempVal = Math.round(((data.main.temp-273) + Number.EPSILON) * 100) / 100;
            let descVal = data.weather[0].description;
            let speedVal = data.wind.speed;
            let img = data.weather[0].main;

            note.innerHTML = "";

            CityName.innerHTML = nameVal;
            temp.innerHTML = `${tempVal}° C`;
            desc.innerHTML = descVal;
            speed.innerHTML = `${speedVal} km/h`;

            if(myVideo.innerHTML != '')
            {
                myFunction();
            }

            myVideo.innerHTML = '';
            console.log(myVideo.innerHTML);
            change(img);
            
        })

        .catch(err => alert("Wrong city name!"));
})