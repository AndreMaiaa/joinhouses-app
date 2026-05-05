const venda = document.getElementById("venda");
const aluguel = document.getElementById("aluguel");

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
    <img src="${imovel.imagem}">
    <div class="card-content">
      <h3>${imovel.titulo}</h3>
      <p>${imovel.descricao}</p>
      <p><strong>${formatar(imovel.preco)}</strong></p>
      <a class="botao" href="#">Saiba mais</a>
    </div>
  `;

  return div;
}

imoveis.forEach(imovel => {
  const card = criarCard(imovel);

  if (imovel.tipo === "venda") {
    venda.appendChild(card);
  } else {
    aluguel.appendChild(card);
  }
});
