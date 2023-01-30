class Lightbox {
  constructor(medias, index) {
    this.medias = medias;
    this.index = index;
  }

  openLightbox() {
    this.currentMedia = this.medias[this.index];
    const lightbox = document.querySelector(".lightbox_container");
    document.body.appendChild(lightbox);
    lightbox.innerHTML = `
      <div class="lightbox_media">
        <button class="lightbox_close">
          <i class="fas fa-times"></i>
        </button>
        <div class="buttons">
          <button class="lightbox_previous">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="lightbox_next">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        
        ${
          this.currentMedia.video
            ? `<video src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.video}" alt="${this.currentMedia.title}" controls preload="metadata"></video>`
            : `<img src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.image}" alt="${this.currentMedia.title}">`
        }
        <div class="lightbox_info">
          <h2 class="lightbox_title">${this.currentMedia.title}</h2>
        </div>
      </div>
      `;

    lightbox.classList.add("open");
    const lightboxClose = document.querySelector(".lightbox_close");
    lightboxClose.addEventListener("click", () => {
      this.closeLightbox();
    });

    const lightboxNext = document.querySelector(".lightbox_next");
    lightboxNext.addEventListener("click", () => {
      this.nextImage();
    });

    const lightboxPrevious = document.querySelector(".lightbox_previous");
    lightboxPrevious.addEventListener("click", () => {
      this.previousImage();
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

    const media = document.querySelector(".lightbox_media");
    media.innerHTML = `
      <button class="lightbox_close">
            <i class="fas fa-times"></i>
      </button>
      <div class="buttons">
          <button class="lightbox_previous">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="lightbox_next">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      ${
        this.currentMedia.video
          ? `<video src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.video}" alt="${this.currentMedia.title}" controls preload="metadata"></video>`
          : `<img src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.image}" alt="${this.currentMedia.title}">`
      }
      <div class="lightbox_info">
          <h2 class="lightbox_title">${this.currentMedia.title}</h2>
      </div>
      `;
    const title = document.querySelector(".lightbox_title");
    title.innerHTML = `${this.currentMedia.title}`;

    const lightboxClose = document.querySelector(".lightbox_close");
    lightboxClose.addEventListener("click", () => {
      this.closeLightbox();
    });

    const lightboxNext = document.querySelector(".lightbox_next");
    lightboxNext.addEventListener("click", () => {
      this.nextImage();
    });

    const lightboxPrevious = document.querySelector(".lightbox_previous");
    lightboxPrevious.addEventListener("click", () => {
      this.previousImage();
    });
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

    const media = document.querySelector(".lightbox_media");
    media.innerHTML = `
      <button class="lightbox_close">
      <i class="fas fa-times"></i>
      </button>
      <div class="buttons">
          <button class="lightbox_previous">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="lightbox_next">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      ${
      this.currentMedia.video
        ? `<video src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.video}" alt="${this.currentMedia.title}" controls preload="metadata"></video>`
        : `<img src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.image}" alt="${this.currentMedia.title}">`
      }
      <div class="lightbox_info">
          <h2 class="lightbox_title">${this.currentMedia.title}</h2>
      </div>
      `;
    const title = document.querySelector(".lightbox_title");
    title.innerHTML = `${this.currentMedia.title}`;

    const lightboxClose = document.querySelector(".lightbox_close");
    lightboxClose.addEventListener("click", () => {
      this.closeLightbox();
    });

    const lightboxNext = document.querySelector(".lightbox_next");
    lightboxNext.addEventListener("click", () => {
      this.nextImage();
    });

    const lightboxPrevious = document.querySelector(".lightbox_previous");
    lightboxPrevious.addEventListener("click", () => {
      this.previousImage();
    });
  }

    //close the lightbox get the dom element and set the innerHTML to empty
  closeLightbox() {
    const lightbox = document.querySelector(".lightbox_container");
    lightbox.innerHTML = "";
    lightbox.classList.remove("open");
  }
}
