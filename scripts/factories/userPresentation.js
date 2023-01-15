function userPresentationFactory(data){
    function getUserPresentationDOM() {
        const title = document.createElement( 'h1' );
        title.setAttribute("class", "title");
        title.textContent = data.name;
        
        const city = document.createElement( 'h2' );
        city.setAttribute("class", "city");
        city.textContent = data.city + ", " + data.country;

        const tagline = document.createElement( 'p' );
        tagline.setAttribute("class", "tagline");
        tagline.textContent = data.tagline;

        return (title, city, tagline);
    }
    return { getUserPresentationDOM }
}