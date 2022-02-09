fetch("https://api.pexels.com/v1/search?query=love",{
  headers: {
    Authorization: "563492ad6f917000010000012696f567e48a4f6395dea73b9b1ad62f"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     console.log(data)
   
    })

    


//------------Button for Pexels--------------

//Display Images on Button click

$(document).ready(function () {
    $(".gallery").hide();
    $(".pexels-btn").click(function () {
        $(".gallery").toggle();
    });
});

