class PhotographerTab {
    constructor(photographer) {
        this.photographer = photographer;
    }

    getPhotographerTabDOM() {
        const photographerTab = document.createElement('div');
        photographerTab.setAttribute('class', 'photograph-tab-container');

        const photographerLikesContainer = document.createElement('div');
        photographerLikesContainer.setAttribute('class', 'photograph-tab-likes-container');

        const photographerLikes = document.createElement('p');
        photographerName.setAttribute('class', 'photograph-tab-likes');
        photographerName.textContent = this.photographer.likes;
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

    getTotalLikes() {
        return this.photographer.likes;
    }
}