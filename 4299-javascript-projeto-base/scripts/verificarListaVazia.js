const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(ListaDeCompras) {
    const ItensDaLista = ListaDeCompras.querySelectorAll("li");
    if (ItensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block"
    } else {
        mensagemListaVazia.style.display = "none"
    }
}

export default verificarListaVazia;




