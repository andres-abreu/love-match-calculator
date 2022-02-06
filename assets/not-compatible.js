



















































//Display SPOTIFY Playlist on Button click

$(document).ready(function () {
    $(".collection").hide();
    $(".spotify-btn").click(function () {
      $(".collection").toggle();
    });
  });
  


//-------------MODAL on Button click---------------

$(document).ready(function () {
    $('.modal').modal();
});


//Not-compatible 
function toggleModal() {
    var instance = M.Modal.getInstance($("#modal2"))
    instance.open();
}