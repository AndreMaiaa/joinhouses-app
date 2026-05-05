const container = document.getElementById("imoveis");

function renderizar() {
  container.innerHTML = "";

  imoveis.forEach(imovel => {
    container.innerHTML += `
      <div class="card">
        <img src="${imovel.imagem}">
        <div class="card-content">
          <h3>${imovel.titulo}</h3>
          <p>${imovel.descricao}</p>
          <p><strong>R$ ${imovel.preco}</strong></p>

          <a class="botao saiba" href="#">Saiba mais</a>

          <a class="botao whatsapp" target="_blank"
          href="https://wa.me/5584999999999?text=Tenho interesse no imóvel ${imovel.titulo}">
          Falar no WhatsApp
          </a>
        </div>
      </div>
    `;
  });
}

renderizar();
