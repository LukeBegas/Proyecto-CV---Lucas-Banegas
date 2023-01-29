window.onload = function(){ 
	document.getElementById('boton_expandir').onclick = function () {
	  var x = document.getElementById('contenido_principal');
	  if (x.style.display === 'none') {
	    x.style.display = 'block';
	  } else {
	    x.style.display = 'none';
	  }
	}
	document.getElementById('boton_expandir_dos').onclick = function () {
	  var x = document.getElementById('contenido_secundario');
	  if (x.style.display === 'none') {
	    x.style.display = 'block';
	  } else {
	    x.style.display = 'none';
	  }
	}
}

/*
//Intento de usar una sola funcion para los botones pero tira error (parametro null)

document.getElementById('boton_expandir').onclick = expandir (contenido_principal);
document.getElementById('boton_expandir_dos').onclick = expandir (contenido_secundario);

function expandir (param) {
	var x = document.getElementById("param");
	if (x.style.display === 'none') {
		x.style.display = 'block';
	} 
	else {
		x.style.display = 'none';
	}
}*/