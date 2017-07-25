"use strict"
function roll20() {
	var twentyDi = Math.floor(Math.random()*20);
	parseInt(twentyDi);
	document.getElementById("20").innerHTML = twentyDi;
    return twentyDi;
}
function roll12() {
	var tweleveDi = Math.floor(Math.random()*12);
	parseInt(tweleveDi);
	document.getElementById("12").innerHTML = tweleveDi;
    return tweleveDi;
}
function roll10() {
	var tenDi = Math.floor(Math.random()*10);
	parseInt(tenDi);
	document.getElementById("10").innerHTML = tenDi;
    return tenDi;
}
function roll8() {
	var eightDi = Math.floor(Math.random()*8);
	parseInt(eightDi);
	document.getElementById("8").innerHTML = eightDi;
    return eightDi;
}
function roll6() {
	var sixDi = Math.floor(Math.random()*6);
	parseInt(sixDi);
	document.getElementById("6").innerHTML = sixDi;
    return sixDi;
}
function roll4() {
	var fourDi = Math.floor(Math.random()*4);
	parseInt(fourDi);
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
	var lA = [l20, l12, l10, l8, l6, l4];
	console.log(lA)
	return lA;
}

function getInputs () {
    var up20 = document.getElementById("input20");
    var in20 = up20.options[up20.selectedIndex].value;
	var bet20 = parseInt(in20);
	var up12 = document.getElementById("input12");
    var in12 = up12.options[up12.selectedIndex].value;
	var bet12 = parseInt(in12);
    var up10 = document.getElementById("input10");
    var in10 = up10.options[up10.selectedIndex].value;
	var bet10 = parseInt(in10);
    var up8 = document.getElementById("input8");
    var in8 = up8.options[up8.selectedIndex].value;
	var bet8 = parseInt(in8);
    var up6 = document.getElementById("input6");
    var in6 = up6.options[up6.selectedIndex].value;
	var bet6 = parseInt(in6);
    var up4 = document.getElementById("input4");
    var in4 = up4.options[up4.selectedIndex].value;
	var bet4 = parseInt(in4);
	var betA = [bet20, bet12, bet10, bet8, bet6, bet4];
	console.log(betA);
	return betA;
}

function whiteTotal (bet, lotto) {
	if (bet[1] === lotto[1]) {
		var b1 = 1;
	}
	else {
		var b1 = 0;
	}
	if (bet[2] === lotto[2]) {
		var b2 = 1;
	}
	else {
		var b2 = 0;
	}
	if (bet[3] === lotto[3]) {
		var b3 = 1;
	}
	else {
		var b3 = 0;
	}
	if (bet[4] === lotto[4]) {
		var b4 = 1;
	}
	else {
		var b4 = 0;
	}
	if (bet[5] === lotto[5]) {
		var b5 = 1;
	}
	else {
		var b5 = 0;
	}
	var whiteSum = b1 + b2 + b3 + b4 + b5;
	console.log("# of white dice correct is " + whiteSum)
	return whiteSum;
}

function calcPrize (bet, lotto, white) {
	if (lotto[0] === bet[0] && white === 5) {
		console.log ("Win 250,000 - GRAND PRIZE WINNNER");
	}
	else if (white === 5) {
		console.log ("Win 5,000 - Prize #1 winner 5");
	}
	else if (lotto[0] === bet[0] && white === 4) {
		console.log ("Win 250 - Prize #2 winner 4+P");
	}
	else if (white === 4) {
		console.log ("Win 25 - Prize #3 winner 4");
	}
	else if (lotto[0] === bet[0] && white === 3) {
		console.log ("Win 25 - Prize #4 winner 3+P");
	}
	else if (white === 3) {
		console.log ("Win 3 - Prize #5 winner 3");
	}
	else if (lotto[0] === bet[0] && white === 2) {
		console.log ("Win 3 - Prize #6 winner 2+P");
	}
	else if (lotto[0] === bet[0] && white === 1) {
		console.log ("Win 2 - Prize #7 winner 1+P")
	}
	else if (lotto[0] === bet[0] && white === 0) {
		console.log ("Win 2 - Prize #8 winner 0+P")
	}
	else {
		console.log ("you lose");
	}
}

function winPowerDice () {
	var bet = getInputs ();
	var lotto = getLottery ();
	var white = whiteTotal (bet, lotto);
	calcPrize (bet, lotto, white);
}
/*
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