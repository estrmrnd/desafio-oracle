var textApresentacao = document.querySelector("#textarea");
var output = document.querySelector("#output");



function criptografar(){
    var texto = textApresentacao.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g,"ufat");

    document.getElementById('retangulo').innerHTML = '<textarea readonly id="textarea2">' + resultCripto + '</textarea><button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}



function descriptografar(){
    var texto = textApresentacao.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('retangulo').innerHTML = '<textarea readonly id="textarea2">' + resultDescripto + '</textarea><button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button></textarea>' 
}

 function copiar() {
    let texto = document.getElementById('textarea2').value;
    navigator.clipboard.writeText(texto);  
    alert("Copiado para a área de transferência.");
}