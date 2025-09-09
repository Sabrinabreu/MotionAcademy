var CampoFiltro = document.querySelector("#filtrar-tabela");

CampoFiltro.addEventListener("input", function(){
    // console.log(this.value);     // pega oq ta escrito no imput de busca
    var clientes = document.querySelectorAll(".cliente");

    // ve se tem informação pra buscar
    if (this.value.length > 0){
        for(var cli=0; cli < clientes.length; cli++){
            var cliente = clientes[cli];
            var nome = cliente.querySelector('.nome').textContent;
            var expressao = new RegExp(this.value, "i");   
            // a busca com expressao regular faz a comparação de lowerCase sozinho
            // e ele faz com q vc n prcise escrever EXTAMENTE oq busca pra achar


            // FAZENDO BUSCA COM SUBTRING
            // var comparavel = nome.substring(0, this.value.length);
            // var comparavelMinu = comparavel.toLowerCase();
            // var filtroBuscaMinu = this.value.toLowerCase();

            // if (filtroBuscaMinu != comparavelMinu) {
            //     // fica invisivel
            //     cliente.classList.add("invisivel");
            // } else {
            //     // fica visivel
            //     cliente.classList.remove("invisivel");
            // }


            // verifica se o nome digitado é igual o da tabela
            if (!expressao.test(nome)) {
                // fica invisivel
                cliente.classList.add("invisivel");
            } else {
                // fica visivel
                cliente.classList.remove("invisivel");
            }
        } 
    } else {
        // se o filtro tiver vazio aparece tudo
        for(var cli=0; cli < clientes.length; cli++) {
            clientes[cli].classList.remove("invisivel");
        }
    }
    
})