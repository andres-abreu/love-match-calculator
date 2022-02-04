var name1 = "ax";
var name2 = "andres";

var getNamesPercent = function () {
    fetch("https://love-calculator.p.rapidapi.com/getPercentage?sname=" + name1 + "&fname=" + name2, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "love-calculator.p.rapidapi.com",
            "x-rapidapi-key": apiKey
        }
    })
        .then(function (response) {
            //convert to JSON object
            if (response.ok) {
                console.log("inside", response)
                return response.json()
                    .then(function (data) {
                        console.log(data)
                    })
            } else {
                //In case there is an error
                alert(error + "something went wrong. Please try again");
            }
        })
        .catch(function (error) {
            //In case there is an error
            alert(error + " Something went wrong.Please try again.")
        });

}
getNamesPercent();

var displayPercent = function(percent) {
    console.log(percent)
}



