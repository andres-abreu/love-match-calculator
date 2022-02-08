
// COMPATIBLE Spotify API

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: "get",
  headers: myHeaders,
  redirect: "follow",

};
var apiLoveUrl = "https://v1.nocodeapi.com/zela7alex/spotify/xiGwjtGkQwDVRqNV/search?q=love&type=track&perPage=10"

fetch(apiLoveUrl, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



// INCOMPATIBLE Spotify API

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: "get",
  headers: myHeaders,
  redirect: "follow",

};

var apiHateUrl = "https://v1.nocodeapi.com/zela7alex/spotify/xiGwjtGkQwDVRqNV/search?q=I hate love&type=track&perPage=10"
fetch(apiHateUrl, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));







//Display Spotify Playlist on Button click

$(document).ready(function () {
  $(".collection").hide();
  $(".spotify-btn").click(function () {
    $(".collection").toggle();
  });
});