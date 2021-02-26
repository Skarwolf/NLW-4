import express, { request, response } from 'express';

const app = express();

/**
 * Get => Busca (Recebe um Parametro);
 * Post => Salva;
 * PUT => Alterar;
 * DELETE => DELETA NÉ MENO;
 * PATCH => Alteração Específica;
 * ------------------------------
 * REQUEST => Tudo aquilo que a gente ta recebendo;
 * RESPONSE => Tudo aquilo que estamos enviando;
 */

// http://localhost:3333/users
// Está função pode receber ou enviar info, no momento estamos enviando um Hello World para 
// Servidor 3333

app.get("/", (request, response) => {
    return response.json({message: "Hello World - NLW04"});
});

// 1 Paran => Rota(Recurso API)
// 2 paran => request, response 

app.post("/", (request, response) => {
    
});


app.listen(3333, () => console.log("Server tá Pampa!"));

