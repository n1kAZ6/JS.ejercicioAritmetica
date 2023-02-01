function ejercicioOperaciones(){
	let a=10.25;
	let b=0.75;
	let suma= a+b;
	document.write(typeof suma);
	document.write('<br>');
	
	let numero1 = 23;
	let numero2 = 34;
	let resultadoOperacion = numero1 + numero2;
	document.write(resultadoOperacion);
	document.write('<br>');
	
	let operacion = (46 + ((8 * 2) / 2)) + 46;
	document.write(operacion);
	document.write('<br>');

	let operacion2=46 + (8 * 2) / (2 + 46);
	document.write(operacion2);
}