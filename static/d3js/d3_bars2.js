   const dataset = [[2011,25], [2012, 47], [2013, 52], [2014, 70], [2015, 65], [2016, 78], [2017, 38], [2018, 45], [2019, 45]];
   var svg2= d3.select("#my_bar").append("svg");
   var marg = 200,w=500,h=500,
	w = svg2.attr("width") - marg,
	h = svg2.attr("height") - marg;
   svg2.append("text")
      .attr("transform","translate(100,0)")
      .attr("x",50).attr("y",50)
      .attr("font-size","24px")
      .text("Z food stock price");
   var xScl = d3.scaleBand()
	     .range([0,width]).padding(0.4);
   var yScl = d3.scaleLinear()
	     .domain([0,100])
	     .range([height,100]);
   var g = svg2.append("g")
              .attr("transform","translate("+ 100 + "," + 100+")");
   /*d3.csv("data/zdata.csv",function(error,data){
      if(error){throw error;}
   });*/
   //https://www.tutorialsteacher.com/d3js/create-bar-chart-using-d3js
   //xScale.domain(data.map(function(d){return d.year;}));
   //xScl.domain((d)=>d[1]));
   //.range([0,width-0]);
   //yScale.domain([0,d3.max(data,function(d){return d.value;})]);
   //yScl.domain([0,100]);
console.log(dataset)
   g.append("g")
    .attr("transform","translate(0," + (h) + ")")
    .call(d3.axisBottom(xScl))
    .append("text")
    .attr("y",height - 250).attr("x",w -10)
    .attr("text-anchor","end")
    .attr("stroke","black").text("Year");
   g.append("g")
    .call(d3.axisLeft(yScl).tickFormat(function(d){return "$" + d;})
    .ticks(10))
    .append("text")
    .attr("transform","rotate(-90)")
    .attr("y",6).attr("dy","-5.1em")
    .attr("text-anchor","end")
    .attr("stroke","white").text("Stock price");
   g.selectAll("rect").data(dataset)
    .enter().append("rect")
    .attr("class","bar")
    .attr("x",(d,i)=> (i*40))
    .attr("y",function(d,i){return 300+h;})
    .attr("width",20)
    .attr("height",function(d){return yScl(d[1]);});
