var clientes = document.querySelectorAll(".cliente");

// Passa por todas as encomendas e calcula o valor total
for (var count = 0; count < clientes.length; count++) {

    // Quantidade e valor unitario da encomenda
    var tab_qtd = parseInt(clientes[count].querySelector(".qtd").textContent);
    var tab_unitario = parseFloat(clientes[count].querySelector(".unitario").textContent);

    // Verifica se a quantidade é válida
    if (isNaN(tab_qtd) || tab_qtd < 1) {
        clientes[count].querySelector(".qtd").textContent = "Quantidade inválida";
        let tds = clientes[count].querySelectorAll("td");

        // vai olhar cada linha e, se n for valido, fica vermelho
        tds.forEach(function(td) {
            td.style.background = "red";
            td.style.color = "white";
        });
    } 
    // Verifica se o valor unitário é válido
    else if (isNaN(tab_unitario) || tab_unitario <= 0) {
        clientes[count].querySelector(".unitario").textContent = "R$ Unitário inválido!";
        let tds = clientes[count].querySelectorAll("td");

        // vai olhar cada linha e, se n for valido, fica vermelho
        tds.forEach(function(td) {
            td.style.background = "red";
            td.style.color = "white";
        });
    } 
    // Se ambos forem válidos, calcula o total
    else {
        clientes[count].querySelector(".total").textContent = calculaTotal(tab_qtd, tab_unitario);
    }
}

function calculaTotal(qtd, unit) {
    var total = qtd * unit;
    return formataValor(total);
}

function formataValor(valor) {
    var valor_formatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valor_formatado;
}