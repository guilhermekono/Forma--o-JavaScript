const express = require('express'); //biblioteca do express
const bodyparser = require('body-parser'); 
const cors = require('cors'); //para fazer requisição dentro da própria máquina
const api = express(); //inicializando o express instanciando ele
const port = 3000; //definindo a porta que o servidor que criei vai estar escutando
const router = express.Router(); //porta 3000/index, porta 3000/portfolio, Router cuida dessas rotas

api.use(cors()); //middler para utilizar junto com o express(middler também), recebe uma requisição, realiza algo e retorna resposta

api.use(bodyparser.urlencoded({extended: true})); //recuperar corpo das requisições
api.use(bodyparser.json()); //dando resposta em JSON

router.get("/", (req, res) => res.json({//definindo rota padrão pra raiz
    mensagem: 'API online!'
}));

api.use('/', router);

api.listen(port);
console.log('Run API...')




