class Form {
    constructor(photographer) {
        this.photographer = photographer;
        
        this.event();
    }

    #getFormDOM() {
        const modal = document.querySelector('.modal_body');
        modal.setAttribute("aria-hidden", "false");
        modal.innerHTML = `
        <header class="modal_header">
            <h2 class="modal_title">Contactez-moi ${this.photographer.name}</h2>
            <button class="modal_close" role="button"><i class="fa-solid fa-times"></i></button>      
        </header>
        <form class="modal_form">
            <label for="prenom">Prénom <span class="mandatory">*</span></label>
            <input type="text" id="prenom" name="prenom" aria-required="true">
            <label for="nom">Nom <span class="mandatory">*</span></label>
            <input type="text" id="nom" name="nom" aria-required="true">
            <label for="email">Email <span class="mandatory">*</span></label>
            <input type="email" id="email" name="email" aria-required="true">
            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>
            <button class="contact_button" id="send_form">
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
        const modal = document.querySelector('.modal_body');
        document.getElementById('prenom').focus();
        document.body.setAttribute("aria-hidden", "true");
        modal.parentElement.className = "modal_container open";
        modal.className = "modal_body open";
        const sendForm = document.getElementById('send_form');
        sendForm.addEventListener('click', (e) => {
            this.submitForm(e);
        })

        document.addEventListener("keydown", (e) => {
            if (e.key == "Escape") {
              this.closeForm();
            }
          });
    }

    closeForm() {
        const modal = document.querySelector('.modal_body');
        modal.parentElement.className = "modal_container";
        modal.className = "modal_body";
        modal.innerHTML = "";
    }

    event() {
        const contactButton = document.querySelector("#open_contact");
        contactButton.addEventListener("click", () => {
            this.openForm();
        });
    }

    submitForm(e) {
        e.preventDefault();
        
        const prenom = document.getElementById('prenom').value;
        const nom = document.getElementById('nom').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (prenom == "" || nom == "" || email == "") {
            alert("Veuillez remplir les champs obligatoires");
            return;
        }
        
        console.log({
            prenom: prenom,
            nom: nom,
            email: email,
            message: message
        });

        this.closeForm();
    }
}