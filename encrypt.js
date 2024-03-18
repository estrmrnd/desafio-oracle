var textApresentacao = document.querySelector("#textarea");
var output = document.querySelector("#output");


function criptografar(){
    var texto = textApresentacao.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g,"ufat");

document.getElementById('output').innerHTML = '<textarea readonly id="textarea">' + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){
    var texto = textApresentacao.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="textarea">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar(){
    let texto = textarea.value;
    navigator.clipboard.writeText(texto);  
    alert("Copiado para a área de transferência.");
 }