//Mettre le code JavaScript lié à la page photographer.html
async function getMedias() {
  // get the photographer id from the url
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  // fetch the data from the json file
  function getData() {
    return fetch("data/photographers.json")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }

  // filter the data to get the photographer data with the right id
  let photographer = await getData().then((photographer) =>
    photographer.photographers
        .filter((photographer) => photographer.id == id)
  );

  // filter the data to get the medias from the right photographer
  let photographerMedias = await getData().then((media) =>
    media.media
      .filter((media) => media.photographerId == id)
      .map((media) => ({
        ...media,
        //to sanitize the name of the photographer to get the right asset path
        photographerName: photographer[0].name.split(" ")[0].split("-")[0],
        //to add a property to the media object to know if the media is liked or not
        // to be able to increment the total likes of the media just one time
        isLiked: false,
      }))
  );

  // return the photographer and the medias
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

  const filter = new Filter(photographerMedias.medias);

  userInfo.parentElement.append(filter.getFilterDOM());

  const mediasSection = document.querySelector(".medias_section");

  const photographerTab = new PhotographerTab(photographerMedias.photographer);

  // iterate through the medias array, grab the index and media and instanciate Media class for each


  photographerMedias.medias.forEach((photographerMedia, index) => {
      const photographerMediaModel = new Media(photographerMedia, index, photographerMedias.medias);
      const userPhotosDOM = photographerMediaModel.getMediaDOM();
      mediasSection.appendChild(userPhotosDOM);
  });
}

async function init() {
  const photographerMedias = await getMedias();
  console.log(photographerMedias);
  displayData(photographerMedias);
}

init()

// have to instantiate lightbox class & photographer tab class
// fix the filter styling
// style the lightbox and the photographer tab
// add the contact form according to the maquette
