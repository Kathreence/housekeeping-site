fetch("data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const servizi = data.sezioni.servizi.elementi;
    console.log(servizi);
    const serviziContainer = document.getElementById("servizi-container");
const lengthS =servizi.l
    servizi.forEach(servizio => {

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
      <div class="card">
        <h3>${servizio.titolo}</h3>
        <img src="${servizio.img}" alt="${servizio.descrizione}">
      </div>
      `;

      serviziContainer.appendChild(card);

    });


    const comeA = data.sezioni.percheSceglierci.elementi;
    console.log(comeA);
    const containerA = document.getElementById("percheSceglierci-container");

    comeA.forEach(servizio => {

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
      <div class="card">
        <h3>${servizio.titolo}</h3>
        <img src="${servizio.img}" alt="${servizio.descrizione}">
      </div>
      `;

      containerA.appendChild(card);

    });


  });
