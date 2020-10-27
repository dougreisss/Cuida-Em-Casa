import scriptServicoAgendado from "./scriptServicoAgendado.js";
import scriptServicoAgendadoSelecionado from "./scriptServicoAgendadoSelecionado.js";

$(document).ready(function () {

	if(!localStorage.getItem("tipoUsuario") == 3){
	    alert("Você não tem acesso a essa página, realize o login novamente");
	    localStorage.clear();
	    window.location.href = "../../pages/index.html";
	}	

    scriptServicoAgendado();

    $(".iconeVoltar").click(function () {
        $(".visivel").each(function (i, obj) {
           $(this).removeClass("visivel");
        });
    });

    $("#wrapper-ServicoAgendado").addClass("visivel");
    $('#headerComum').addClass("visivel");

});