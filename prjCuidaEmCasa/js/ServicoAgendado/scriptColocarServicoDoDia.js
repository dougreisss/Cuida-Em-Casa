import scriptServicoAgendado from './scriptServicoAgendado.js';
export default function colocarAgendadosDia(){
    
    var value = $(".selected_date").html();        
    $('#ListaServicosAgendados').html("");    
            //console.log("dia selecionado:" +value);

    if(value!="" && window.servicos!=undefined && window.servicos!=null && window.servicos[0]!=""){
        //console.log("vou colocar as disponibilidades: " + window.disponibilidades);
        
        for (var i = 0; i < window.servicos.length; i++) {

            var arrayAtual = window.servicos[i];
            arrayAtual = arrayAtual.replace('[', "");
            arrayAtual = arrayAtual.replace(']', "");
            arrayAtual = arrayAtual.split(',');
            var dia = arrayAtual[0];
            var cdServico = arrayAtual[1];
            if(dia == value){
        		scriptServicoAgendado();
            }
        }

    }
    else{
        $(".output").html("Selecione um dia");
    }
}