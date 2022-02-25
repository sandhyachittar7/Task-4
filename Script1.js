//Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console


var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", 'true');
request.send();

request.onload = function () {
    var data = JSON.parse(request.response);
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].flag);
    }


    //Use the same rest countries and print all countries name, region, sub region and population
    for (let i = 0; i < data.length; i++) {
        console.log("name ", data[i].name["common"], " region ", data[i].region, " subregion", data[i].subregion, " population", data[i].population);
    }


}







