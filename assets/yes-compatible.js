















//-------------MODAL on Button click---------------

$(document).ready(function () {
    $('.modal').modal();
});

//Compatible
function toggleModal() {
    var instance = M.Modal.getInstance($("#modal1"))
    instance.open();
}