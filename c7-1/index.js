// var timedate = new Date();
// console.log(timedate);

var timenode = document.querySelector('.time');

// setInterval(function(){
// 	var timedate = new Date();

// 	// ternary if/operator
// 	var hours = timedate.getHours() < 10 ? '0' + timedate.getHours() : timedate.getHours();
// 	var minutes = timedate.getMinutes() < 10 ? '0' + timedate.getMinutes() : timedate.getMinutes();
// 	// var seconds = timedate.getSeconds() < 10 ? '0' + timedate.getSeconds() : timedate.getSeconds();

// 	// classic if
// 	var seconds = '';

// 	if(timedate.getSeconds() < 10)	{
// 		seconds = '0' + timedate.getSeconds();
// 	} else {
// 		seconds = timedate.getSeconds();
// 	}

// 	timenode.innerText = hours + ':' + minutes + ':' + seconds;
// }, 1000);



var DAY = 1000 * 60 * 60 * 24;
var HOUR = 1000 * 60 * 60;
var MINUTE = 1000 * 60;
var SECOND = 1000;

setInterval(function(){
	var novagodina = new Date(2018, 0, 1, 0, 0, 0, 0);

	var momentalno = new Date();
	var razlika = novagodina.getTime() - momentalno.getTime();

	var denovi = (razlika - (razlika % (DAY))) / (DAY);
	var saati = ((razlika - (razlika % (HOUR))) / (HOUR)) % 24;
	var minuti = ((razlika - (razlika % (MINUTE))) / (MINUTE)) % 60;
	var sekundi = ((razlika - (razlika % (SECOND))) / (SECOND)) % 60;

	timenode.innerText = denovi + ' дена, ' + saati + ' саати, ' + minuti + ' минути, ' + sekundi + ' секунди ДО НОВА ГОДИНА!';
}, 1000);


// console.log(denovi);
// console.log(saati);
// console.log(minuti);
// console.log(sekundi);