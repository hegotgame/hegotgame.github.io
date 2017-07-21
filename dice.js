"use strict"
function roll20() {
	var twentyDi = Math.floor(Math.random()*20);
	document.getElementById("20").innerHTML = twentyDi;
    return twentyDi;
}
function roll12() {
	var tweleveDi = Math.floor(Math.random()*12);
	document.getElementById("12").innerHTML = tweleveDi;
    return tweleveDi;
}
function roll10() {
	var tenDi = Math.floor(Math.random()*10);
	document.getElementById("10").innerHTML = tenDi;
    return tenDi;
}
function roll8() {
	var eightDi = Math.floor(Math.random()*8);
	document.getElementById("8").innerHTML = eightDi;
    return eightDi;
}
function roll6() {
	var sixDi = Math.floor(Math.random()*6);
	document.getElementById("6").innerHTML = sixDi;
    return sixDi;
}
function roll4() {
	var fourDi = Math.floor(Math.random()*4);
	document.getElementById("4").innerHTML = fourDi;
    return fourDi;
}
function getLottery () {
	var l20 = roll20();
	var l12 = roll12();
	var l10 = roll10();
	var l8 = roll8();
	var l6 = roll6();
	var l4 = roll4();
	var lA = [l20, l12, l10, l8, l6, l4]
	console.log(lA);
	console.log(l20);
	console.log(l12);
	console.log(l10);
	console.log(l8);
	console.log(l6);
	console.log(l4);
}

function getInputs() {
    var up20 = document.getElementById("input20");
    var in20 = up20.options[up20.selectedIndex].value;
	var bet20 = parseInt(in20);
	console.log(in20);
	var up12 = document.getElementById("input12");
    var in12 = up12.options[up12.selectedIndex].value;
	var bet12 = parseInt(in12);
	console.log(in12);
    var up10 = document.getElementById("input10");
    var in10 = up10.options[up10.selectedIndex].value;
	var bet10 = parseInt(in10);
	console.log(in10);
    var up8 = document.getElementById("input8");
    var in8 = up8.options[up8.selectedIndex].value;
	var bet8 = parseInt(in8);
	console.log(in8);
    var up6 = document.getElementById("input6");
    var in6 = up6.options[up6.selectedIndex].value;
	var bet6 = parseInt(in6);
	console.log(in6);
    var up4 = document.getElementById("input4");
    var in4 = up4.options[up4.selectedIndex].value;
	var bet4 = parseInt(in4);
	console.log(in4);
	var betA = [bet20, bet12, bet10, bet8, bet6, bet4];
	console.log(betA);
}

function roll20b() {
	var twentyDi = Math.floor(Math.random()*20);
	document.getElementById("20b").innerHTML = twentyDi;
    return twentyDi;
}
function roll12b() {
	var tweleveDi = Math.floor(Math.random()*12);
	document.getElementById("12b").innerHTML = tweleveDi;
    return tweleveDi;
}
function roll10b() {
	var tenDi = Math.floor(Math.random()*10);
	document.getElementById("10b").innerHTML = tenDi;
    return tenDi;
}
function roll8b() {
	var eightDi = Math.floor(Math.random()*8);
	document.getElementById("8b").innerHTML = eightDi;
    return eightDi;
}
function roll6b() {
	var sixDi = Math.floor(Math.random()*6);
	document.getElementById("6b").innerHTML = sixDi;
    return sixDi;
}
function roll4b() {
	var fourDi = Math.floor(Math.random()*4);
	document.getElementById("4b").innerHTML = fourDi;
    return fourDi;
}
function rollAllb () {
	roll20b(), roll12b(), roll10b(), roll8b(), roll6b(), roll4b();
}
/*
function sum () {
	var sum = fourDi + sixDi + eightDi + tenDi + tweleveDi + twentyDi;
	document.getElementbyId("total").innerHTML = sum;
	return sum;
}
function sumAll() {
//  fourDi, sixDi, eightDi, tenDi, tweleveDi, twentyDi
	var i, sum = 0;
	for (i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}
*/