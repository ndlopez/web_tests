/* Store XMLHTTPRequest and the JSON file loc in vars */
var xhr=new XMLHttpRequest();
var url="http://localhost:8080/static/artists.json";
//Called whenever the readystate attrib changes
xhr.onreadystatechange=function(){
    //Check if fetch request is done
    if (xhr.readyState==4 && xhr.status==200){
	//Parse JSON string
	var jsonDat=JSON.parse(xhr.responseText);
	//Call the showArtist function passing in the parsed JSON
	showArtist(jsonDat);
    }
};

//Do the http call using the url var
xhr.open("GET",url,true);
xhr.send();

//function that formats the string with HTML tags
function showArtist(data){
    var out="<ul>";
    for (var i in data.artists){
	out+="<li>"+data.artists[i].artistname +"(Born:"+
	    data.artists[i].born+")</li>";
    }
    out+="</ul>";
    //out the data to a div elem
    document.getElementById("artistList").innerHTML=out;
}
