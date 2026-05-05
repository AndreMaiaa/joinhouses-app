const venda = document.getElementById("venda");
const aluguel = document.getElementById("aluguel");
const temporada = document.getElementById("temporada");

function formatar(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function criarCard(imovel) {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
        <img src="${imovel.imagem}" alt="${imovel.titulo}">
        <div class="card-content">
            <h3>${imovel.titulo}</h3>
            <p>${imovel.descricao}</p>
            <strong>${formatar(imovel.preco)}</strong>
            <a href="https://wa.me/5584987755048" class="botao">
                Falar no WhatsApp
            </a>
        </div>
    `;

    return div;
}

imoveis.forEach(imovel => {
    const card = criarCard(imovel);

    if (imovel.tipo === "venda") {
        venda.appendChild(card);
    }

    if (imovel.tipo === "aluguel") {
        aluguel.appendChild(card);
    }

    if (imovel.tipo === "temporada") {
        temporada.appendChild(card);
    }
});
