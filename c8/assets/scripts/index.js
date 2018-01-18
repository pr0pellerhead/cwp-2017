// var slides = document.querySelector('.slides');
// var images = document.querySelectorAll('.slides img');
// var imageWidth = images[0].width;

// var marginPosition = 0;
// var sliderIntervalDuration = 1500;

// setInterval(function(){
// 	if(marginPosition > (imageWidth * (images.length - 1) * -1)){
// 		marginPosition -= imageWidth;
// 		slides.style.marginLeft = marginPosition + 'px';
// 	} else {
// 		marginPosition = 0;
// 		slides.style.marginLeft = 0;
// 	}
// }, sliderIntervalDuration);

var slides = document.querySelector('.slides');
var marginPosition = 0;

setInterval(function(){
	if(marginPosition > -1200){
		marginPosition = marginPosition - 300;
		slides.style.marginTop = marginPosition + 'px';
	} else {
		marginPosition = 0;
		slides.style.marginTop = 0;
	}
}, 1500);




// var fn1 = function(){
// 	console.log('fn1');
// }

// function fn2(){
// 	console.log('fn2');
// }

// fn1();
// fn2();

// var student = {
// 	ime: '',
// 	prezime: '',
// 	uchi: function(){
// 		console.log('Ucham!');
// 	}
// };

// student.uchi();

// function fnA(b){
// 	b = b + 5;
// 	return b;
// }

// var a = 5; // root scope

// a = fnA(a);

// console.log(a);

// var $ = 'pero';
// console.log($);

// jQuery('.slider');

// var $ = jQuery;

// $('.slider');

var _ = 'Janko';
console.log(_);