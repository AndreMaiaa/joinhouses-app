function formatar(valor){
    return valor.toLocaleString('pt-BR', {
        style:'currency',
        currency:'BRL'
    });
}

function criarCard(imovel){
    const div = document.createElement('div');
    div.className = 'property-card';

    div.innerHTML = `
        <img src="${imovel.imagem}" alt="${imovel.titulo}">

        <div class="property-info">
            <h3>${imovel.titulo}</h3>
            <p>${imovel.bairro} - ${imovel.cidade}</p>
            <p>${imovel.quartos} quartos • ${imovel.area}m²</p>
            <strong>${formatar(imovel.preco)}</strong>

            <a href="imovel.html?id=${imovel.id}" class="botao">
                Ver detalhes
            </a>
        </div>
    `;

    return div;
}

imoveis.forEach(imovel => {
    const card = criarCard(imovel);

    if(imovel.tipo === 'venda'){
        document.getElementById('venda').appendChild(card);
    }

    if(imovel.tipo === 'aluguel'){
        document.getElementById('aluguel').appendChild(card);
    }

    if(imovel.tipo === 'temporada'){
        document.getElementById('temporada').appendChild(card);
    }
});
