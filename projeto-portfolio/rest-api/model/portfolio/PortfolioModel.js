const db = require('../../banco/dbConexao');

module.exports = class PortfolioModel{
    
    static getTodos(callback){
        return db.query("SELECT * FROM portfolio", callback);
    }

    static getId(id, callback){
        return db.query("SELECT * FROM portfolio WHERE id_portfolio = ?", [id], callback) //esse ultimo array é um parâmetro que pode ser passado para esse método no qual as sequencias de intens dentro do array substituem os ? na ordem que aparecem na query
    }
};

