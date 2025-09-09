var tabela = document.querySelector("table");

// escuta o double click na linha q vai ser excluida
tabela.addEventListener("dblclick", function(event){
    // console.log(event.target.parentNode);

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){  // add delay na exclusao pra poder ver o efeito!
        event.target.parentNode.remove();
    }, 600);
  
});