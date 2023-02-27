import ConfigClass from "../../ConfigClass";

const caminho = `${ConfigClass.getUrlApi().toString()}/portfolio`

export default class PortfolioModel{
    constructor(){

    }

    static getTodos(){
        return fetch(caminho).then(response => {
            if(response.status >= 400){
                throw new Error('erro maior que 400')
            }
            return response.json();
        })
    }
}