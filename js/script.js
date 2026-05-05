const vendaContainer = document.getElementById("venda");
const aluguelContainer = document.getElementById("aluguel");

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function criarCard(imovel) {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <img src="${imovel.imagem}">
    <div class="card-content">
      <h3>${imovel.titulo}</h3>
      <p>${imovel.descricao}</p>
      <p><strong>${formatarPreco(imovel.preco)}</strong></p>
      <a class="botao saiba" href="#">Saiba mais</a>
    </div>
  `;

  return div;
}

function renderizar() {
  vendaContainer.innerHTML = "";
  aluguelContainer.innerHTML = "";

  imoveis.forEach(imovel => {
    const card = criarCard(imovel);

    if (imovel.tipo === "venda") {
      vendaContainer.appendChild(card);
    } else {
      aluguelContainer.appendChild(card);
    }
  });
}

/* LOADER */
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

renderizar();
