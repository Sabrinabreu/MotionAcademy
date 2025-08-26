var botaoAdicionar = document.querySelector("#encomenda-btn");

botaoAdicionar.addEventListener("click", function(event){
    console.log("botao clicado");
    adicionar();

});

function adicionar() {

    var linha = document.createElement("tr");
    var coluna = document.createElement("td");

    linha.appendChild(coluna);
};