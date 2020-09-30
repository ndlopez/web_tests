var svg3= d3.select("svg"),
	wth=svg3.attr("width"),
	hgt=svg3.attr("height"),
	rad= Math.min(wth,hgt)/2;
var g3 = svg3.append("g")
             .attr("transform","translate("+ wth / 3 + "," + hgt / 2 + ")");
var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c','tomato']);
var pie = d3.pie();//.value(function(d){return d.percent;});
var arc1= d3.arc()
            .outerRadius(rad -10)
            .innerRadius(50);
var lbl= d3.arc()
            .outerRadius(rad)
            .innerRadius(rad -80);
const datas=["Work","Eat","Commute","Watch TV","Sleep","Housework"];
const mydata=[8,2,3.5,1.5,8,1];
var arcs = g3.selectAll("arc")
            .data(pie(mydata))
            .enter().append("g")
            .attr("class","arc");
    arcs.append("path")
       .attr("d",arc1)
       .attr("fill",function(d,i){return color(i);});
//console.log(mydata)
/*    arcs.append("text")
       .attr("transform",function(d){return "translate("+ lbl.centroid(d) + ")";})
	.text((d)=> d);*/
/*svg3.append("g")
    .attr("transform","translate("+(wth /2 -120)+","+20+")")
    .append("text")
    .text("Dairy?")
    .attr("class","title");*/
svg3.selectAll("text")
    .data(datas).enter().append("text")
    .text((d)=>d)
    .attr("x",350)
    .attr("y",(d,i)=>hgt/1.85-(i*20));
svg3.selectAll("rect")
    .data(mydata).enter()
    .append("rect")
    .attr("height",15).attr("width",15)
    .attr("x",330)
    .attr("y",(d,i)=>hgt/2-(i*20))
    .attr("fill",(d,i)=>color(i));
//console.log(datas)
