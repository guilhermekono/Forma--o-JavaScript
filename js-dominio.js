console.log("carregando js via arquivo externo mesmo domínio")

var nome = "Guilherme";
var sobrenome = "konopatzki";

function mostraNome(){
    console.log("meu nome é:" + nome + " " + sobrenome);
}

mostraNome();

function eventoClick(){
    alert("Voce clicou em algo né safado");
}

function sejaBemVindo(){
    console.log("seja bem vindo seul");
}

console.log("chamando a função");
sejaBemVindo();

var objProfessor = {
    nome: "prof Tá Maluco",
    curso: "Javascript",
    mistrarAula: function(){
        console.log("ministrando uma aula com o professor Tá Maluco")
    }
}

console.log("objeto professor")
console.log(objProfessor)


console.log("acessando propriedades do objeto")
objProfessor.nome
objProfessor.curso

console.log(" chamando o método do professor")

objProfessor.mistrarAula();