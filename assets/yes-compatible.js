var spotifyImg1 = document.querySelector("#spotify-img-1")
var spotifyTitle1 = document.querySelector("#spotify-title-1")
var spotifyArtistname1 = document.querySelector("#spotify-artist-name-1")

var spotifyImg2 = document.querySelector("#spotify-img-2")
var spotifyTitle2 = document.querySelector("#spotify-title-2")
var spotifyArtistname2 = document.querySelector("#spotify-artist-name-2")

var spotifyImg3 = document.querySelector("#spotify-img-3")
var spotifyTitle3 = document.querySelector("#spotify-title-3")
var spotifyArtistname3 = document.querySelector("#spotify-artist-name-3")

var spotifyImg4 = document.querySelector("#spotify-img-4")
var spotifyTitle4 = document.querySelector("#spotify-title-4")
var spotifyArtistname4 = document.querySelector("#spotify-artist-name-4")





var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
    
};

fetch("https://v1.nocodeapi.com/andresabreu/spotify/jRyLOewVmZIgHgYl/search?q=love", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log("api-call", result)
        spotifyTitle1.textContent = result.albums.items[0].name;
        spotifyImg1.setAttribute("src", result.albums.items[0].images[2].url);
        spotifyArtistname1.textContent = result.albums.items[0].artists[0].name;

        spotifyTitle2.textContent = result.albums.items[1].name;
        spotifyImg2.setAttribute("src", result.albums.items[1].images[2].url);
        spotifyArtistname2.textContent = result.albums.items[1].artists[0].name;

        spotifyTitle3.textContent = result.albums.items[3].name;
        spotifyImg3.setAttribute("src", result.albums.items[3].images[2].url);
        spotifyArtistname3.textContent = result.albums.items[3].artists[0].name;
        
        spotifyTitle4.textContent = result.albums.items[4].name;
        spotifyImg4.setAttribute("src", result.albums.items[4].images[2].url);
        spotifyArtistname4.textContent = result.albums.items[4].artists[0].name;



    
    
    
    })
    .catch(error => console.log('error', error));
















//-------------MODAL on Button click---------------

$(document).ready(function(){
    $('.modal').modal();
  });
