/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Dermot Nye",
    photo: "images/img.jpg",
    favoriteFoods: ['Pizza', 'Steak', 'Chicken Alfredo', 'Ice Cream'],
    hobbies: ['Baseball', 'Basketball', 'Video Games'],
    placesLived: [] 
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({place: 'Sacramento, CA', length: '20 years'});
myProfile.placesLived.push({place: 'Columbus, OH', length: '2 years'});
myProfile.placesLived.push({place: 'Rexburg, ID', length: '3 years'});

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').innerHTML = myProfile.name;
/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
const favoriteFoods = document.getElementById('favorite-foods');
myProfile.favoriteFoods.forEach(food => {
    let newElement = document.createElement('li');
    newElement.textContent = food;
    favoriteFoods.appendChild(newElement);
})

/* Hobbies List */
const hobbies = document.getElementById('hobbies');
myProfile.hobbies.forEach(hobby => {
    let hobbyList = document.createElement('li');
    hobbyList.textContent = hobby;
    hobbies.appendChild(hobbyList);
})

/* Places Lived DataList */
const places = document.getElementById('places-lived');
myProfile.placesLived.forEach(place => {
    let placeList = document.createElement('dt');
    placeList.textContent = place.place;
    let lengthList = document.createElement('dd');
    lengthList.textContent = place.length;
    places.appendChild(placeList);
    places.appendChild(lengthList);
    // easier or better to add as concatenation??? 
    // places = `${placeList}, ${lengthList}`
})
// places.innerHTML = places;
