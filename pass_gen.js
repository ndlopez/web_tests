var points = [1, 2, 3,4, 5, 6, 7,8,9,0];
document.getElementById("rand").innerHTML = points;    

function myFunction() {
    points.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById("rand").innerHTML = points;
}

var tot=10;
function mypswgen(){
	var nump = (tot)?(tot):(10);
	var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
	var num="23456789";
	var sym="!#$%&()-_}{@][";
  var mystr=num+txt+sym;
	// returns a number between 0 and 9
	//var num2=Math.floor(Math.random() * 10);
	var pasw="";var hole="";
	//var tot=txt.length+num.length+sym.length;
  var ent1,ent2,ent3,i=0;
  while (hole.length<nump) {  
  	ent1=Math.floor(mystr.length*Math.random()*Math.random());
		//ent2=Math.floor(Math.random()*Math.random()*num.length);
		//ent3=Math.floor(Math.random()*Math.random()*sym.length);
    //var vec=[ent1,ent2,ent3];
    pasw+=mystr.charAt( ent1 );
		//pasw+=txt[ent1];//Should not be treated as array!!
    //pasw+=num.charAt( ent2 );
    //pasw+=sym.charAt( ent3 );
    hole=pasw;i++;
  }
  //return pasw;
  //pasw is a string!
  var num2=hole.length;
  /*ent2=0;
	while(pasw.length<nump){
  	ent1=Math.floor(Math.random()*num2);
    if(ent1==ent2){	ent2=ent1; }
    else{ hole+=pasw.charAt(ent1);}
  }*/
  //hole+=i;
	document.getElementById("pass").innerHTML = hole;
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
