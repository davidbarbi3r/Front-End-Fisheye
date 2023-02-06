class Filter {
  // medias is an array of medias
  constructor(medias) {
    this.medias = medias;

    // create the filter DOM
    this.filter = document.createElement("div");
    this.filter.setAttribute("class", "filter");
    this.filter.innerHTML = `
            <span>Trier par</span>
            
            <ul class="options">
                <li id="popularite">Popularité</li>
                <li id="titre">Titre</li>
                <li id="date">Date</li>
            </ul>   
        `;

    const options = this.filter.querySelector(".options");
    options.addEventListener("click", (e) => {
      const value = e.target;
      // set the value of the li clicked to the first option
      options.prepend(value);
      value.closest('ul').classList.toggle('openFilter');


      const mediasSection = document.querySelector(".medias_section");
      mediasSection.innerHTML = "";

      this.getFilteredMedias(value.id).forEach((photographerMedia, index) => {
        const photographerMediaModel = new Media(
          photographerMedia,
          index,
          this.getFilteredMedias()
        );
        const userPhotosDOM = photographerMediaModel.getMediaDOM();
        mediasSection.appendChild(userPhotosDOM);
      });
    });
  }

  // return the filter DOM
  getFilterDOM() {
    return this.filter;
  }

  // return the medias sorted by the filter
  getFilteredMedias(value) {
    switch (value) {
      case "popularite":
        return this.medias.sort((a, b) => b.likes - a.likes);
      case "titre":
        return this.medias.sort((a, b) => a.title.localeCompare(b.title));
      case "date":
        return this.medias.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });

      default:
        return this.medias.sort((a, b) => b.likes - a.likes);
    }
  }
}
