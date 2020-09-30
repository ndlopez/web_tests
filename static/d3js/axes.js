//axes
   var width=400, height=330;
   var dat=[10,15,20,25,30];
   var svg = d3.select("body").append("div").style("height","200px")
            .append("svg")
            .attr("width",width)
            .attr("height",height);
   var xscale =  d3.scaleLinear()
                   .domain([0, d3.max(dat)])
                   .range([0,width-100]);
   var yscale = d3.scaleLinear()
                  .domain([0,d3.max(dat)])
                  .range([height/2,0]);
   var x_axis = d3.axisBottom().scale(xscale);
   var y_axis = d3.axisLeft().scale(yscale);
       svg.append("g")
          .attr("transform","translate(50,10)")
          .call(y_axis);
   var xAxisTrans = height/2 + 10;
       svg.append("g")
          .attr("transform","translate(50, " + xAxisTrans + ")")
    .call(x_axis)
