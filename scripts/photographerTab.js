class PhotographerTab {
    constructor(photographer, medias) {
        this.photographer = photographer;
        this.medias = medias;
    }

    getPhotographerTabDOM() {
        const photographerTab = document.createElement('div');
        photographerTab.setAttribute('class', 'photograph-tab-container');
        photographerTab.setAttribute('aria-label', 'Informations sur le photographe, y compris le nombre total de mentions "j\'aime" et le prix par jour');

        const photographerLikesContainer = document.createElement('div');
        photographerLikesContainer.setAttribute('class', 'photograph-tab-likes-container');

        const photographerLikes = document.createElement('p');
        photographerLikes.setAttribute('class', 'photograph-tab-likes');
        photographerLikes.textContent = this.getTotalLikes();
        photographerLikes.setAttribute('aria-label', 'Nombre total de mentions "j\'aime"');
        photographerLikesContainer.appendChild(photographerLikes);

        const photographerLikesLogo = document.createElement('i');
        photographerLikesLogo.setAttribute('class', 'fa-solid fa-heart');
        photographerLikesContainer.appendChild(photographerLikesLogo);

        const photographerPrice = document.createElement('p');
        photographerPrice.setAttribute('class', 'photograph-tab-price');
        photographerPrice.textContent = `${this.photographer.price}€/jour`;

        photographerTab.appendChild(photographerLikesContainer);
        photographerTab.appendChild(photographerPrice);

        return photographerTab;
    }

     // method to get the sum of all likes
     getTotalLikes() {
        return this.medias.reduce((sumLikes, media) => sumLikes + media.likes, 0);
    }

    // update the total likes
    updateTotalLikes() {
        const photographerLikes = document.querySelector('.photograph-tab-likes');
        photographerLikes.textContent = this.getTotalLikes();
    }
}