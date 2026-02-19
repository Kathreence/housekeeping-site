fetch("data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const container = document.getElementById("servizi-container");

    data.servizi.forEach(servizio => {

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${servizio.titolo}</h3>
        <p>${servizio.descrizione}</p>
      `;

      container.appendChild(card);

    });

  });
