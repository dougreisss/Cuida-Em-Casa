﻿import scriptPacienteAgora from "./scriptPacienteAgora.js";
import scriptConfirmarEnderecoAgora from "./scriptConfirmarEnderecoAgora.js";
import scriptAlterarEnderecoAgora from "./scriptAlterarEnderecoAgora.js";
import scriptHoraValorAgora from "./scriptHoraValorAgora.js";
import scriptFinalizarServicoAgora from "./scriptFinalizarServicoAgora.js";
import scriptCancelarServicoAgora from "./scriptCancelarServicoAgora.js"

var indexPage = 0; var jump = 0; var DomElement = $("#btnPaciente");

function passarPagina(SentDomElement,Jump) {

$(".conteudoGeral").children().eq(indexPage).addClass("visivel");

    indexPage += Jump;
    DomElement = SentDomElement; // botao que enviou o último click pra chegar na página que estamos

    if(Jump < 0){
        console.log(indexPage);
        if(indexPage>=0){
            $(".visivel").css("display", "none" );
            $(".visivel").removeClass("visivel");
            $(DomElement).parents("main.conteudoGeral").children().eq(indexPage).css( "display", "block");
            $(DomElement).parents("main.conteudoGeral").children().eq(indexPage).addClass("visivel"); 
        }
        else{window.location.href = "../../pages/cliente/atendimento.html"}
       
    }
    else{
        $(".visivel").css("display", "none" );
        
        $(".visivel").removeClass("visivel");

        $(DomElement).parents("main.conteudoGeral").children().eq(indexPage).addClass("visivel"); 
    }   
    
    return;
};    	


$(".iconeVoltar").click(function(){
    
    if(indexPage == 3 ){
        passarPagina(DomElement, -2);
    } 
    else{passarPagina(DomElement, -1);}
});

$(document).ready(function () {

if(!localStorage.getItem("tipoUsuario") == 2){
    alert("Você não tem acesso a essa página, realize o login novamente");
    localStorage.clear();
    window.location.href = "../../pages/index.html";
}

scriptPacienteAgora();

// Pg 1  : btnPaciente
$(document).on("click", "#btnPaciente", function(){

    if($('.selecionado').length){
        try{    

            var classes = $(".selecionado").attr("class").split(/\s+/);
            localStorage.setItem("cdPaciente", classes[1]);
            $(".selecionado").removeClass("selecionado");
            passarPagina($(this),1);
            scriptConfirmarEnderecoAgora();
        }
        catch {
            alert("Por favor, escolha um paciente!");
            return;
        }
    }   
    else{
        alert("Por favor, escolha um paciente!!");
    }
});
//btnEnderecoDiferente


// Pg 2 : Escolher se endereço tá certo ou não

$("#btnConfirmarEndereco").click(function () {
        passarPagina($(this),2);
});
$("#btnEnderecoDiferente").click(function () {
        passarPagina($(this),1);  //-> só passa pra próxima, não roda nenhum script
});

//pg 2.1: alterou endereço 

$("#btnAlterarEndereco").click(function () {

    if($(".required").val() != ""){
        passarPagina($(this),1);
        scriptAlterarEnderecoAgora(); // guarda os dados do endereço que foi digitado
    }
    else{
        alert("Os únicos campos que podem estar vazios são CEP e Complemento!");
        return;
    }
   
 });

 //pg 3: pg data hora -> vai para cuidador
$("#btnDataHora").click(function () {
    passarPagina($(this),1);
    scriptHoraValorAgora();
    scriptFinalizarServicoAgora();
});

$(".btnCancelarBusca").click(function () {
    scriptCancelarServicoAgora();
});

 });