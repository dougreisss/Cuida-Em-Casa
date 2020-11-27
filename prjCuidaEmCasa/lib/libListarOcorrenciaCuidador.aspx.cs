﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using prjCuidaEmCasa.classes;

namespace prjCuidaEmCasa.lib
{
    public partial class libListarOcorrenciaCuidador : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            #region Validação
            if (Request["control"] == null)
            {
                Response.Write("false");
                return;
            }

            if (Request["control"].ToString() == "")
            {
                Response.Write("false");
                return;
            }

            if (Request["cdOcorrencia"] == null)
            {
                Response.Write("false");
                return;
            }

            if (Request["cdOcorrencia"].ToString() == "")
            {
                Response.Write("false");
                return;
            }

            if (Request["emailCuidador"] == null)
            {
                Response.Write("false");
                return;
            }

            if (Request["emailCuidador"].ToString() == "")
            {
                Response.Write("false");
                return;
            }

            if (Request["dsOcorrencia"] == null)
            {
                Response.Write("false");
                return;
            }

            if (Request["dsOcorrencia"].ToString() == "")
            {
                Response.Write("false");
                return;
            }

            if (Request["emailAdm"] == null)
            {
                Response.Write("false");
                return;
            }

            if (Request["emailAdm"].ToString() == "")
            {
                Response.Write("false");
                return;
            }

            if (Request["cdTipoOcorrencia"] == null)
            {
                Response.Write("false");
                return;
            }

            if (Request["cdTipoOcorrencia"].ToString() == "")
            {
                Response.Write("false");
                return;
            }
            #endregion

            string emailCuidador = Request["emailCuidador"].ToString();
            string cdOcorrencia = Request["cdOcorrencia"].ToString();
            string control = Request["control"].ToString();
            string dsOcorrencia = Request["dsOcorrencia"].ToString();
            string emailAdm = Request["emailAdm"].ToString();
            string cdTipoOcorrencia = Request["cdTipoOcorrencia"].ToString();

            clsAdministrador adm = new clsAdministrador();

            if (control == "0")
            {
                if (!(adm.removerOcorrencia(cdOcorrencia)))
                {
                    Response.Write("false");
                    return;
                }
            }
            else
            {
                if (control == "1")
                {
                    adm.proxCodigoAdvertencia();
                    string proxCodigo = adm.codigo;

                    if (!(adm.aplicarAdvertencia(proxCodigo, dsOcorrencia, emailCuidador, emailAdm, cdTipoOcorrencia)))
                    {
                        Response.Write("false");
                        return;
                    }

                    if (!(adm.removerOcorrencia(cdOcorrencia)))
                    {
                        Response.Write("false");
                        return;
                    }
                }
                else
                {
                    if (!(adm.infoCuidadorContrato(emailCuidador)))
                    {
                        Response.Write("false");
                        return;
                    }

                    if (!(adm.listarOcorrenciasCuidador(emailCuidador)))
                    {
                        Response.Write("false");
                        return;
                    }

                    string dadosOcorrencia = "";

                    dadosOcorrencia += "<div class='areaCuidador'>";
                    dadosOcorrencia += "<div class='areaImagemCuidador' style='background-image: url('img/imgCuidador1.jfif'); margin-top: 10px; margin-left: 16px;'></div>";
                    dadosOcorrencia += "<div class='areaNomeCuidador'>";
                    dadosOcorrencia += "<h3 class='nomeCuidador' style='width: 400px;'>" + adm.nomeCuidador[0] + "</h3>";
                    dadosOcorrencia += "</div>";
                    dadosOcorrencia += "</div>";
                    dadosOcorrencia += "<div class='tituloConteudo'><span>Ocorrências</span></div>";

                    for (int i = 0; i < adm.dataOcorrencia.Count; i++)
                    {
                        dadosOcorrencia += "<div class='areaOcorrencia'>";
                        dadosOcorrencia += "<h2 class='tipoDenuncia'>" + adm.tipoOcorrencia[i] + "</h2>";
                        dadosOcorrencia += "<div class='areaInfoOcorrencia'>";
                        dadosOcorrencia += "<span>Data de envio:</span><span class='dataEmissaoDenuncia' id='dataDenuncia'>" + adm.dataOcorrencia[i] + "</span>";
                        dadosOcorrencia += "<br/>";
                        dadosOcorrencia += "<span>Denúncia enviada por:</span><span class='clienteDenuncia'>" + adm.nomeCliente[i] + "</span><span>-</span>";
                        dadosOcorrencia += "<span class='emailClienteOcorrencia'>" + adm.emailCliente[i] + "</span>";
                        dadosOcorrencia += "<br/>";
                        dadosOcorrencia += "<span>Detalhes denúncia:</span><span class='descricaoDenuncia'>" + adm.dsOcorrencia[i] + "</span>";
                        dadosOcorrencia += "</div>";
                        dadosOcorrencia += "<div class='areaBotao'>";
                        dadosOcorrencia += "<button class='btnDenuncia " + adm.cdOcorrencia[i] + "' type='submit'>Denúncia Recebida</button>";
                        dadosOcorrencia += "<button class='btnEnviarAdvertencia " + adm.cdOcorrencia[i] + " " + adm.cdTipoOcorrencia[i] + "' type='submit'>Enviar Advertência</button>";
                        dadosOcorrencia += "</div>";
                        dadosOcorrencia += "</div>";
                    }

                    dadosOcorrencia += "</div>";

                    Response.Write(adm.base64String[0] + "|@"  + dadosOcorrencia);
                }
            }
        }
    }
}