// Formata preço para Real (R$)
function formatar(valor){
    return valor.toLocaleString('pt-BR',{
        style:'currency',
        currency:'BRL'
    });
}

// Retorna /mês ou /diária
function formatarPeriodo(imovel){
    if(!imovel.periodo) return "";
    return imovel.periodo === "mensal" ? "/mês" : "/diária";
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

// 🔥 FUNCIONA PARA INDEX E IMOVEIS.HTML
imoveis.forEach(imovel => {

    // Página de listagem geral
    const lista = document.getElementById("lista-imoveis");
    if(lista){
        lista.insertAdjacentHTML('beforeend', criarCard(imovel));
        return;
    }

    // Página index (separado por tipo)
    const container = document.getElementById(imovel.tipo);
    if(container){
        container.insertAdjacentHTML('beforeend', criarCard(imovel));
    }

});

// FILTRO DE IMÓVEIS
const botoes = document.querySelectorAll(".filtro-btn");
const lista = document.getElementById("lista-imoveis");

if(lista && botoes.length){

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {

      // remove ativo
      botoes.forEach(b => b.classList.remove("ativo"));
      botao.classList.add("ativo");

      const tipo = botao.getAttribute("data-tipo");

      lista.innerHTML = "";

      imoveis.forEach(imovel => {

        if(tipo === "todos" || imovel.tipo === tipo){
          lista.insertAdjacentHTML('beforeend', criarCard(imovel));
        }

      });

    });
  });

}
