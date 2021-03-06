﻿export default function scriptHistoricoServico(){


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

    $.post("../../lib/libHistoricoServico.aspx", { email: localStorage.getItem("usuarioLogado"), filtro: "true" }, function (retorno) {
        
        //console.log(retorno);

        if (retorno == "" || retorno == null) {
           // $('#wrapper-historicoServico').html("ERRO NO RETORNO");
           alertIonic('Houve um erro!');
        }

        else if (retorno == "false") {
            $('#wrapper-historicoServico').html("<h2 style='font-family: Rubik;text-align:center;margin:60px auto;width:80%'>Desculpe, mas você não tem serviços finalizados ou cancelados</h2>");
        }
        else {
            $('#wrapper-historicoServico').html(retorno);

            $(".dadosHistorico").each(function (i, obj) {

               var url = "data:image/png;base64," + $(this).children(".invi").html();
               $(this).children(".areaImagemPaciente").css("background-image", "url('" + url.replace(/(\r\n|\n|\r)/gm, "") + "')");
              
            });
        
            $(".areaHistorico").click(function (e) {
                $(".areaHistorico").removeClass("selecionado");
                $(this).addClass("selecionado");
            });
        }

        $(".areaFiltro").click(function (e) {
            $(".infoFiltro").toggleClass("visivel");
        });

    });

}
