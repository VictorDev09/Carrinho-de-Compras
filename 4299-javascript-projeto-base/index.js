import { criarItemDaLista } from "./scripts/criaritemDaLista.js"
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const ListaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();
    const itemDaLista = criarItemDaLista();
    ListaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(ListaDeCompras);
})

verificarListaVazia(ListaDeCompras);
