function formatar(valor){
    return valor.toLocaleString('pt-BR', {
        style:'currency',
        currency:'BRL'
    });
}

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

const imovel = imoveis.find(item => item.id === id);

if(imovel){
    document.getElementById('titulo').textContent = imovel.titulo;
    document.getElementById('preco').textContent = formatar(imovel.preco);
    document.getElementById('bairro').textContent = imovel.bairro;
    document.getElementById('cidade').textContent = imovel.cidade;
    document.getElementById('quartos').textContent = imovel.quartos;
    document.getElementById('banheiros').textContent = imovel.banheiros;
    document.getElementById('vagas').textContent = imovel.vagas;
    document.getElementById('area').textContent = imovel.area;
    document.getElementById('descricao').textContent = imovel.descricao;
    document.getElementById('imagem').src = imovel.imagem;
}
