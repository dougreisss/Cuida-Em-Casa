export default function scriptServicoAgendadoSelecionado(cdServico) {
    var dados;

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

    $.post("../../lib/libServicoAgendadoSelecionado.aspx", { codigoServico: cdServico }, function (retorno) {

        if (retorno == "erro") {
            //console.log("deu erro");
            alertIonic("Houve um erro");
        }
        else 
        {
           dados = retorno.split(';');
           $('.invi').html(dados[0]);
           $(".areaInfoPaciente").each(function (i, obj) {
                var url = "data:image/png;base64," + $(this).children('.invi').html();
                $(this).children(".areaImagemPacienteAgendamento").css("background-image", "url('" + url.replace(/(\r\n|\n|\r)/gm, "") + "')");
            });
           $('.nomeInfoPaciente').html(dados[1]);
           $('#medicacao').html(dados[2]);
           $('#descricao').html(dados[3]);
           $('#cep').html(dados[4]);
           $('#bairro').html(dados[5]);
           $('#rua').html(dados[6]);
           $('#numero').html(dados[7]);
           $('#cidade').html(dados[8]);
           $('#uf').html(dados[9]);
           $('#complemento').html(dados[10]);
           $('#horario').html(dados[11] + " - " + dados[12]);
           $('#duracao').html(dados[13] + " Hora(s)");
           $('#valorHora').html("R$ " + dados[16]);
           $('#status').html(dados[15]);
           $('#valorTotal').html("R$ " + dados[14]);
        }
    });

};
