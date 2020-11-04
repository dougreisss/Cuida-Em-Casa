﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using prjCuidaEmCasa.classes.Agendamento;

namespace prjCuidaEmCasa.lib
{
    public partial class libAtualizarSenha : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request["sa"] == null)
            {
                Response.Write("erro");
                return;
            }

            if (Request["sa"].ToString() == "")
            {
                Response.Write("erro");
                return;
            }

            string senhaAtual = Request["sa"].ToString();

            if (Request["ns"] == null)
            {
                Response.Write("erro");
                return;
            }

            if (Request["ns"].ToString() == "")
	        {
                Response.Write("erro");
                return;
	        }

            string novaSenha = Request["ns"].ToString();

            if (Request["cs"] == null)
            {
                Response.Write("erro");
                return;
            }

            if (Request["cs"].ToString() == "")
            {
                Response.Write("erro");
                return;
            }

            string confirmarSenha = Request["cs"].ToString();

            clsUsuario classeAtualizarSenha = new clsUsuario();


            if (!classeAtualizarSenha(novaSenha, emailCliente))
            {
                Response.Write("erro");
                return;
            }



            
        }
    }
}