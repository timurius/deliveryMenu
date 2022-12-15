"use strict";
let numericOfImages = ["first", "second", "third"];
let titles = ["Order for Food", "Easy Payment", "Fast Delivery"];
let texts = ["Order some food and be happy! Because it is yummy Order some food and be happy!", "Order some food and be happy! Because it is yummy Order some food and be happy!", "Order some food and be happy! Because it is yummy Order some food and be happy!"];
let sliderProcess = false;
let currentSlide = 0;
let nextSlide = 0;
function backToSlider(){
	document.getElementById("content2").style.display = "block";
	document.getElementById("content2__bottom-content").style.display = "block";
	document.getElementById("content3").style.display = "none";
	slider(1);
}

function slider(){
	if(sliderProcess == true){
		return;
	}
	sliderProcess = true;

	
	let leftOfImage = parseInt(document.getElementById("slider__body").style.left);
	if( arguments.length != 0 ){
		nextSlide = arguments[0] - 1;
	}
	else{
		nextSlide += 1;
	}
	if (nextSlide == 3) {
		document.getElementById("content2").style.display = "none";
		document.getElementById("content2__bottom-content").style.display = "none";
		document.getElementById("content3").style.display = "block";
		sliderProcess = false;
		return;
	}
	if(currentSlide < nextSlide){
		document.getElementById("slider__body").style.left = leftOfImage + ( (currentSlide - nextSlide) * 428) + 'px';
	}
	else if( currentSlide > nextSlide){
		document.getElementById("slider__body").style.left = leftOfImage + ( (currentSlide - nextSlide) * 428) + 'px';
	}
	
	
	document.getElementById("title").innerText = titles[nextSlide];
	document.getElementById("text").innerText = texts[nextSlide];
	for(let i = 1; i < 4; i++){
		document.getElementById("page-switcher-0" + i).className = "page-switcher__button";
	}
	document.getElementById("page-switcher-0" + (nextSlide + 1) ).className = "page-switcher__button_selected";
	currentSlide = nextSlide;
	sliderProcess = false;
}