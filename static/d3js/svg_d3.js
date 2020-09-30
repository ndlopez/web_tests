//SVG elem in d3
var width=500;
var height=500;
var svg=d3.select("body")
          .append("div").style("height",height)
          .append("svg")
          .attr("width",width)
          .attr("height",height);
//create and append a simple line
/*svg.append("line")
   .attr("x1",20)
   .attr("x2",400)
   .attr("y1",20)
   .attr("y2",250)
   .attr("stroke","black")*/
var g = svg.append("g")
           .attr("transform",function(d,i){return "translate(0,0)";});
var ellipse = g.append("ellipse")
               .attr("cx",250).attr("cy",50)
               .attr("rx",150).attr("ry",50)
               .attr("fill","green").attr("opacity",0.5)
  g.append("text")
   .attr("x",140).attr("y",50)
   .attr("stroke","steelblue")
   .attr("font-family","sans-serif")
    .attr("font-size","24px").text("Pretty ellipse");
