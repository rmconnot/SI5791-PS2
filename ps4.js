const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");

div1.addEventListener("mouseover", () => {
	console.log("This is silly");
});
div2.addEventListener("click", handleClickEventText);
div3.addEventListener("click", handleClickEventColor);

function handleClickEventColor() {
	const colorArray = ["blue", "yellow", "red", "purple", "grey", "brown"];
	document.body.style.backgroundColor =
		colorArray[Math.floor(Math.random() * Math.floor(colorArray.length))];
}

function handleClickEventText() {
	const newElement = document.createElement("p");
	const newText = document.createTextNode("Silly goose");
	newElement.appendChild(newText);
	document.body.appendChild(newElement);
}
