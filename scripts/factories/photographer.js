function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("width", "200")
        img.setAttribute("height", "200")
        img.setAttribute("alt", "");
        
        const link = document.createElement( 'a' );
        link.setAttribute("href", `photographer.html?id=${data.id}`);
        link.setAttribute("title", `Page de ${name}`);
        
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        
        link.appendChild(img);
        link.appendChild(h2);
        
        
        const city = document.createElement( 'h3' );
        city.textContent = data.city + ", " + data.country;
        
        const tagline = document.createElement( 'p' );
        tagline.textContent = data.tagline;
        tagline.setAttribute("class", "tagline");
        
        const price = document.createElement( 'p' );
        price.setAttribute("class", "price");
        price.textContent = data.price + "€/jour";

        article.appendChild(link);
        article.appendChild(city);
        article.appendChild(tagline);
        article.appendChild(price);
        
        return (article);
    }
    return { name, picture, getUserCardDOM }
}