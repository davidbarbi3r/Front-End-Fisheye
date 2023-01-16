class Media {
    constructor(media) {
        this.media = media;
    }

    // open the lightbox with the media
    openLightbox() {
        const lightbox = document.querySelector(".lightbox");
        const lightboxClose = document.querySelector(".lightbox_close");
        lightbox.classList.add("lightbox--open");
        lightbox.style.display = "flex";
        lightbox.innerHTML = `
                <div class="lightbox_container">
                    <div class="lightbox_media">
                        ${
                        this.media.video
                            ? `<video src="assets/photographers/${this.media.photographerName}/${this.media.video}" alt="${this.media.title}"></video>`
                            : `
                            <img src="assets/photographers/${this.media.photographerName}/${this.media.image}" alt="${this.media.title}">
                        `
                        }
                    </div>
                    <h2 class="lightbox_title">${this.media.title}</h2>
                </div>
            `;

        lightbox.appendChild(lightboxClose);
        lightboxClose.addEventListener("click", () => {
            this.closeLightbox();
        }
        );
    }

    // close the lightbox
    closeLightbox() {
        const lightbox = document.querySelector(".lightbox--open");
        lightbox.style.display = "none";
        lightbox.innerHTML = "";
        lightbox.classList.remove("lightbox--open");
    }

    // method to get the next media in the lightbox

    // method to like the media
    likeMedia() {
        this.media.likes++;
    }

    // method to get the DOM of the media
    getMediaDOM() {
        const mediaContainer = document.createElement("div");
        mediaContainer.setAttribute("class", "media_container");

        const imageWrapper = document.createElement("div");
        imageWrapper.setAttribute("class", "image_container");
        imageWrapper.addEventListener("click", () => {
            this.openLightbox();
        });

        const img = document.createElement("img");
        const video = document.createElement("video");

        if (this.media.image) {
            img.setAttribute("src", `assets/photographers/${this.media.photographerName}/${this.media.image}`);
            imageWrapper.appendChild(img);
        } else {
            video.setAttribute("src", `assets/photographers/${this.media.photographerName}/${this.media.video}`);
            imageWrapper.appendChild(video);
        }

        const mediaInfos = document.createElement("div");
        mediaInfos.setAttribute("class", "media_infos");

        const mediaTitle = document.createElement("h2");
        mediaTitle.setAttribute("class", "media_title");
        mediaTitle.textContent = this.media.title;

        const mediaLikes = document.createElement("div");
        mediaLikes.setAttribute("class", "media_likes");
        
        const mediaLikesNumber = document.createElement("p");
        mediaLikesNumber.setAttribute("class", "media_likes_number");
        mediaLikesNumber.textContent = this.media.likes;

        const mediaLikesButton = document.createElement("button");
        mediaLikesButton.setAttribute("class", "media_likes_button");
        mediaLikesButton.innerHTML = `<i class="fas fa-heart"></i>`;
        mediaLikesButton.addEventListener("click", () => {
            this.likeMedia();
            mediaLikesNumber.textContent = this.media.likes;
        });


        mediaLikes.appendChild(mediaLikesButton);
        mediaLikes.appendChild(mediaLikesNumber);

        mediaInfos.appendChild(mediaTitle);
        mediaInfos.appendChild(mediaLikes);

        mediaContainer.appendChild(imageWrapper);
        mediaContainer.appendChild(mediaInfos);

        return mediaContainer;
    }






//   likeMedia() {
//     console.log("like");
//     // first we get the media likes
//     const mediaLikes = document.querySelector(".media_likes_button");
//     // we add an event listener on the like button
//     mediaLikes.addEventListener("click", () => {
//         // we increment the likes
//         console.log(this.media.likes);
//         this.media.likes++;
//         // we update the DOM
//         mediaLikes.innerHTML = this.media.likes;
//     });
//   }


}
