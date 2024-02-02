// ---------- defining variables ----------

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

console.log(css);
console.log(color1);
console.log(color2);


// ---------- adding event listener for color inputs ----------

color1.addEventListener("input", function(){
	console.log(color1.value);
});

color2.addEventListener("input", function(){
	console.log(color2.value);
});