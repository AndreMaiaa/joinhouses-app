// Formata preço para Real (R$)
function formatar(valor){
    return valor.toLocaleString('pt-BR',{
        style:'currency',
        currency:'BRL'
    });
}

// Retorna /mês ou /dia
function formatarPeriodo(imovel){
    if(!imovel.periodo) return "";
    return imovel.periodo === "mensal" ? "/mês" : "/dia";
}

// Cria o card do imóvel
function criarCard(imovel){
    return `
        <div class="property-card">
            <img loading="lazy" src="${imovel.imagem}" alt="${imovel.titulo}">

            <div class="property-info">
                <span class="badge">
                  ${imovel.tipo.charAt(0).toUpperCase() + imovel.tipo.slice(1)}
                </span>

                <h3>${imovel.titulo}</h3>

                <p>${imovel.bairro} - ${imovel.cidade}</p>
                <p>${imovel.quartos} quartos • ${imovel.area}m²</p>

                <strong>
                  ${formatar(imovel.preco)} ${formatarPeriodo(imovel)}
                </strong>

                <a href="imovel.html?id=${imovel.id}" class="botao">
                    Ver detalhes
                </a>
            </div>
        </div>
    `;
}

// Insere os imóveis nas colunas corretas
imoveis.forEach(imovel => {
    const container = document.getElementById(imovel.tipo);

    if(container){
        container.insertAdjacentHTML('beforeend', criarCard(imovel));
    }
});
