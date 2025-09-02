var botaoAdicionar = document.querySelector("#encomenda-btn");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("botao clicado");
    
    
    // pega o formulario
    var form = document.querySelector("#form-add-encomenda");

    // captura nova encomenda
    var novaEncomenda = obtemEncomenda(form);

    // pega a tabela de encomendas
    var tabela = document.querySelector("#tabela-clientes");

    // insere a nova encomenda na tabela
    tabela.appendChild(montaTR(novaEncomenda));

});

// pega os dados do formulario
function obtemEncomenda(formulario){
    var encomenda = {
        nome: formulario.nome.value,
        produto: formulario.produto.value,
        quantidade: formulario.quantidade.value,
        unitario: formulario.unitario.value
    }
    return encomenda;
}

// cria nova linha
function montaTR(dadosNovaEncomenda){
    var linha = document.createElement('tr');
    linha.appendChild(montaTD(dadosNovaEncomenda.nome));
    linha.appendChild(montaTD(dadosNovaEncomenda.produto));
    linha.appendChild(montaTD(dadosNovaEncomenda.quantidade));
    linha.appendChild(montaTD(formataValor(dadosNovaEncomenda.unitario)));
    linha.appendChild(montaTD(calculaTotal(dadosNovaEncomenda.quantidade, dadosNovaEncomenda.unitario)));

    return linha;
}

// cria nova coluna
function montaTD(dadoColuna){
    var coluna = document.createElement('td');

    coluna.textContent = dadoColuna

    return coluna;
}