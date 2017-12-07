function fizzBuzz(n){
	var output = []; // empty array

	for(var i = 0; i < n.length; i++){
		var member = ''; // empty string variable

		if(n[i] % 3 == 0){
			member += 'Fizz';
			// member = member + 'Fizz';
		}

		if(n[i] % 5 == 0){
			member += 'Buzz';
		}

		if(member.length == 0){
			member = n[i];
			// member = n[i] + '';
		}

		output.push(member);
	}

	return output;
}

var niza = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var novaNiza = fizzBuzz(niza);
console.log(novaNiza);
console.log(niza);

// var obj = {};
// var arr = [];
// var str = '';





function fn1(){
	console.log('Zdravo fn1');
}

fn1();

// a function is a first class citizen in javascript

var fn2 = function(){

};

fn2();

// *************************************************

var fnOne = function(){
	console.log('fnOne');
}

var fnTwo = function(fn){
	fn();
}

fnTwo(fnOne);

fnTwo(function(){console.log('Some anon function!');});

fnTwo(function(){
	console.log('Some anon function!');
});


// setTimeout(function(){
// 	console.log('Timed out!');
// }, 1);

// console.log('After time out');

// for(var i = 0; i < 1000; i++){
// 	console.log('Line: ' + i);
// }



var math = {
	a: null,
	b: null,

	add: function(){
		return this.a + this.b;
	},

	sub: function(){
		return this.a - this.b;
	},

	div: function(){
		return this.a / this.b;
	},

	mul: function(){
		return this.a * this.b;
	}
};

math.a = 4;
math.b = 9;

console.log(math.add());
console.log(math.sub());
console.log(math.div());
console.log(math.mul());

math.a = 6;
math.b = 7;

console.log(math.add());
console.log(math.sub());
console.log(math.div());
console.log(math.mul());


var fnTest1 = function(name){
	console.log(name);
}

var fnTest2 = function(fn, n){
	fn(n);
}

var fnTest3 = function(fn1, fn2, name){
	fn1(fn2, name);
}

// V1
fnTest3(fnTest2, fnTest1, 'Pero');

// V2
fnTest3(
	function(fn, n){
		fn(n);
	}, 
	fnTest1, 
	'Janko'
);

// V3
fnTest3(
	function(fn, n){
		fn(n);
	}, 
	function(name){
		console.log(name);
	}, 
	'Stanko'
);


// querySelector, DOM Events, addEventListener
// <a href="https://google.com">Google</a>
// da nosi na https://yahoo.com
// 
// ***************************************
// 
// <input type="number" name="a" value="0">
// +
// <input type="number" name="b" value="0">
// =
// <input type="number" name="rezultat">



















