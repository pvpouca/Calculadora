function mostrar(valor){
    document.getElementById("resultado").innerText +=valor;
    console.log(valor);
}

function calcular(){
    let x=document.getElementById("resultado").textContent;
    let y=eval(x);
    console.log(y);
    document.getElementById("resultado").innerHTML=y;
}

function limpa(){
    console.log("limpa");
    document.getElementById("resultado").textContent="";
}

function apagaCaracter(){
    let x = document.getElementById("resultado").innerText;
    console.log(x);
    let alterado = x.slice(0, -1);
    document.getElementById("resultado").innerHTML = alterado;
}