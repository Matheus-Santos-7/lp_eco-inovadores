const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

//funções para mostrar e remover a classe "mostrar"
function mostrar (){
    imagensPainel[imagemAtual].classList.add("mostrar");
}

function remover (){
    imagensPainel.forEach(imagem =>{
        imagem.classList.remove("mostrar");
    });
}

//função para avançar o painel
function avancarPainel(){
    const totalDeImagens = imagensPainel.length - 1;

    if (imagemAtual === totalDeImagens){
        imagemAtual = -1;
    }

    imagemAtual++;
    remover();
    mostrar();
}

//função para voltar o painel
function voltarPainel(){
    if(imagemAtual === 0) {
        return; 
    }

    imagemAtual--;
    remover();
    mostrar();
}

//Evento de clique para avancar
setaAvancar.addEventListener("click", avancarPainel);

//Eventio de clique para voltar
setaVoltar.addEventListener("click", voltarPainel);

//intervalo para avnçar automaticamente a cada 3 segundos
setInterval(avancarPainel, 5000);

//Inicializar o painel mostrando a primeira imagem
mostrar();