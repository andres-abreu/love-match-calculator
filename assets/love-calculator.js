var name1 = "Bob";
var name2 = "Anne";


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

var yourName = document.querySelector("#your_name")
var theirName = document.querySelector("#their_name")
var calculateBtn = document.getElementById("calculate-btn")

// function getNames(nameOne, nameTwo) {
//     calculateBtn.addEventListener('click', e => {
//         console.log("executed")
//     })
// }
// getNames()

function calculatePercent() {
    getNamesPercent();
}

calculateBtn.addEventListener('click', calculatePercent)