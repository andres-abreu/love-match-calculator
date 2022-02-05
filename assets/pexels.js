


















$(document).ready(function (){
    $('.modal').modal();
});

function toggleModal(){
    var instance = M.Modal.getInstance($("#modal1"))
    instance.open();
}


//Display Images on Button click
$(document).ready(function () {   
    $(".collection").hide();
    $(".spotify-btn").click(function () {
        $(".collection").toggle();
    });
});



