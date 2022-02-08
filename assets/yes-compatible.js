
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
    
};

fetch("https://v1.nocodeapi.com/andresabreu/spotify/jRyLOewVmZIgHgYl/search?q=love", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
















//-------------MODAL on Button click---------------

$(document).ready(function () {
    $('.modal').modal();
});


//Not-compatible 
function toggleModal() {
    var instance = M.Modal.getInstance($("#modal"))
    instance.open();
}












