function userPhotosFactory(data) {

    function getUserPhotosDOM() {
        const mediaContainer = document.createElement( 'div' );
        mediaContainer.setAttribute("class", "media_container");

        const imageWrapper = document.createElement( 'div' );
        imageWrapper.setAttribute("class", "image_container");

        const img = document.createElement( 'img' );
        const video = document.createElement( 'video' );

        if (data.image) {
            img.setAttribute("src", `assets/photographers/${data.photographerName}/${data.image}`);
            imageWrapper.appendChild(img);
        } else {
            video.setAttribute("src", `assets/photographers/${data.photographerName}/${data.video}`);
            imageWrapper.appendChild(video);
        }

        const mediaInfos = document.createElement( 'div' );
        mediaInfos.setAttribute("class", "media_infos");

        const mediaTitle = document.createElement( 'h3' );
        mediaTitle.textContent = data.title;
        mediaInfos.appendChild(mediaTitle);

        const mediaLikes = document.createElement( 'div' );
        mediaLikes.setAttribute("class", "media_likes");
        
        const mediaLikesNumber = document.createElement( 'p' );
        mediaLikesNumber.textContent = data.likes;
        mediaLikes.appendChild(mediaLikesNumber);
        
        const mediaLikesIcon = document.createElement( 'i' );
        mediaLikesIcon.setAttribute("class", "fa-solid fa-heart");
        mediaLikes.appendChild(mediaLikesIcon);
        
        mediaInfos.appendChild(mediaLikes);
        mediaContainer.appendChild(imageWrapper);
        mediaContainer.appendChild(mediaInfos);

        return (mediaContainer);
    }

    return { getUserPhotosDOM }
}
