// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
var cores = ["#481E9D","#8D74C0","#CA4B57","#2B2D42","#1C77C3","#81B29A","#E98039"];
var mudou = false;
function getRandom(max) {
    return Math.floor(Math.random() * max )
}

function acha(id) 
{
	texto = document.getElementById(id).innerHTML;

	var txt = texto.replace(/mconf/gi, "<span id="+ id*13 +"><b>Mconf</b>");
	document.getElementById(id).innerHTML=txt;
	if (txt != texto)
	{
	document.getElementById(id*13).style.color= cores[getRandom(6)];
	}
}

function inicializa(){
    document.addEventListener('keyup', testa_form);
}

// Evento que é executado toda vez que uma tecla for pressionada no input
function testa_form(){
	texto = document.getElementById("meu-input").value;

	if(event.keyCode == 70 && mudou){
		if (texto.toLowerCase().indexOf("mconf") != -1){
	    	document.body.style.backgroundColor = cores[getRandom(6)];
	    	mudou = true;
		} 
	}
	else if (event.keyCode == 8){
		if(texto.toLowerCase().indexOf("mconf") == -1){

			document.body.style.backgroundColor = "white";
			mudou = false;
		}

	}
	
}