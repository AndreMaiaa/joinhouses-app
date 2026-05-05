const container = document.getElementById("imoveis");

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function renderizar() {
  container.innerHTML = "";

  imoveis.forEach((imovel, index) => {
    container.innerHTML += `
      <div class="card reveal delay-${(index % 4) + 1}">
        <img src="${imovel.imagem}" alt="${imovel.titulo}">
        
        <div class="card-content">
          <h3>${imovel.titulo}</h3>
          <p>${imovel.descricao}</p>
          <p><strong>${formatarPreco(imovel.preco)}</strong></p>

          <a class="botao saiba" href="#">Saiba mais</a>

          <a class="botao whatsapp" target="_blank"
          href="https://wa.me/5584999999999?text=Tenho interesse no imóvel: ${imovel.titulo}">
          Falar no WhatsApp
          </a>
        </div>
      </div>
    `;
  });

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
  }, {
    threshold: 0.1
  });

  elementos.forEach(el => observer.observe(el));
}

/* LOADER */
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

/* NAVBAR SCROLL */
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

/* PARALLAX SUAVE */
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  let scroll = window.scrollY;
  hero.style.backgroundPositionY = scroll * 0.5 + "px";
});

renderizar();
