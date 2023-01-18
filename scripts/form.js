class Form {
    constructor(photographer) {
        this.photographer = photographer;
    }

    #getFormDOM() {
        const modal = document.querySelector('.modal');
        modal.innerHTML = `
        <header class="modal_header">
            <h2 class="modal_title">Contactez-moi ${this.photographer.name}</h2>
            <button class="modal_close"><i class="fa-solid fa-times"></i></button>      
        </header>
        <form class="modal_form">
            <label for="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom" required>
            <label for="nom">Nom</label>
            <input type="text" id="nom" name="nom" required>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            <button class="modal_button" type="submit">
                Envoyer
            </button>
        </form>
        `;

        const close = document.querySelector('.modal_close');
        close.addEventListener('click', () => {
            this.closeForm();
            });
        }
    
    openForm() {
        this.#getFormDOM();
        const modal = document.getElementById('modal');
        modal.style.position = "fixed";
        modal.style.display = "block";
        modal.classList.add = "open";
    }

    closeForm() {
        const modal = document.getElementById('modal');
        console.log(modal);
        modal.classList.remove = "open";
        modal.style.display = "none";
        modal.innerHTML = "";
    }

}