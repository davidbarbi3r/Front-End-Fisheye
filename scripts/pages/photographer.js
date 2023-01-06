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
        photographerName: photographer[0].name.split(" ")[0],
      }))
  );

  console.log(photographerMedias)

  return {
    photographer: photographer[0],
    medias: [...photographerMedias],
  };
}

async function displayData(photographerMedias) {
  console.log(photographerMedias);
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
