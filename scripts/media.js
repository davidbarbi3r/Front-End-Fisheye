class Media {
    constructor(media, index, medias, photographerTab) {
        this.media = media;
        this.index = index;
        this.medias = medias;
        this.photographerTab = photographerTab;
    }

    // method to like the media
    // if the media is already liked, we decrement the likes
    // then we update the total likes
    likeMedia() {
        if (this.media.liked) {
            this.media.likes--;
            this.media.liked = false;
        } else {
            this.media.likes++;
            this.media.liked = true;
        }
        this.photographerTab.updateTotalLikes();
    }

    showIndex() {
        console.log(this.index)
    }

    // method to get the DOM of the media
    getMediaDOM() {
        const mediaContainer = document.createElement("div");
        mediaContainer.setAttribute("class", "media_container");

        const imageWrapper = document.createElement("div");
        imageWrapper.setAttribute("class", "image_container");
        imageWrapper.addEventListener("click", () => {
            new Lightbox(this.medias, this.index).openLightbox();
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

}
