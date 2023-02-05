var express = require('express');
var router = express.Router();
var PortfolioModel = require('../model/portfolio/PortfolioModel'); //acesso ao banco
var RespostaClass = require('../model/RespostaClass');

router.get("/", function(req, res, next){
    PortfolioModel.getTodos(function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:', erro);
        }else{
            resposta.dados = retorno;
        }

        res.json(resposta);

    })
});


router.get("/:id?", function(req, res, next){
    PortfolioModel.getId(req.params.id, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:', erro);
        }else{
            resposta.dados = retorno;
        }

        res.json(resposta);

    })
});

module.exports = router;