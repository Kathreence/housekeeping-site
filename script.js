fetch("data.json")
  .then((r) => r.json())
  .then((data) => {
    const servizi = data.sezioni?.servizi?.elementi ?? [];
    const serviziContainer = document.getElementById("servizi-container");
    if (serviziContainer) {
      serviziContainer.innerHTML = "";
      servizi.forEach((s) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${s.img ?? ""}" alt="${s.titolo ?? ""}">
          <h3>${s.titolo ?? ""}</h3>
          <p>${s.descrizione ?? ""}</p>
        `;
        serviziContainer.appendChild(card);
      });
    }

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