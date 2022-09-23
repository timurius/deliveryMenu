"use strict";
let numericOfImages = ["first", "second", "third"];
let titles = ["Order for Food", "Easy Payment", "Fast Delivery"];
let texts = ["Order some food and be happy! Because it is yummy Order some food and be happy!", "Order some food and be happy! Because it is yummy Order some food and be happy!", "Order some food and be happy! Because it is yummy Order some food and be happy!"];
let sliderProcess = false;
let currentSlide = 0;

function slider(){
	if(sliderProcess == true){
		return;
	}
	sliderProcess = true;
	let nextSlide;
	
	// else if(nextPage > 2){
	// 	nextPage = 0;
	// }
	
	let leftOfImage = parseInt(document.getElementById("slider__body").style.left);
	if( arguments.length != 0 ){
		nextSlide = arguments[0] - 1;
	}
	else{
		nextSlide = (-1 * leftOfImage + 428) / 428;
	}
	let a = nextSlide - currentSlide;
	console.log(a);
	let distance = -428 * a;
	let i = leftOfImage;
	if(distance < 0){
		let moving = setInterval( () => { 
			if(i <= leftOfImage + distance){
				sliderProcess = false;
				clearInterval(moving);
			}
			document.getElementById("slider__body").style.left = i + "px" 
			i += distance / 107;
			
		}, 1,)
	}else if( distance > 0 ){
		let moving = setInterval( () => { 
			if(i >= leftOfImage + distance){
				sliderProcess = false;
				clearInterval(moving);
			}
			document.getElementById("slider__body").style.left = i + "px" 
			i += distance / 107;
			
		}, 1,)
	}
	
	
	document.getElementById("title").innerText = titles[nextSlide];
	document.getElementById("text").innerText = texts[nextSlide];
	for(let i = 1; i < 4; i++){
		document.getElementById("page-switcher-0" + i).className = "page-switcher__button";
	}
	document.getElementById("page-switcher-0" + (nextSlide + 1) ).className = "page-switcher__button_selected";
	currentSlide = nextSlide;
}