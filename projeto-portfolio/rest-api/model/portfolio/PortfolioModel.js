const db = require('../../banco/dbConexao');

module.exports = class PortfolioModel{
    
    static getTodos(callback){
        return db.query("SELECT * FROM portfolio", callback);
    }

    static getId(id, callback){
        return db.query("SELECT * FROM portfolio WHERE id_portfolio = ?", [id], callback) //esse ultimo array é um parâmetro que pode ser passado para esse método no qual as sequencias de intens dentro do array substituem os ? na ordem que aparecem na query
    }

    static adicionar(portfolio, callback){
        return db.query("INSERT INTO portfolio (descricao, detalhes) VALUES(?, ?)", [portfolio.descricao, portfolio.detalhes], callback);
    }

    static deletar(id, callback){
        return db.query("DELETE FROM portfolio WHERE id_portfolio = ?", [id], callback)
    }

    static editar(portfolio, callback){
        return db.query("UPDATE portfolio SET descricao = ?, detalhes = ? WHERE id_portfolio = ?", [portfolio.descricao, portfolio.detalhes, portfolio.id_portfolio], callback )
    }
};

