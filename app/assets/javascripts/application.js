//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
var cores = ["#481E9D","#8D74C0","#CA4B57","#2B2D42","#1C77C3","#81B29A","#E98039"];
var fundoAlterado = false;

function getRandom(max) {
    return Math.floor(Math.random() * max )
}

function alteraMensagem(id) 
{
	texto = document.getElementById(id).innerHTML;

	var txt = texto.replace(/mconf/gi, "<span id="+ id*13 +"><b>Mconf</b>");
	document.getElementById(id).innerHTML=txt;
	if (txt != texto)
	{
	document.getElementById(id*13).style.color = cores[getRandom(6)];
	}
}

function inicializa(){
    document.addEventListener('keyup', testa_form);
}

// Evento que é executado toda vez que uma tecla for pressionada no input
function testa_form(){
	texto = document.getElementById("meu-input").value;

	if(event.keyCode == 70 && !fundoAlterado){
		if (texto.toLowerCase().indexOf("mconf") != -1){
	    	document.body.style.backgroundColor = cores[getRandom(6)];
	    	fundoAlterado = true;
		} 
	}
	else if (event.keyCode == 8){
		if(texto.toLowerCase().indexOf("mconf") == -1){

			document.body.style.backgroundColor = "white";
			fundoAlterado = false;
		}

	}
	
}