function agregaLista(){
	//elementos que tenemos 
	var lista = document.getElementById('agregar');
	//elementos nuevos que creamos
	var contenido = document.createElement('form');
	var input = document.createElement('input');
	var boton = document.createElement('button');
    //texto del boton
	boton.setAttribute ('type','submit');
	//colocamos texto y atributo en boton
	var textboton = document.createTextNode('Guardar');
	boton.appendChild(textboton);
	boton.setAttribute("class","btn-default");
		contenido.setAttribute("onsubmit", "return guardar();");
		//unir al form con sus elementos input y boton
		contenido.appendChild(input);
		contenido.appendChild(boton);
		//unir el div gral(lista) a el contenido
		lista.appendChild(contenido);
	}

function guardar(){
	var lista= document.getElementById('agregar')
	var digitar = document.getElementByTagName('input')[0].value;
	var nodoescribir = document.createTextNode(escribir);

	var inputext = document.createElement('p');

	inputext.appendChild(nodoescribir);

	var tarjetaboton = document.createElement('button');
	var nodotarjeta = document.createTextNode('Agregar Nueva Tarjeta');

	tarjetaboton.appendChild(nodotarjeta);
	tarjetaboton.setAttribute("class", "btn-default");
	
	
	lista.appendChild(inputext);
	lista.appendChild(tarjetaboton);
	debugger;
	return false;

}


