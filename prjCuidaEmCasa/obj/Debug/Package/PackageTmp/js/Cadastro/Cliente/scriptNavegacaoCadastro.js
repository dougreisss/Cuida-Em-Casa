﻿import scriptCriarContaCliente from './scriptCriarContaCliente.js';

$(document).ready(function(){

	$('#txtTelefoneCliente').mask('(00) 0000-0000');
	$('#txtCPF').mask('000.000.000-00');

	$(document).on("click", "#btnProximo", function(){

		if ($('#txtNomeCliente').val() == "") 
		{
			alert('digite o seu nome');
			return;
		}
		else
		{
			localStorage.setItem("nomeCliente", $("#txtNomeCliente").val());
		}

		if ($('#txtEmailCliente').val() == "")
		{
			alert('digite o seu email');
			return;
		}
		else
		{
			localStorage.setItem("emailCliente", $("#txtEmailCliente").val());
		}
		
		if ($("#txtTelefoneCliente").val() == "") 
		{
			alert('digite o seu telefone');
			return;
		}
		else
		{
			localStorage.setItem("telefoneCliente", $("#txtTelefoneCliente").val());
		}

		$("#wrapper-CadastroPrimeiro").css("display","none");

        $("#wrapper-CadastroSegundo").addClass("visivel");

	});

	$(document).on("click", "#btnCadastrar", function(){


		if ($("#txtCPF").val() == "") 
		{
			alert('Digite o seu cpf');
			return;
		}
		else
		{
			localStorage.setItem("cpfCliente", $("#txtCPF").val());
		}

		if ($("#txtSenha").val() == "") 
		{
			alert('Digite a sua senha');
			return;
		}
		else
		{
			if ($('#txtConfirmarSenha').val() == "") 
			{
				alert('digite o algo no confirmar senha');
				return;
			}
			else
			{
				if ($('#txtSenha').val() == $('#txtConfirmarSenha').val()) 
				{
					localStorage.setItem("senhaCliente", $("#txtSenha").val());
				}
				else
				{
					alert('as senhas estao diferentes');
					return;
				}
			}
		}

		scriptCriarContaCliente();
		localStorage.setItem('usuarioLogado', $('#txtEmailCliente').val());

	});


});