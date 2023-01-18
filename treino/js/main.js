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





//objeto em 


