var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".btn");
var converter = document.querySelector("#converter");
var converter02 = document.querySelector("#converter02");
var darkRandomGenBtn = document.querySelector("#darkRandomColorGenerator");
var randomGenBtn = document.querySelector("#lightRandomColorGenerator");

// Background Gradient

var bkgGdt_toLeftRight = 	
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

var bkgGdt_toBotomRight = 
	"linear-gradient(to bottom right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

// LAYOUT 1: FUNCTION THAT SET GRADIANT LEFT TO RIGHT 

function setGradientLeftToRight() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
	converter.innerHTML = "SetGradient to BottomRight";
}

// LAYOUT 2: FUNCTION THAT SET GRADIENT FROM TOP TO BOTTOM RIGHT

function setGradientToBottomRight() {
	body.style.background = 	
	"linear-gradient(to right bottom, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
	converter.innerHTML = "SetGradient to LeftRight";
}

// LAYOUT 3: FUNCTION THAT SET GRADIENT TO REPEATING CIRCLE

function setGradientToRepeatingCircle() {
	console.log("click working repeating circle");
	body.style.background = 
	"repeating-radial-gradient(circle at 50%, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
	converter02.innerHTML = "Set Gradient To Conic Circle";
}

// LAYOUT 4: FUNCTION THAT SET GRADIENT TO CONIC CIRCLE

function setGradientToConicCircle() {
	console.log("click working conic circle");
	body.style.background = 
	"conic-gradient(from -1650deg at center, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
	converter02.innerHTML = "Set Gradient To Repeating Circle";
}

//FUNCTION THAT GENERATE DARK COLOR COMBINATION GRADIENT (BUTTON = DARK RANDOM COLOR GENERATOR)

function darkRandomColorGenerator() {
	let randomValueForColor01 = Math.floor((Math.random() * 999999) + 100000);
	let randomValueForColor02 = Math.floor((Math.random() * 999999) + 100000);
	color1.value = "#" + randomValueForColor01;
	color2.value = "#" + randomValueForColor02;
	liveGradient();
}

// FUCTION THAT GENERATE RANDOM HEXA CODE FOR COLOR GRADIENT 

function generateHexa(length) {
    let result           = '';
    let characters       = 'abcdef0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

//  

function lightRandomColorGenerator() {
	let randomValueForColor01 = generateHexa(6);
	let randomValueForColor02 = generateHexa(6);
	color1.value = "#" + randomValueForColor01;
	color2.value = "#" + randomValueForColor02;
	liveGradient();
}

// FUNCTION THAT CHANGE THE GRADIANT LAYOUT (TOP TO BOTTOM OR LEFT TO RIGHT)

function changeGradientLayout() {
	if (converter.innerText == "SetGradient to BottomRight") {
		setGradientToBottomRight();
	} else {
		setGradientLeftToRight();
	}
}

function changeGradientLayout02() {
	if (converter02.innerText == "Set Gradient To Repeating Circle") {
		setGradientToRepeatingCircle();
	} else {
		setGradientToConicCircle();
	}
}

// FUNCTION FOR COLOR PICKER ON THE SCREEN 

function liveGradient() {
	if (converter.innerText == "SetGradient to BottomRight") {
		setGradientLeftToRight();
	} else {
		setGradientToBottomRight();
	}
}

color1.addEventListener("input", liveGradient);

color2.addEventListener("input", liveGradient);

converter.addEventListener("click", changeGradientLayout);

converter02.addEventListener("click", changeGradientLayout02);

darkRandomGenBtn.addEventListener("click", darkRandomColorGenerator);

randomGenBtn.addEventListener("click", lightRandomColorGenerator);