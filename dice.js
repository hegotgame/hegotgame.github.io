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
function rollAll () {
	roll20(), roll12(), roll10(), roll8(), roll6(), roll4();
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