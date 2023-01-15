//Mettre le code JavaScript lié à la page photographer.html
async function getMedias() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  console.log(id);
  function getData() {
    return fetch("data/photographers.json")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }

  let photographer = await getData().then((photographer) =>
    photographer.photographers
        .filter((photographer) => photographer.id == id)
  );

  let photographerMedias = await getData().then((media) =>
    media.media
      .filter((media) => media.photographerId == id)
      .map((media) => ({
        ...media,
        //to sanitize the name of the photographer to get the right asset path
        photographerName: photographer[0].name.split(" ")[0].split("-")[0],
      }))
  );

  console.log(photographerMedias)

  return {
    photographer: photographer[0],
    medias: [...photographerMedias],
  };
}

async function displayData(photographerMedias) {
  const userInfo = document.querySelector(".photograph-header");
  
  userInfo.innerHTML = `
    <div class="photograph-header__text">
        <h1 class="photograph-header__title">${photographerMedias.photographer.name}</h1>
        <p class="photograph-header__location">${photographerMedias.photographer.city}, ${photographerMedias.photographer.country}</p>
        <p class="photograph-header__tagline">${photographerMedias.photographer.tagline}</p>
    </div>
    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    <img class="photograph-header__image" src="assets/photographers/${photographerMedias.photographer.portrait}" alt="portrait de ${photographerMedias.photographer.name}">
    `;

  const filter = document.createElement("div");
  filter.setAttribute("class", "filter");
  filter.innerHTML = `
    <form class="filter__form">
        <label for="filter__form__select">Trier par</label>
        <select name="filter__form__select" id="filter__form__select">
            <option value="popularite">Popularité</option>
            <option value="date">Date</option>
            <option value="titre">Titre</option>
        </select>
    </form>
    `;

  userInfo.parentElement.append(filter);

  const mediasSection = document.querySelector(".medias_section");
  photographerMedias.medias.forEach((photographerMedia) => {
    const photographerMediaModel = userPhotosFactory(photographerMedia);
    const userPhotosDOM = photographerMediaModel.getUserPhotosDOM();
    mediasSection.appendChild(userPhotosDOM);
  });
}

async function init() {
  const photographerMedias = await getMedias();
  console.log(photographerMedias);
  displayData(photographerMedias);
}

init();
