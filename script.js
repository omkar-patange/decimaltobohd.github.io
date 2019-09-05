var input = Number(prompt("Put in a number"));
 	var a = "Decimal : "+ input+"<br>";
 	var b = "Binary : "+ input.toString(2)+"<br>";
	var c = "Octal : "+ input.toString(8)+"<br>";
	var d = "HexaDecimal : "+ input.toString(16)+"<br>";

	document.getElementById("showvalue1").innerHTML = a;
	document.getElementById("showvalue2").innerHTML = b;
	document.getElementById("showvalue3").innerHTML = c;
	document.getElementById("showvalue4").innerHTML = d;