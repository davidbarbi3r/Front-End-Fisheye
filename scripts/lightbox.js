class Lightbox {
  constructor(medias, index) {
    this.medias = medias;
    this.index = index;
  }

  openLightbox() {
    this.currentMedia = this.medias[this.index];
    const lightbox = document.createElement("div");
    console.log(lightbox)
    lightbox.setAttribute("class", "lightbox--open");
    document.body.appendChild(lightbox);
    lightbox.innerHTML = `
        <div class="lightbox_container">
          <button class="lightbox_close">X</button>
          <div class="lightbox_media">
          ${
            this.currentMedia.video
              ? `<video src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.video}" alt="${this.currentMedia.title}"></video>`
              : `<img src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.image}" alt="${this.currentMedia.title}">`
          }
          </div>
          <div class="lightbox_controls">
            <button class="lightbox_previous"><i class="fas fa-chevron-left"></i></button>
            <button class="lightbox_next"><i class="fas fa-chevron-right"></i></button>
          </div>
          <h2 class="lightbox_title">${this.currentMedia.title}</h2>
        </div>`;
        console.log(lightbox)
    const lightboxClose = document.querySelector(".lightbox_close");
    lightbox.appendChild(lightboxClose);
    lightboxClose.addEventListener("click", () => {
      console.log("close")
      this.closeLightbox();
    });

    const lightboxNext = document.querySelector(".lightbox_next");
    lightbox.appendChild(lightboxNext);
    lightboxNext.addEventListener("click", () => {
      console.log("next")
      this.nextImage();
    })

    const lightboxPrevious = document.querySelector(".lightbox_previous");
    lightbox.appendChild(lightboxPrevious);
    lightboxPrevious.addEventListener("click", () => {
      console.log("previous")
      this.previousImage();
    })
  }

  //close the lightbox get the dom element and set the innerHTML to empty
  closeLightbox() {
      const lightbox = document.querySelector(".lightbox--open");
      lightbox.innerHTML = "";
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
    ${
      this.currentMedia.video
        ? `<video src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.video}" alt="${this.currentMedia.title}"></video>`
        : `<img src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.image}" alt="${this.currentMedia.title}">`
    }`;
    const title = document.querySelector(".lightbox_title");
    title.innerHTML = `${this.currentMedia.title}`;
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
    ${
      this.currentMedia.video
        ? `<video src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.video}" alt="${this.currentMedia.title}"></video>`
        : `<img src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.image}" alt="${this.currentMedia.title}">`
    }`;
    const title = document.querySelector(".lightbox_title");
    title.innerHTML = `${this.currentMedia.title}`;
  }
}
