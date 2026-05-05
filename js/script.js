const grids = document.querySelectorAll('.grid');
const tabs = document.querySelectorAll('.tab-btn');

function formatar(valor){
    return valor.toLocaleString('pt-BR',{
        style:'currency',
        currency:'BRL'
    });
}

function criarCard(imovel){
    const div = document.createElement('div');

    div.className = 'card';

    div.innerHTML = `
        <img src="${imovel.imagem}">
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

imoveis.forEach(imovel=>{
    const card = criarCard(imovel);

    document.getElementById(imovel.tipo).appendChild(card);
});

function mostrarCategoria(tipo){
    grids.forEach(grid=>{
        grid.classList.remove('active');
    });

    tabs.forEach(tab=>{
        tab.classList.remove('active');
    });

    document.getElementById(tipo).classList.add('active');

    event.target.classList.add('active');
}

document.getElementById('venda').classList.add('active');
