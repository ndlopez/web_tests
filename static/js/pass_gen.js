var points = [1, 2, 3,4, 5, 6, 7,8,9,0];
document.getElementById("rand").innerHTML = points;    

function myFunction() {
    points.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById("rand").innerHTML = points;
}

document.getElementById("temp").innerHTML =
"By the way, the temperature is " + toCelsius(77) + " Celsius";
// https://tenki.jp/forecast/5/26/5110/23100/
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
} 

//no function defined
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("matriz").innerHTML = text;
