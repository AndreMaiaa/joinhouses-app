function formatar(valor){
    return valor.toLocaleString('pt-BR',{
        style:'currency',
        currency:'BRL'
    });
}

function formatarTipo(tipo){
  if(tipo === "venda") return "Venda";
  if(tipo === "aluguel") return "Aluguel";
  if(tipo === "temporada") return "Temporada";
}

function criarCard(imovel){
    return `
        <div class="property-card">
            <img loading="lazy" src="${imovel.imagem}" alt="${imovel.titulo}">

            <div class="property-info">
                <span class="badge">${formatarTipo(imovel.tipo)}</span>

                <h3>${imovel.titulo}</h3>
                <p>${imovel.bairro} - ${imovel.cidade}</p>
                <p>${imovel.quartos} quartos • ${imovel.area}m²</p>
                <strong>${formatar(imovel.preco)}</strong>

                <a href="imovel.html?id=${imovel.id}" class="botao">
                    Ver detalhes
                </a>
            </div>
        </div>
    `;
}

imoveis.forEach(imovel => {
    const container = document.getElementById(imovel.tipo);

    if(container){
        container.insertAdjacentHTML('beforeend', criarCard(imovel));
    }
});
