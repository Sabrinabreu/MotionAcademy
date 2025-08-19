// document.querySelector(".total").textContent = document.querySelector(".qtd").textContent * document.querySelector(".unitario").textContent

// captura as encomendas da tabela 
var clientes = document.querySelectorAll(".cliente");

// passa por todas as encomendas e calcula o total 
for (var count = 0; count < clientes.length; count++) {

    clientes[count].querySelector(".total").textContent = clientes[count].querySelector(".qtd").textContent * clientes[count].querySelector(".unitario").textContent 
}