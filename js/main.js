/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/
var data = [25,20,10,12,15];

var svg = d3.select("#chart-area").append("svg")
    .attr("width", 600)
    .attr("height", 600);

var circle = svg.append("circle")
    .attr("cx", 200)
    .attr("cy", 200)
    .attr("r", 100)
    .attr("fill", "purple")

var rectangle  = svg.append("rect")
    .attr("x", 20)
    .attr("y", 20)
    .attr("width", 100)
    .attr("height", 100)
    .attr("fill", "grey")

var stroke = svg.append("line")
    .attr("x1", 200)
    .attr("x2", 300)
    .attr("y1", 200)
    .attr("y2", 100)
    .attr("stroke-width", 5)
    .attr("stroke", "black")


var circles = svg.selectAll("circle")
    .data(data);

circles.enter()
    .append("circle")
        .attr("cx", function(d, i){
            return (i * 50) + 25;
        })
        .attr("cy", 350)
        .attr("r", function(d){
            return d;
        })
        .enter("fill", "green");