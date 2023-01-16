class Filter {
    // medias is an array of medias
    constructor(medias) {
        this.medias = medias;
        this.filter = document.createElement("form");
        this.filter.setAttribute("class", "filter");
        this.filter.innerHTML = `
            <label for="filter_form_select">Trier par</label>
            
            <select name="filter_form_select" id="filter_form_select">
                <option value="none" selected disabled hidden></option>
                <option value="popularite">Popularité</option>
                <option value="" disabled>─────────────</option>
                <option value="titre">Titre</option>
                <option value="" disabled>─────────────</option>
                <option value="date">Date</option>
            </select>   
        `;
        this.event();
    }

    // return the filter DOM
    getFilterDOM() {
        return this.filter;
    }

    // return the medias sorted by the filter
    getFilteredMedias() {
        const value = this.filter.querySelector("select").value;
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
                return this.medias;
        }
    }

    // listen to the filter change
    event() {
        this.filter.addEventListener("change", () => {
            const mediasSection = document.querySelector(".medias_section");
            // each time the filter is changed, we remove all the medias
            mediasSection.innerHTML = "";
            // then we add the filtered medias
            this.getFilteredMedias().forEach((photographerMedia) => {
                const photographerMediaModel = new Media(photographerMedia);
                const userPhotosDOM = photographerMediaModel.getMediaDOM()
                mediasSection.appendChild(userPhotosDOM);
            });
        });
    }
}