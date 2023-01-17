// segunda tarefa

/* comentário de varias linhas

*/

var tarefa = "isso é uma string";

console.log(tarefa)
console.log(typeof(tarefa))

var tarefa2 = new String("string criada com construtor");
console.log(tarefa2)
console.log(typeof(tarefa2))
/*
var nomeCliente = new String("Fábio");
var renda = new Number(1000);
var dataNascimento = new Date("2000-03-01");
var ativo = new Boolean(true);

console.log(nomeCliente);
console.log(typeof(nomeCliente));

console.log(renda);
console.log(typeof(renda));

console.log(dataNascimento);
console.log(typeof(dataNascimento));

console.log(ativo);
console.log(typeof(ativo));

var resultado = ativo == true ? "Verdade" : "falso"
console.log(resultado);

*/
var nomeCliente = new String("Fábio");
var renda = new Number(1000);
var dataNascimento = new Date("2000-03-01");
var ativo = new Boolean(true);

var clienteArray = [['nomeCliente: ', 'roberval'],['renda: ', 2000],['Nascimento: ', new Date("2000-10-10")],['Ativo: ', true]];

function exibeDados(clienteArray){
    for(var array of clienteArray){
        console.log(array[0], array[1])
    }
}

exibeDados(clienteArray);




