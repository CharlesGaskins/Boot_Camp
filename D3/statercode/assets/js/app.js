// @TODO: YOUR CODE HERE!


var svgWidth = 960;
var svgHeight = 660;
var margin = {top: 20, right: 40, bottom: 60, left: 100};


var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

var width = svgWidth - chartMargin.left - chartMargin.right;
var height = svgHeight - chartMargin.top - chartMargin.bottom;

var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth)
  .append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);
var scatter = svg.append("g");

//var chartGroup = svg.append("g")
//.attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

d3.csv("../../data/data.csv",function(error,healthdata) {
  if (error) return console.log(error);  
  healthdata.forEach(function(data) {
  data.healthcare = +data.healthcare;
  data.poverty = +data.poverty;
    console.log(healthdata);
    console.log(data.poverty);
    console.log(data);
    });
  //------------------------------------------------------
var yLinearScale = d3.scaleLinear().range([height, 0]);
var xLinearScale = d3.scaleLinear().range([0, width]);

var xAxis = d3.axisBottom(xLinearScale);
var yAxis = d3.axisLeft(yLinearScale);


//  var xMin;
//  var xMax;
//  var yMin;
//  var yMax;

//  xMin = d3.min(healthdata, function(data) {
//      return data.healthcare * 0.95;
//  });

//  xMax = d3.max(healthdata, function(data) {
//      return data.healthcare * 1.05;
//  });

//  yMin = d3.min(healthdata, function(data) {
//      return data.poverty * 0.98;
//  });

//  yMax = d3.max(healthdata, function(data) {
//      return data.poverty *1.02;
//  });
 
 xLinearScale.domain([xMin, xMax]);
 yLinearScale.domain([yMin, yMax]);


// chart.append("g")
// .attr("transform", 'translate(0, ${height})')
// .call(xAxis);

// chart.append("g")
// .call(yAxis);

chart.selectAll("circle")
.data(healthdata)
.enter()
.append("circle")
// .classed("#scatter", true)
.attr("width", d => svgWidth)
.attr("height", d => svgHeight)
.attr("fill", "green")
.attr("stroke-width", "1")
.attr("stroke", "black")
.attr('x', function(data, index) {
  console.log(data.healthcare);
  return xLinearScale(data.healthcare);
})
.attr('y', function(data, index) {
  console.log(data.poverty);
  return yLinearScale(data.poverty);
})

chart.append("g")
.attr("transform", 'translate(0, ${height})')
.call(xAxis);

chart.append("g")
.call(yAxis);

//chart.call(toolTip);

// chart.append("g")
// .attr("class", "x-axis")
// .attr("transform", `translate(0,${height})`)
// .call(xAxis);


// chart.append("g")
// .attr("class", "y-axis")
// .call(yAxis)S

// var toolTip = d3.select("body")
// .append("div")
// .classed("tooltip", true);


});