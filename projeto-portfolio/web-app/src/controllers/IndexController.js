import PortfolioModel from "../models/portfolio/portfolioModel";

let divPortfolios = window.documento.getElementById("div-portfolios");
let objIndexController;

class IndexController{
     
    getTodosIndex(divPortfolios){
        let promise = new Promise(function(resolve, reject){
            let promiseFetch = PortfolioModel.getTodos();
            
            promiseFetch.then(response =>{
                resolve(response)
            })
        })
        
        promise.then(response =>{
            let dados = "";

            for(const servico of response.dados){
                dados += `<div class="card text-white bg-primary">
                <div class="card-header">
                <h5 class="card-title">${servico.descricao}</h5>
                </div>
                <div class="card-body">
                  <p class="card-text">${servico.detalhes}</p>
                </div>
                </div>` ;
            }

            divPortfolios.innerHTML = dados;
        }).catch(response => console.log("erro catch:", response));
    }
}

function main(){
    objIndexController = new objIndexController();
    onjIndexController.getTodosIndex(divPortfolios);

}

window.onload = main;