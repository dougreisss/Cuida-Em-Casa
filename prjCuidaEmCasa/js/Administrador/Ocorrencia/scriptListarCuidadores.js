﻿$(document).ready(function () {

    $.post("../../../lib/libListarCuidadoresOcorrencia.aspx", {}, function (retorno) {
        if (retorno == "false") {
            console.log("deu erro na lib");
        }
        else {

            $('.listaCuidadores').html(retorno);

            $(".areaCuidador").each(function (i, obj) {
                var tinhaImg = $(this).children("div.invi").html().split("#");
                if (tinhaImg[1] == "true" ){var url = "data:image/png;base64," + tinhaImg[0];}
                else{ var url = "data:image/svg+xml;base64," + tinhaImg[0]; }
        
                $(this).children(":first").css("background-image", "url('" + url.replace(/(\r\n|\n|\r)/gm, "") + "')");
            });

        }
    });

    $(document).on("click", ".iconeInformacao", function () {
        var classes = $(this).attr("class").split(/\s+/);
        localStorage.setItem("emailCuidador", classes[1]);
    });

})