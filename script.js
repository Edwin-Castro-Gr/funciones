
let $luzroja =  document.getElementById('luzroja');
let $luzamarilla = document.getElementById('luzamarilla');
let $luzverde = document.getElementById('luzverde');
let $lucesDelCirculo = document.querySelectorAll('.luces-circulo');

const luzRoja = () =>{	
	$luzroja.classList.add("rojo");
	setTimeout(luzAmarilla,1000);	
}

const luzRoja2 = () =>{	
	$luzamarilla.classList.remove('amarillo');
	$luzroja.classList.add("rojo");
	setTimeout(luzAmarilla,1000);	
}

const luzAmarilla = () => {
	$luzroja.classList.remove('rojo');
	$luzamarilla.classList.add('amarillo');
	setTimeout(luzVerde,3000);
}

const luzAmarilla2 = () =>{
	$luzverde.classList.remove('verde');
	$luzamarilla.classList.add('amarillo');
	setTimeout(luzRoja2,3000);
}
const luzVerde = () =>{
	$luzamarilla.classList.remove('amarillo');
	$luzverde.classList.add('verde');
	setTimeout(luzAmarilla2,1000);
}

// const mostrarLuz = () =>{
//     $lucesDelCirculo[count].className = 'luces-circulo';
//     count++;

//     if(count > 2) count = 0;

//     const luzActual = $lucesDelCirculo[count];
//     luzActual.classList.add(luzActual.getAttribute('color'))
// }
luzRoja();