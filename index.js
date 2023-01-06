
 // -------------------REQUISIÇÔES-VARIAVEIS-DE-AMBIENTE----------------
 
 require('dotenv/config');
 var express = require("express");
 var cors = require("cors");
 var path = require("path");
 
 var PORTA = process.env.PORT;
 var AMBIENTE = process.env.AMBIENTE_PROCESSO;
 
 // ------------------INDEX-DE-ROTAS-------------------------------------
 
 var app = express();
 var index = require("./src/routes/index");
 var user = require("./src/routes/user");
 var agendamento = require("./src/routes/agendamento");

 // ------------------MIDDLEWARER----------------------------------------
 
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 
 // Pasta que guarda as views. Define o caminho principal, o inicio de toda rota começa por "Public"
 app.use(express.static(path.join(__dirname, "public")));
 
 app.use(cors());
 
 app.use(express.static('public'))
 
 // ------------------ROTAS-PADRÕES--------------------------------------
 
 app.use("/", index);
 app.use("/user", user);
 app.use("/agendamento", agendamento);
 
 // ---------------PORTA DO NAVEGADOR------------------------------------
 
 app.listen(PORTA, function () {
     console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA}`);
 });
