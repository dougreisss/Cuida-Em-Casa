export default function scriptAtualizarSenha(senhaAtual, novaSenha, confirmarSenha, emailUsuario) {
    
    function alertIonic(text) {
        const alert = document.createElement('ion-alert');
        alert.cssClass = 'alertBonito';
        alert.header = 'Atenção';
        alert.subHeader = '';
        alert.message = text;
        alert.buttons = ['OK'];

        document.body.appendChild(alert);
        return alert.present();
    }


	$.post("../../lib/libAtualizarSenha.aspx", { sa: senhaAtual, ns: novaSenha, cs: confirmarSenha, eu: emailUsuario}, function(retorno) {

		if (retorno == "erro") 
		{
			//console.log("deu erro");
			alertIonic('Houve um erro!');
		}
		else
		{
			if (retorno == "senhaAtualDiferente") {
				//console.log('senha atual diferente');
				alertIonic('A senha atual está diferente');
			}
			else
			{
				if (retorno == "senhaDiferente") 
				{
					//console.log('nova senha e confirmar senha diferente');
					alertIonic('A nova senha e confirmar senha estão diferentes');
				}
				else
				{
					alertIonic('Senha Alterada com Sucesso!');
					$('.iconeVoltar').click();
				}
			}
		}

	});

}