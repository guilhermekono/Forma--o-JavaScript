//Wrappers

var valorString = "string qualquer";

console.log(valorString.substr(0, 5));


//Processo por baixo dos panos

var valorStringTemp = new String(valorString)

var substr = valorStringTemp.substr(0, 5);

console.log(substr);

substr = null;

