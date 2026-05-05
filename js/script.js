const container = document.getElementById("imoveis");

function renderizar(lista) {
  container.innerHTML = "";

  lista.forEach(imovel => {
    container.innerHTML += `
      <div class="card">
        <img src="${imovel.imagem}" alt="${imovel.titulo}">
        <div class="card-content">
          <h3>${imovel.titulo}</h3>
          <p>${imovel.descricao}</p>
          <p><strong>R$ ${imovel.preco}</strong></p>
          <a class="botao" target="_blank"
            href="https://wa.me/5584999999999?text=Tenho interesse no imóvel: ${imovel.titulo}">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    `;
  });
}

function filtrar(tipo) {
  if (tipo === "todos") {
    renderizar(imoveis);
  } else {
    const filtrados = imoveis.filter(i => i.tipo === tipo);
    renderizar(filtrados);
  }
}

renderizar(imoveis);
