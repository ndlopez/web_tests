//http://www.verisi.com/resources/d3-tutorial-basic-charts.htm
//var dataset=d3.range(10).map(Math.random);
var dataset=[23,35,64,76,54,89,43,95];
var colorlst=["tomato","darkblue"];
var lbllst=["FreeBSD (12.1)","","Debian 10(buster)","","Slackware 14.0","","RHEL 7",""];
var ww=450,hh=260,lblpad=110,barHeight=20,margin=1;
//var scale= d3.scaleLinear()
//	     .domain([d3.min(dataset),d3.max(dataset)])
//           .range([0,ww]);
//var x=d3.scaleLinear().domain([0,d3.max(dataset)]).range([0,ww-90]),
var x=d3.scaleLinear().domain([0,100]).range([0,ww-90]),
    y=d3.scaleBand().domain(d3.range(dataset.length)).range([0,hh],.2);
var vis=d3.select("#os_lst").append("svg:svg")
          .attr("width",ww +100)
          .attr("height",hh +20)
          .append("svg:g")
          .attr("transform","translate(25,0)");
var bars=vis.selectAll("g.bar")
         .data(dataset).enter()
         .append("svg:g")
         .attr("class","bar")
         .attr("transform",function(d,i){
		 return "translate("+lblpad+","+y(i)+")";});
         //.attr("transform",function(d,i){return "translate(" + lblpad +","+y(i)+")";});
bars.append("svg:rect")
    .attr("fill",function(d,i){return colorlst[i % 2];})
    .attr("width",x)
    .attr("height",y.bandwidth());
bars.append("svg:text")
    .attr("x",0)
    .attr("y",10+y.bandwidth() / 2)
    .attr("dx",-6)
    .attr("dy",".35em")
    .attr("text-anchor","end")
    .text(function(d,i){return lbllst[i];});
var rules=vis.selectAll("g.rule")
             .data(x.ticks(10))
             .enter().append("svg:g")
             .attr("class","rule")
             .attr("transform",function(d){return "translate("+x(d)+",0)";});
rules.append("svg:line")
    .attr("y1", hh)
    .attr("y2", hh + 6)
    .attr("x1", lblpad)
    .attr("x2", lblpad)
    .attr("stroke", "black");

rules.append("svg:line")
    .attr("y1", 0)
    .attr("y2", hh)
    .attr("x1", lblpad)
    .attr("x2", lblpad)
    .attr("stroke", "white")
    .attr("stroke-opacity", .3);


rules.append("svg:text")
    .attr("y", hh + 8)
    .attr("x", lblpad)
    .attr("dy", ".71em")
    .attr("text-anchor", "middle")
    .text(x.tickFormat(10));
