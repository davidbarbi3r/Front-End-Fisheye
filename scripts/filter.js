class Filter {
  // medias is an array of medias
  constructor(medias) {
    this.medias = medias;

    // create the filter DOM
    this.filter = document.createElement("div");
    this.filter.setAttribute("class", "filter");
    this.filter.innerHTML = `
            <span>Trier par</span>
            
            <div class="options" role="button" aria-haspopup="listbox" aria-expanded>
                <div class="selected" role="listbox" aria-label="Sélectionnez une option">
                  <span class="current_value" aria-hidden="true"></span>  
                  <img src="assets/icons/dropdown-arrow.svg" alt="dropdown arrow" id="drop-arrow">
                </div>
                <ul class="dropdown" role="listbox" aria-activedescendant="popularite">
                    <li class="dropdown_item" role="option" id="popularite">Popularite</li>
                    <li class="dropdown_item" role="option" id="titre">Titre</li>
                    <li class="dropdown_item" role="option" id="date">Date</li>
                </ul>
            </div> 
        `;

    const dropdownItem = this.filter.querySelectorAll(".dropdown_item");
    const options = this.filter.querySelector(".options");
    const selected = this.filter.querySelector(".selected");
    const currentValue = this.filter.querySelector(".current_value");
    const dropdown = this.filter.querySelector(".dropdown");
    const mediasSection = document.querySelector(".medias_section");

    selected.addEventListener("click", () => {
      dropdown.classList.toggle("show");
      selected.classList.toggle("active");
      options.classList.toggle("active");
    });

    currentValue.textContent = dropdownItem[0].id.slice(0, 1).toUpperCase() + dropdownItem[0].id.slice(1);
    currentValue.setAttribute("tabindex", "0")

    dropdownItem.forEach((item) => {
      if (item.getAttribute("id") === currentValue.textContent.toLowerCase()) {
        item.style.display = "none";
      }

      item.addEventListener("click", (e) => {
        dropdown.classList.toggle("show");
        selected.classList.toggle("active");
        options.classList.toggle("active");

        currentValue.textContent = e.target.id.slice(0, 1).toUpperCase() + e.target.id.slice(1);
        console.log(currentValue.textContent)

        dropdownItem.forEach((item) => {
          if (item.getAttribute("id") === currentValue.textContent.toLowerCase()) {
            item.style.display = "none";
          } else {
            item.style.display = "block";
          }
        });

        mediasSection.innerHTML = "";

        this.showRightMedias(mediasSection, currentValue);
      });
    });
  }

  showRightMedias(mediasSection, currentValue) {
    mediasSection.innerHTML = "";

    this.getFilteredMedias(currentValue.textContent.toLocaleLowerCase()).forEach((photographerMedia, index) => {

      const photographerMediaModel = new Media(
        photographerMedia,
        index,
        this.medias
      );

      const userPhotosDOM = photographerMediaModel.getMediaDOM();
      mediasSection.appendChild(userPhotosDOM);
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
