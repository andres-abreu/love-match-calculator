var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: "get",
  headers: myHeaders,
  redirect: "follow",

};
var apiUrl = "https://v1.nocodeapi.com/zela7alex/spotify/xiGwjtGkQwDVRqNV/search?q=love&type=track&perPage=10"

fetch(apiUrl, requestOptions)
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