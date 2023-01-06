async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    function getPhotographers(){
        return fetch("data/photographers.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.photographers);
                return data.photographers;
            })
    }
    let photographers = await getPhotographers();
    // et bien retourner le tableau photographers seulement une fois récupéré
    return ({
        photographers: [...photographers]})
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();

