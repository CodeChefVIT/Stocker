
//----------------------------------------calculator---------------------------------------------------
var final=document.querySelector('#final-value')


var slider1 = document.getElementById("investment-slider");
var output1 = document.getElementById("investment-value");
output1.value = slider1.value; 

slider1.oninput = function() {
  output1.value = slider1.value;
  calculate();
}
var slider2= document.getElementById("returns-slider");
var output2 = document.getElementById("returns-value");
output2.value = slider2.value; 
slider2.oninput = function() {
 
  output2.value = this.value;
  calculate();
}

var slider3 = document.getElementById("time-slider");
var output3 = document.getElementById("time-value");
output3.value = slider3.value; 
slider3.oninput = function() {
 
  output3.value = this.value;
  calculate();
}
calculate();
function valueChanger1()
{
  slider1.value=output1.value;
  calculate();
}
function valueChanger2()
{
  slider2.value=output2.value;
  calculate();
}
function valueChanger3()
{
  slider3.value=output3.value;
  calculate();
}

function calculate()
{
  var p=slider1.value;
  var r=slider2.value;
  var t=slider3.value;
  var total=p*Math.pow((1+(r/100)),t);
  total=Math.ceil(total);
  final.innerHTML=total;
}