




















































//-------------MODAL on Button click---------------

$(document).ready(function () {
    $('.modal').modal();
});


//Not-compatible 
function toggleModal() {
    var instance = M.Modal.getInstance($("#modal2"))
    instance.open();
}