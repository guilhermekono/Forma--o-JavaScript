// segunda tarefa

/* comentário de varias linhas

*/
/*
var tarefa = "isso é uma string";

console.log(tarefa)
console.log(typeof(tarefa))

var tarefa2 = new String("string criada com construtor");
console.log(tarefa2)
console.log(typeof(tarefa2))

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


var clienteObject = new Object();

clienteObject.nomeCliente = "agnes";
clienteObject.renda = "70";
clienteObject.dataNascimento = new Date("2000-01-01");
clienteObject.ativo = {nome: "agnes2"};

function exibirDadosClienteObjeto(objeto){

    for (const i in objeto) {
        console.log("Chave: ", i);
        console.log("Valor: ", objeto[i])
    }

}

exibirDadosClienteObjeto(clienteObject);




var objetoPessoa = {
    nome: "Luva de pedreiro",
    cpf: 020120121,
    dataNascimento: new Date(1981, 3, 14),
    ativo: true,
    "teste prop": "teste",
    contatos: [12345, 1234, 123432],
    endereco: {rua: "Rua Tal", numero: 1234, cep: 3323},
    saudacao: function(){
        return "Olá, me chamo " + this.nome +"!";
    }
}

console.log(objetoPessoa);

console.log("teste", objetoPessoa["teste prop"]);

for (var contato of objetoPessoa.contatos) {
    console.log("Contato: ", contato);
    
}


for (var key in objetoPessoa.endereco){
    console.log(key, objetoPessoa.endereco[key])
}


var obj1 = {matricula: 2}
var obj2 = obj1;




obj2.matricula = null;

console.log(obj1.matricula)





// ARRAYs
//Literal
var array = []
array[0] = 'teste';

array.push("teste 2")

var nomes = ['paulo', 'joao', 'maria']

console.log("array: ", nomes[2])


//Construtor

var numeros = new Array(1, 2, 3, 4); //assim ele interpreta como sendo itens do array

var numeros2 = new Array(2); //Assim ele interpreta como um array de duas posições, ou seja, quando passa só um item é tamanho do array

//Criando array de tipagem fraca

var arrayTipagemFraca = [
    "string",
    25.90,
    true,
    {livro: 'js', detalhe: 'sinopse'}
]

var a = [1, 2, 3, 4]
var existe = 5 in a; //Retorna true ou false, se existir o index 5 em a ou não

var vetor = [4, 5, 2, 1]
vetor.splice(2, 1) //exclui a posição 2 do vetor


vetor.length = 5; //definir tamanho de array

//congelando a propriedade lenght para apenas leitura

Object.defineProperty(vetor, 'length', {writable: false})



//iterando array

var array = [1, 2, 3, 'a', 'b', 'c', [1, 'a'], null, {nome:'maria'}, true, 2.2, undefined]

for (var index = 0; index < array.length; index++){
    if(array[index] == null || array[index] == undefined) continue // ignora nulls e undefineds
    console.log("Index: " +index, 'valor: ' + array[index])
}

//for in

for (var index in array){
    //for in também itera em propriedades herdadas
    if(!array.hasOwnProperty(index)) continue //caso queira pular propriedades herdadas
    if(isNaN(index) && index >= 0) continue
    console.log('index: ' + index, 'valor: ' + array[index])
}


//for each, adicionado no ECMAscript 5 no Array.prototype

var totalVenda = 0;
var vendaItens = [
    {codigo: 1, preco: 2.2, qtde: 2},
    {codigo: 2, preco: 10, qtde: 5},
    {codigo: 3, preco: 5, qtde: 1}

]

vendaItens.forEach(function(item, index, vendaItens){

    var subTotal = item.qtde * item.preco

    totalVenda += subTotal;

    item.subTotal = subTotal;

})

console.log("total: R$ - ", totalVenda)

// Array de arrays


var arrayMulti = [[1,2,3], ['a', 'b', 'c']]

console.log(arrayMulti[0][1])



//Array.join() para juntar elementos de um array e retornar uma string

var numeros = [1,2,3,4,5,6,7,8,9]

var stringDoVetor = numeros.join();
 



var numeros = [2, 4, 6, 8, 10]

var dobro = numeros.map(function(valorElementoArray, a, b){
    return valorElementoArray * 2;
})

console.log(dobro)



var nomes = ['maria1', 'maria2', 'maria3']
var numeros = [2,4, 6, 7, 8, 10]

var subConjuntoNumeros = numeros.filter(function(valor, indice, array){
    return valor > 5;
});

console.log(subConjuntoNumeros)




////Reduce - reduceRight

var testeReduce = [1,2, 3, 4, 5];

var retornoReduce = testeReduce.reduce(function(acumulador, valorEleArray, indice, array){
    console.log('acumlador: ', acumulador)
    console.log('acumlador: ', valorEleArray)
    console.log('acumlador: ', indice)
    console.log('--------------------------------')
    
})




// Funções

var elevarAoQuadrado = function(numero){
    return numero * numero;
}

console.log('elevarAoQuadrado(8)', elevarAoQuadrado(8))






function somar(a, b){return a + b}

function subtrair(a, b){return a - b}

calculadora.operacoes =[]
calculadora.contador = 0

function calculadora(operacao, operando1, operando2){
    var resultado = 0
    if (operacao == 'somar'){
        resultado = somar(operando1, operando2)
    } else if(operacao == 'subtrair'){
        resultado = subtrair(operando1, operando2)
    } else {
        return 'operacao invalida'
    }

    setarMemoriaCalculadora(operacao, operando1, operando2, resultado)
    return resultado
}

console.log(calculadora('somar', 20, 35))

function setarMemoriaCalculadora(operacao, operando1, operando2, resultado){
    var objCalc = {
        operacao: operacao, operando1: operando1, operando2: operando2
    }
    
    calculadora.operacoes.push(objCalc)
    calculadora.contador++
}

calculadora.exibirOperacoesRealizadas = function(){
    console.log("####>" + calculadora.contador + "operacoes realizadas")

    for(var op of calculadora.operacoes){
        var sinal = op.operacao == 'somar' ? '+' : '-'
        console.log('->>>' + op.operacao + ":")
        console.log('->>>' + op.operando1 + sinal + op.operando2 + '=' + op.resultado)
    }
}

calculadora.exibirOperacoesRealizadas();

*/



 











































































































