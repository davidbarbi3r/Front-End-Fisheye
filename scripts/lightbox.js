class Lightbox {
  constructor(medias) {
    this.medias = medias;
    this.currentMedia = this.medias[0];
  }

    get media() {
        return this.medias.filter(media => media.image ? media.image : media.video);
    }

    get currentMediaIndex() {
        return this.medias.indexOf(this.currentMedia);
    }

    get nextMedia() {
        return this.medias[this.currentMediaIndex + 1];
    }

    get previousMedia() {
        return this.medias[this.currentMediaIndex - 1];
    }

    openLightbox() {
        const lightbox = document.querySelector(".lightbox");
        const lightboxClose = document.querySelector(".lightbox_close");
        lightbox.classList.add("lightbox--open");
        lightbox.style.display = "flex";
        lightbox.innerHTML = `
                <div class="lightbox_container">
                    <div class="lightbox_media">
                        ${
                        this.currentMedia.video
                            ? `<video src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.video}" alt="${this.currentMedia.title}"></video>`
                            : `
                            <img src="assets/photographers/${this.currentMedia.photographerName}/${this.currentMedia.image}" alt="${this.currentMedia.title}">
                        `
                        }
                    </div>
                    <h2 class="lightbox_title">${this.currentMedia.title}</h2>
                </div>
            `;
        lightbox.appendChild(lightboxClose);
        lightboxClose.addEventListener("click", () => {
            this.closeLightbox();
        }
        );
    }

    closeLightbox() {
        const lightbox = document.querySelector(".lightbox--open");
        lightbox.style.display = "none";
        lightbox.innerHTML = "";
        lightbox.classList.remove("lightbox--open");
    }

    nextImage() {
        this.currentMedia = this.nextImage;
        this.openLightbox();
    }

    previousImage() {
        this.currentMedia = this.previousImage;
        this.openLightbox();
    }
}