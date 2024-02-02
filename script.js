// ---------- defining variables ----------

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);



// ---------- if wanted to change the background to just one color ----------
// body.style.background = "red";



// ---------- adding event listener for color inputs, logging them on console ----------

// color1.addEventListener("input", function(){
// 	console.log(color1.value);
// });

// color2.addEventListener("input", function(){
// 	console.log(color2.value);
// });



// ---------- adding event listener for color inputs, logging them on console ----------

color1.addEventListener("input", function(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ " ," 
	+ color2.value 
	+ ")";
});


color2.addEventListener("input", function(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ " ," 
	+ color2.value 
	+ ")";
});








