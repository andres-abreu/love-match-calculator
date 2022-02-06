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

//Compatible
function toggleModal() {
    var instance = M.Modal.getInstance($("#modal1"))
    instance.open();
}