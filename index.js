const API = '49cc8c821cd2aff9af04c9f98c36eb74';


//Récupération des éléments:

//Bouton: 'cherche'
let btn = document.querySelector('button');
let inputVille = document.querySelector('input');
//Les zones de textes qu'on va ecrire
let txtTemp = document.querySelector('#temp');
let txtHumide = document.querySelector('#humide');
let txtVent= document.querySelector('#vent');


//Quand on clique sur le bouton, on affiche la météo:

btn.onclick = afficherMeteo;

//Définir la fonction  'afficherMeteo'

function afficherMeteo() {
    //On récupere le nom de la vide
    let ville = inputVille.value;
    
    
    //temporaire
    let tempature = '20°C';
    let humidité = '18%';
    let vent = '13km/h';
    //fin temporaire
    
    
    //Récuperer les valeur:
    var resquest = new XMLHttpRequest();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${API}&units=metric`;
    resquest.open('GET', url);
    resquest.responseType = 'text';
     // Une fois qu'on reçu la réponse de l'Api
    resquest.onload = function () {
       //On transforme cette réponse txt en objet javascript
        let meteo = JSON.parse(resquest.response);
        console.log(meteo);
        //De cette objet , on extrait 3 informations
        tempature = meteo.main.temp;
        humidité = meteo.main.humidity;
        vent = meteo.wind.speed;
        weather = meteo.weather[0].main;
        let icon = getIcon(weather);
        console.log(meteo);
        
        //On écrit les valeurs de méteo sur la page
        document.getElementById("weather-icon").innerHTML = icon;
        txtTemp.textContent = tempature;
        txtHumide.textContent = humidité;
        txtVent.textContent = vent;
    }
    
    function getIcon() {
        if (weather === "Clear") {
           
            let imgsnow = document.querySelector('.containerimg');
            imgsnow.classList.add('imgsnow')
            return "<i class='fas fa-sun'></i>";
            
        } else if (weather === "Clouds") {
            return "<i class='fas fa-cloud'></i>";
        } else if (weather === "Rain") {
            return "<i class='fas fa-cloud-rain'></i>";
        } else if (weather === "Snow") {
            let imgsnow = document.querySelector('.containerimg');
            imgsnow.classList.add('imgsnow')
            return "<i class='fas fa-snowflake'></i>";
           
        } else {
            return "<i class='fas fa-question'></i>";
        }
    }








    
    
    resquest.send()
    
    
    
    
    
}

    
