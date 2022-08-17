//when adding an item, this function allows 
//https://www.w3schools.com/angular/tryit.asp?filename=try_ng_app5
function add_item(){
   //getting box and ul elem by selecting id
   let item=document.getElementById("box");
   let list_item=document.getElementById("list_item");
   if(item.value!==""){
      //create elem and add value
      let make_li = document.createElement("LI");
      make_li.appendChild(document.createTextNode(item.value));
      //add li to ul elem
      list_item.appendChild(make_li);
      //reset the value of text box
      item.value=""
      //delete a li item on click
      make_li.onclick=function(){
         this.parentNode.removeChild(this);
      }
   }
   else{//alert msg when value is empty
      alert("pls add a value");
   }
}
