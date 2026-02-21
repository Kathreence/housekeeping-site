fetch("data.json")
  .then((r) => r.json())
  .then((data) => {

    /* ============================
       SERVIZI
    ============================ */
    const servizi = data.sezioni?.servizi?.elementi ?? [];
    const serviziContainer = document.getElementById("servizi-container");

    if (serviziContainer) {
      serviziContainer.innerHTML = "";

      servizi.forEach((s) => {
        const card = document.createElement("div");
        card.className = "card hover-trigger";
        card.dataset.id = s.id; // 👈 aggiungiamo id collegato al JSON

        card.innerHTML = `
          <img src="${s.img ?? ""}" alt="${s.titolo ?? ""}">
          <h3>${s.titolo ?? ""}</h3>

        `;

        serviziContainer.appendChild(card);
      });

      // Attiviamo hover dopo aver creato le card
      attivaHover(servizi);
    }


    /* ============================
       PERCHÉ SCEGLIERCI
    ============================ */
    const perche = data.sezioni?.percheSceglierci?.elementi ?? [];
    const percheContainer = document.getElementById("percheSceglierci-container");

    if (percheContainer) {
      percheContainer.innerHTML = "";

      perche.forEach((p) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <img src="${p.img ?? ""}" alt="${p.titolo ?? ""}">
          <h3>${p.titolo ?? ""}</h3>
          <p>${p.descrizione ?? ""}</p>
        `;

        percheContainer.appendChild(card);
      });
    }

  })
  .catch((err) => {
    console.error("Errore caricamento data.json:", err);
  });


/* ============================
   FUNZIONE HOVER
============================ */
function attivaHover(arrayServizi) {
  const cards = document.querySelectorAll(".hover-trigger");

  cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
      card.classList.add("active");

      const id = Number(card.dataset.id);
      mostraImmagine(id, arrayServizi);
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("active");
    });

  });
}


/* ============================
   MOSTRA IMMAGINE NEL BOX FISSO
============================ */
function mostraImmagine(idCercato, arrayServizio) {

  const servizio = arrayServizio.find(item => Number(item.id) === idCercato);
  const contenitore = document.getElementById("contenitore-img-fisso");

  if (!contenitore) return;

  contenitore.innerHTML = "";

  if (servizio) {
    const img = document.createElement("img");
    img.src = servizio.img1 ?? servizio.img;
    img.alt = servizio.titolo;
    img.style.width = "120px";

    contenitore.appendChild(img);
  } else {
    contenitore.innerHTML = "<p>Servizio non trovato</p>";
  }
}

const cards = document.querySelectorAll(".card");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-modal");

const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

cards.forEach(card => {
  card.addEventListener("click", () => {

    // Prendiamo contenuto dalla card cliccata
    const titolo = card.querySelector("h3")?.textContent;
    const descrizione = card.querySelector("p")?.textContent;

    modalTitle.textContent = titolo;
    modalDescription.textContent = descrizione;

    overlay.classList.remove("hidden");
  });
});

// Chiudi con X
closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

// Chiudi cliccando fuori
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.add("hidden");
  }
});