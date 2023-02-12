class Lightbox {
  constructor(medias, index) {
    this.medias = medias;
    this.index = index;
  }

  openLightbox() {
    this.currentMedia = this.medias[this.index];
    const lightbox = document.querySelector(".lightbox_container");
    lightbox.setAttribute("aria-label", "image closeup view");
    document.body.appendChild(lightbox);
    lightbox.innerHTML = `
      <div class="lightbox_media" id="lightbox">
        <button class="lightbox_close" aria-label="Fermer la lightbox">
          <i class="fas fa-times"></i>
        </button>
        <div class="buttons">
          <button class="lightbox_previous" aria-label="Previous image">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="lightbox_next" aria-label="Next image">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        <div class="media-container">
        ${
          this.currentMedia.video
            ? `<video src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.video}" alt="${this.currentMedia.title}" controls preload="metadata"></video>`
            : `<img src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.image}" alt="${this.currentMedia.title}">`
        }
        </div>
        <div class="lightbox_info">
          <h2 class="lightbox_title">${this.currentMedia.title}</h2>
        </div>
      </div>
      `



    // Next image behavior
    const lightboxNext = document.querySelector(".lightbox_next");
    lightboxNext.addEventListener("click", () => {
      this.nextImage();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key == "ArrowRight") {
        this.nextImage();
      }
    });

    // Previous image behavior
    const lightboxPrevious = document.querySelector(".lightbox_previous");
    lightboxPrevious.addEventListener("click", () => {
      this.previousImage();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key == "ArrowLeft") {
        this.previousImage();
      }
    });

    lightbox.classList.add("open");
    document.getElementById("lightbox").focus();

    // Close the lightbox behavior
    const lightboxClose = document.querySelector(".lightbox_close");
    lightboxClose.addEventListener("click", () => {
      this.closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        this.closeLightbox();
      }
    });
  }

  // Increment the index of the current media, update the current media, grab the dom element and set the innerHTML to the current media
  // If the index is the last media of the array, set the index to 0
  nextImage() {
    if (this.index < this.medias.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.currentMedia = this.medias[this.index];

    this.updateLightbox(this.currentMedia);
  }

  //Decrement the index of the current media, update the current media, grab the dom element and set the innerHTML to the current media
  // If the index is 0, set the index to the last media of the array
  previousImage() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.medias.length - 1;
    }
    this.currentMedia = this.medias[this.index];

    this.updateLightbox(this.currentMedia);
  }

  //grab the dom element and set the innerHTML to the current media
  updateLightbox(currentMedia) {
    this.currentMedia = currentMedia;
    const media = document.querySelector(".media-container");
    media.innerHTML = `
      ${
      this.currentMedia.video
        ? `<video src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.video}" alt="${this.currentMedia.title}" controls preload="metadata"></video>`
        : `<img src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.image}" alt="${this.currentMedia.title}">`
      }`;
    const title = document.querySelector(".lightbox_title");
    title.innerHTML = `${this.currentMedia.title}`;
  }

    //close the lightbox get the dom element and set the innerHTML to empty
  closeLightbox() {
    const lightbox = document.querySelector(".lightbox_container");
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.innerHTML = "";
    lightbox.classList.remove("open");
  }
}
