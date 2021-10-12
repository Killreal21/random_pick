"use strict";

let images = [
    {image: '/9c3d2a8f045d.jpg'},
    {image: '/b2162504cf7c.jpg'},
    {image: '/f3df4a82b4782c0be372e673c7ca3df4.jpg'}
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.btn');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(images);
    smoothly(image, 'src', randomElement.image)
  
});
 