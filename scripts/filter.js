class filter {
    constructor() {
        this.filter = document.createElement("div");
        this.filter.setAttribute("class", "filter");
        this.filter.innerHTML = `
        <form class="filter__form">
            <label for="filter__form__select">Trier par</label>
            <select name="filter__form__select" id="filter__form__select">
                <option value="popularite">Popularité</option>
                <option value="date">Date</option>
                <option value="titre">Titre</option>
            </select>
        </form>
        `;
    }

    getFilterDOM() {
        return this.filter;
    }

    getFilterValue() {
        return this.filter.querySelector("select").value;
    }

    setFilterValue(value) {
        this.filter.querySelector("select").value = value;
    }

}