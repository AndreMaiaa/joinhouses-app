const container = document.getElementById("imoveis");
const WHATSAPP = "5584987755048";

/* FORMATA PREÇO */
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

/* CRIA CARD */
function criarCard(imovel, index) {
  const div = document.createElement("div");
  div.className = `card reveal delay-${(index % 4) + 1}`;

  div.innerHTML = `
    <img src="${imovel.imagem}" alt="${imovel.titulo}">
    
    <div class="card-content">
      <h3>${imovel.titulo}</h3>
      <p>${imovel.descricao}</p>
      <p>📍 ${imovel.bairro} - ${imovel.cidade}</p>
      <p>🛏 ${imovel.quartos} | 🚿 ${imovel.banheiros} | 🚗 ${imovel.vagas} | 📐 ${imovel.area}m²</p>
      
      <p><strong>${formatarPreco(imovel.preco)}</strong></p>

      <a class="botao saiba" href="#">Saiba mais</a>
      
    </div>
  `;

  return div;
}

/* RENDERIZAÇÃO */
function renderizar() {
  if (!container) return;

  container.innerHTML = "";

  if (!imoveis || imoveis.length === 0) {
    container.innerHTML = "<p>Nenhum imóvel disponível no momento.</p>";
    return;
  }

  const fragment = document.createDocumentFragment();

  imoveis.forEach((imovel, index) => {
    fragment.appendChild(criarCard(imovel, index));
  });

  container.appendChild(fragment);

  ativarAnimacao();
}

/* ANIMAÇÃO AO ROLAR */
function ativarAnimacao() {
  const elementos = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  elementos.forEach(el => observer.observe(el));
}

/* LOADER */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

/* NAVBAR SCROLL */
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

/* PARALLAX SUAVE */
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";
});

/* INICIAR */
renderizar();
