let numericOfImages = ["first", "second", "third"];
let titles = ["Order for Food", "Easy Payment", "Fast Delivery"];
let texts = ["Order some food and be happy! Because it is yummy Order some food and be happy!", "Order some food and be happy! Because it is yummy Order some food and be happy!", "Order some food and be happy! Because it is yummy Order some food and be happy!"];
function pageSwitch(){
	let nextPage = numericOfImages.indexOf( document.getElementById("image").className.substr(6) ) + 1;
	if(nextPage > 2){
		nextPage = 0;
	}
	document.getElementById("image").className = document.getElementById("image").className.split(" ")[0] + " " + numericOfImages[nextPage];
	document.getElementById("title").innerText = titles[nextPage];
	document.getElementById("text").innerText = texts[nextPage];
	for(let i = 1; i < 4; i++){
		document.getElementById("page-switcher-0" + i).className = "page-switcher__button";
	}
	document.getElementById("page-switcher-0" + (nextPage + 1) ).className = "page-switcher__button_selected";
}