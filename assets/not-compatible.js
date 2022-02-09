var spotifyImg5 = document.querySelector("#spotify-img-5")
var spotifyTitle5 = document.querySelector("#spotify-title-5")
var spotifyArtistname5 = document.querySelector("#spotify-artist-name-5")

var spotifyImg6 = document.querySelector("#spotify-img-6")
var spotifyTitle6 = document.querySelector("#spotify-title-6")
var spotifyArtistname6 = document.querySelector("#spotify-artist-name-6")

var spotifyImg7 = document.querySelector("#spotify-img-7")
var spotifyTitle7 = document.querySelector("#spotify-title-7")
var spotifyArtistname7 = document.querySelector("#spotify-artist-name-7")

var spotifyImg8 = document.querySelector("#spotify-img-8")
var spotifyTitle8 = document.querySelector("#spotify-title-8")
var spotifyArtistname8 = document.querySelector("#spotify-artist-name-8")





var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
    
};

fetch("https://v1.nocodeapi.com/andresabreu/spotify/jRyLOewVmZIgHgYl/search?q=I hate love", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log("api-call", result)
        spotifyTitle1.textContent = result.albums.items[0].name;
        spotifyImg1.setAttribute("src", result.albums.items[0].images[2].url);
        spotifyArtistname1.textContent = result.albums.items[0].artists[0].name;

        spotifyTitle2.textContent = result.albums.items[6].name;
        spotifyImg2.setAttribute("src", result.albums.items[1].images[2].url);
        spotifyArtistname2.textContent = result.albums.items[1].artists[].name;

        spotifyTitle3.textContent = result.albums.items[7].name;
        spotifyImg3.setAttribute("src", result.albums.items[2].images[2].url);
        spotifyArtistname3.textContent = result.albums.items[2].artists[0].name;
        
        spotifyTitle4.textContent = result.albums.items[8].name;
        spotifyImg4.setAttribute("src", result.albums.items[3].images[2].url);
        spotifyArtistname4.textContent = result.albums.items[3].artists[0].name;



    
    
    
    })
    .catch(error => console.log('error', error));

                         





























//-------------MODAL on Button click---------------


$(document).ready(function () {
    $('.modal').modal();
});

