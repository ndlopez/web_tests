var mydat=[100,230,340,900,850,1000,506];
   var width=500,
       barHeight=20,
       margin=1;
   var scale = d3.scaleLinear()
                 .domain([d3.min(mydat),d3.max(mydat)])
                 .range([50,400]);
   var svg = d3.select("body")
	       .append("div").style("height","200px")
               .append("svg")
               .attr("width",width)
               .attr("height",barHeight *mydat.length);
   var g = svg.selectAll("g")
              .data(mydat)
              .enter()
              .append("g")
              .attr("transform",function(d,i){
		      return "translate(0,"+ i * barHeight + ")";
	      });
  g.append("rect")
   .attr("width",function(d){return scale(d);})
   .attr("height",barHeight - margin)
   .attr("fill","tomato")
  g.append("text")
   .attr("x",function(d){return (scale(d)-40);})
   .attr("y",barHeight/2)
    .attr("dy",".35em").text((d) =>d);
