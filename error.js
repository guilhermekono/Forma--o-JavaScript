console.log("linha 1")

// throw ne Error("Eita bicho");

console.log("linha 3")

try {
    console.log(soma(10, new Array(10)));
} catch (error){
    console.log(error);

} finally{
    console.log("sempre será executado");
}

function soma(a, b){
    //return a + b;
    return a / b;
}