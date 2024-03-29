/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Dermot Nye';

let currentYear = new Date().getFullYear();

let profilePicture = 'images/img.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture)

/* Step 5 - Array */

const favoriteFoods = ["Pizza", "Ice Cream", "Cookies", "Steak"];

foodElement.innerHTML = favoriteFoods.join('<br>');

const anotherFavoriteFood = "Lasagna";

favoriteFoods.push(anotherFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
