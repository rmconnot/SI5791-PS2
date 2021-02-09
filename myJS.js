/*
 * Excercise 1
 *
 */

const colorBlock = document.getElementById("color-block");
const colorName = document.getElementById("color-name");

/*
 * Then write a function that changes the text and the color inside the div
 *
 */

function changeColor() {
	//Write a condition determine what color it should be changed to
	if (colorBlock.style.backgroundColor == "rgb(64, 224, 208)") {
		colorBlock.style.backgroundColor = "#F08080";
		colorName.innerHTML = "#F08080";
		//change the background color using JS

		//Change the text of the color using the span id color-name
	} else {
		colorBlock.style.backgroundColor = "#40e0d0";
		colorName.innerHTML = "#40e0d0";
		//change the background color using JS
		//Change the text of the color using the span id color-name
	}
}

/*
 * For excercise 2, you need to write an event handler for the button id "convertbtn"
 * on mouse click. For best practice use addEventListener.
 *
 */

/*
 * Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
 *
 */

const fInput = document.getElementById("f-input");
const cOutput = document.getElementById("c-output");
function convertTemp() {
	cOutput.innerHTML = (fInput.value - 32) * (5 / 9);
	//Calculate the temperature here
	//Send the calculated temperature to HTML
}
