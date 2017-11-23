// > поголемо
// < помало
// >= поголемо или еднакво
// <= помало или еднакво
// == еднакво
// === апсолутно еднакво (идентично)
// != нееднакво
// !== апсолутно нееднакво

var kolichinaBrashno = 20;
var beloBrashno = false;
var crnoBrashno = false;

if(kolichinaBrashno > 1){
	console.log('Kje pravime torta! :D');
} else {
	console.log('Prvo kupi brashno, pa posle kje pravime...');
}


if(beloBrashno == true){
	console.log('Kje pravime so belo brashno!');
} 

else if(crnoBrashno == true){
	console.log('Kje pravime so crno brashno!');
} 

else {
	console.log('Nema da pravime... :(');
}


// + - / * %

console.log(2 + 2);
console.log(2 / 135);
console.log(4 - 12);
console.log(3 * 10);

console.log(19 % 4);

var broj = 4;

if(broj % 2 == 0){
	console.log('paren');
} else {
	console.log('neparen');
}

var ime = 'Bojan';
// ime = '';
console.log(ime.length);

// && и
// || или

kolichinaBrashno = 1;
var brashno = true;

if(brashno == true && kolichinaBrashno >= 1){
	console.log('Ima brashno i e vo dovolna kolichina');
} else {
	console.log('Nema brashno, ili ne e vo dovolna kolichina');
}

broj = 7;

if(broj < 5 || broj > 10){
	console.log('brojot e pomal od 5 ili pogolem od 10');
} else {
	console.log('brojot e vo opsegot od 5 do 10 vkluchuvajki gi i 5 i 10');
}

// true && true = true
// true && false = false
// false && true = false
// false && false = false

// true || true = true
// true || false = true
// false || true = true
// false || false = false


var mesec = 'Januari';

switch(mesec){
	case 'Januari':
		console.log('Go odbravte mesecot Januari');
	break;
	case 'Fevruari':
		console.log('Go odbravte mesecot Fevruari');
	break;
	case 'Mart':
		console.log('Go odbravte mesecot Mart');
	break;
	case 'April':
		console.log('Go odbravte mesecot April');
	break;
	case 'Maj':
		console.log('Go odbravte mesecot Maj');
	break;
	case 'Juni':
		console.log('Go odbravte mesecot Juni');
	break;
	case 'Juli':
		console.log('Go odbravte mesecot Juli');
	break;
	case 'Avgust':
		console.log('Go odbravte mesecot Avgust');
	break;
	case 'Septemvri':
		console.log('Go odbravte mesecot Septemvri');
	break;
	case 'Oktomvri':
		console.log('Go odbravte mesecot Oktomvri');
	break;
	case 'Noemvri':
		console.log('Go odbravte mesecot Noemvri');
	break;
	case 'Dekemvri':
		console.log('Go odbravte mesecot Dekemvri');
	break;
	default:
		console.log('Ne postoi vakov mesec');
	break;
}


switch(mesec){
	case 'Januari':
	case 'Fevruari':
	case 'Mart':
	case 'Oktomvri':
	case 'Noemvri':
	case 'Dekemvri':
		console.log('Odbravte laden mesec');
	break;
	case 'April':
	case 'Maj':
	case 'Juni':
	case 'Juli':
	case 'Avgust':
	case 'Septemvri':
		console.log('Odbravte topol mesec');
	break;
	default:
		console.log('Ne postoi vakov mesec');
}

ime = 'Janko';

// function zdravo(ime, prezime){
function zdravo(prezime){
	console.log('Zdravo ' + ime + ' ' + prezime + '!');
}





















// zdravo("Bojan", 'Bojanovski');
// zdravo('Pero', 'Perovski');
zdravo('Bojanovski');
zdravo('Perovski');


c2f(18); // X celziusovi stepeni vo farenhajtovi stepeni
f2c(120); // X farenhajtovi stepeni vo celziusovi stepeni

temp(12, 'c2f'); // X celziusovi stepeni vo farenhajtovi stepeni
temp(102, 'f2c'); // X farenhajtovi stepeni vo celziusovi stepeni


