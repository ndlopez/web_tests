//reading geolocation
var gx=document.getElementById("geoloc");
//gx.innerHTML = "Your current location is: ";
/*if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(showPos);
}
else{ gx.innerHTML="Geolocation is not supported :(";
function showPos(posi){
   gx.innerHTML = "Lat:" + posi.coords.latitude + "N, Long:" +
		posi.coords.longitude+"W";
}*/
//reading local json data
obj={
   "name":"Jayden",
   "age":35,
   "fruits":[
   {"name":"Apple","models":["Tempura","Hyundai"]},
   {"name":"Mango","models":["Neutrino","Element"]},
   {"name":"Grape","models":["Kodama","Batavia"]},
   {"name":"Watermelon","models":["Snoopy","Peppermint"]}
   ]
}
var i,j;
var y="<h2>Local JSON: Fruits</h2><ul>";
for(i in obj.fruits){
   y+="<span>"+obj.fruits[i].name+"</span>";
   for(j in obj.fruits[i].models){
      y+="<li>"+obj.fruits[i].models[j] +"</li>";
   }
}y+="</ul>";
document.getElementById("fruitdiv").innerHTML=y;
//console.log(y)

//changing content of a webpage
function loadDoc(){
   var xhtp = new XMLHttpRequest();
   xhtp.onreadystatechange = function(){
      if(this.readyState ==4 && this.status ==200){
	  document.getElementById("demo").innerHTML = this.reponseText;
      }
   };
   //xhtp.open("GET","https://www.w3schools.com/js/jspn-txt.txt",true);
   //xhtp.send();
   //console.log(xhtp)
}
//loading JSON data from an URL
var req = new XMLHttpRequest();
var texm="<h2>Loading JSON data from an API</h2>";
req.open("GET","http://localhost:8080/static/data/cats.json");
//"http://dummy.restapiexample.com/api/v1/employees"
req.send();
req.onload= function(){
//console.log(xhtp.data.employee_name[3])
  var jsdat=JSON.parse(this.response);
  texm+="<ul>";
  for(var i in jsdat.data){
    texm +="<li>";
	  for(var j in jsdat.data[i].employee_name){
      texm += jsdat.data[i].employee_name[j];
    }
    texm +="</li>";}
    texm += "</ul>";
    if(this.status ==200){console.log(jsdat.message)}
  document.getElementById("tables").innerHTML=texm;
}
//var obj2.parse(xhtp);
