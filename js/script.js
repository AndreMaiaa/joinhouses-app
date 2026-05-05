const grids = document.querySelectorAll('.grid');
const tabs = document.querySelectorAll('.tab-btn');

function formatar(valor){
    return valor.toLocaleString('pt-BR', {
        style:'currency',
        currency:'BRL'
    });
}

function criarCard(imovel){
    const div = document.createElement('div');
    div.className = 'card';

    div.innerHTML = `
        <img src="${imovel.imagem}" alt="${imovel.titulo}">
        <div class="card-content">
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
    document.getElementById(imovel.tipo).appendChild(card);
});

function mostrarCategoria(tipo){
    grids.forEach(grid => grid.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tipo).classList.add('active');
    event.target.classList.add('active');
}

document.getElementById('venda').classList.add('active');
