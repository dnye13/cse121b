/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = null;

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(function (temple) {
        let article = document.createElement('article');
        let newh3 = document.createElement('h3');
        newh3.textContent = temple.templeName;
        let templeImage = document.createElement('img');
        templeImage.src = temple.imgUrl;
        templeImage.alt = temple.location;
        article.appendChild(newh3);
        article.appendChild(templeImage);
        templesElement.appendChild(article);
        console.log(newh3);
    })
}

/* async getTemples Function using fetch()*/
let url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
const getTemples = async () => {
    const response = await fetch(url);
    if (response.ok) {
        templeList = await response.json();
    console.log(templeList);
    displayTemples(templeList);
    }
}

/* reset Function */
function reset() {
    document.querySelector('#temples').innerHTML = "";
}

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.querySelector('#filtered').value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => Date.parse(temple.dedicated)< new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);   
            break; }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList) });