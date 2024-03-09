const textArea = document.querySelector("#textarea");
const mensagem = document.querySelector(".mensagem");
const imgLupa = document.querySelector(".boneco");
const exibicaoText = document.querySelector("#retangulo");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function esconderMensagemDeNaoEncontrado() {
    boneco.style.display = 'none'
    exibicaoText.style.display = 'none'
}

function mostrarMensagemDeNaoEncontrado() {
    boneco.style.display = 'block'
    exibicaoText.style.display = 'block'
}

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

    console.log("botão")
}

function btnDesencriptar() {
    const textoDencriptado = desencriptar(textArea.value);
    mensagem.value = textoDencriptado;
    textArea.value = "";
}

function copiarTexto() {
    let texto = document.querySelector(".mensagem");
    mensagem.select();
    document.execCommand("copy");
    mensagem.value = "";
    mostrarMensagemDeNaoEncontrado();
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" ,"ines"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat" ]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    esconderMensagemDeNaoEncontrado();
    
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" ,"ines"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat" ]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    esconderMensagemDeNaoEncontrado();

    // return stringDesencriptada;
