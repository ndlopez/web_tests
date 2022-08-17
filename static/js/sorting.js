//Lots of test in JavaScript
function toCelsius(F){
   var txt="a,b,c,e,d,f";
	txt.split(",");//split on commas (" "), ("|")
   console.log(txt.split(","))
   var temp=(5*10/(9*10))*(F-32);
   return "Current core temp is: " + temp.toPrecision(4);
}
//var texty = "Current core temp is: ";
document.getElementById("swtch").innerHTML=toCelsius(85);
//<this> usage
var person ={
   first:"North",
   last:"Patagonia",
   size: "D",
   fullName: function(){
	return this.first + " " + this.last;
   }
};
document.getElementById("p_this").innerHTML=person.fullName();
//adding element of an array
var fruits,text,fLen,i;
fruits=["Apricot","Orange","Apple","Mango"];
fLen=fruits.length;
tex="<h3>Reading an \"array\" of Fruits</h3><ul>";
for(i=0;i<fLen;i++){
  tex+= "<li>" + fruits[i] + "</li>";
}
tex+="</ul><br>";
document.getElementById("fruitdiv").innerHTML=tex;
//Random sort or asc sort
var point=[0,1,2,11,3,4,10,5,6,14,7,8,9,15];
document.getElementById("para").innerHTML=point;
function sortRand(){
   for(i=point.length -1;i>0;i--){
     j=Math.floor(Math.random()*i)
     k=point[i]
     point[i]=point[j]
     point[j]=k
   }
   document.getElementById("para").innerHTML=point;
}
function mySort(){
  point.sort(function(a,b){return a - b});
  document.getElementById("para").innerHTML=point;
}
//Sorting arrays
var cars=[{brand:"Volvo",year:2016},{brand:"Saab",year:2001},{brand:"BMW",year:2010},{brand:"Tesla",year:2020},{brand:"Nissan",year:2012}];
dispCars();
function sortYear(){
   cars.sort(function(a,b){
     var x=a.year,y=b.year;
     return x - y;
	 });
   dispCars();
}
function sortAlpha(){
  cars.sort(function(a,b){
    var x=a.brand.toLowerCase();
  	var y=b.brand.toLowerCase();
  	if(x<y){return -1;}
  	if(x>y){return 1;}
  	return 0;
  });
  dispCars();
}
function dispCars(){
  document.getElementById("texty").innerHTML=
	cars[0].brand+" "+cars[0].year +"<br>"+
	cars[1].brand+" "+cars[1].year +"<br>"+
  cars[2].brand+" "+cars[2].year +"<br>"+
  cars[3].brand+" "+cars[3].year +"<br>"+
	cars[4].brand+" "+cars[4].year;
}

var numb1=[34,55,6,43,5,24];
var numb2=numb1.map(someFunc);
function someFunc(){
   numb1.sort(function(a,b){return a - b});
   document.getElementById("sortme").innerHTML="<span>Sorted </span>"+ numb1;
}
//////////////// copied code ////////////////
var array = [{
    "EmployeeName": "Madelyn",
    "Experience": 12,
    "Education":[{"age":50,"secret":"1M¥"}],
    "Technology": ["SharePoint","C#","asp.NET"]
}, {
    "EmployeeName": "Brooke",
    "Experience": 9,
    "Education":[{"age":34,"secret":"2342"}],
    "Technology": ["asp.NET","F#",""]
}, {
    "EmployeeName": "Jazmine",
    "Experience": 3,
    "Education":[{"age":25,"secret":"paswd"}],
    "Technology": ["JAVA","Swift",""]
}, {
    "EmployeeName": "Isla",
    "Experience": 7,
    "Education":[{"age":30,"secret":"sed"}],
    "Technology": ["SQL Server","PostgreeSQL","MongoDB"]
}, {
    "EmployeeName": "Zoe",
    "Experience": 6,
    "Education":[{"age":32,"secret":"GNU awk"}],
    "Technology": ["C#","F#","PHP"]
}];
//console.log(array);
//Comparer Function
function GetSortOrder(prop) {
    return function(a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
    //console.log(prop);
}
array.sort(GetSortOrder("EmployeeName"));//Pass the attribute to be sorted on
document.write("<div class='container'><h3>Sorted Employee Names:</h3>");
for (var item in array) {
    var txt="<p>" + array[item].EmployeeName + ", Works on: "+ array[item].Technology[1] + ", Exp: " + array[item].Experience+ "years.</p>";
    document.write(txt);
}

array.sort(GetSortOrder("Experience"));
console.log(array);
//array.reverse(GetSortOrder("age"));//Pass the attribute to be sorted on
document.write("<h3>Agist:</h3>");
for (var item in array) {
  var txt="<p>" + array[item].EmployeeName + ", Works on: " + array[item].Technology[1] + ", Exp: " +
  array[item].Experience + " years, age: " +
  array[item].Education[0].age + "years.</p>";
  document.write(txt);
}
document.write("</div>");
