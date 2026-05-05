const imoveis = [
  {
    nome: "Flat em Ponta Negra",
    tipo: "Temporada",
    preco: "R$ 250 / diária",
    img: "https://via.placeholder.com/400x300"
  },
  {
    nome: "Apartamento 2 quartos",
    tipo: "Aluguel",
    preco: "R$ 1.200 / mês",
    img: "https://via.placeholder.com/400x300"
  }
];

const container = document.querySelector(".grid");

imoveis.forEach(imovel => {
  container.innerHTML += `
    <div class="card">
      <img src="${imovel.img}">
      <div class="card-content">
        <div class="tag">${imovel.tipo}</div>
        <h3>${imovel.nome}</h3>
        <div class="price">${imovel.preco}</div>
        <a class="btn" href="https://wa.me/5584898775048">Falar</a>
      </div>
    </div>
  `;
});
.menu a {
  color: #ccc !important;
  text-decoration: none !important;
}

.menu a:hover {
  color: #fff !important;
}
