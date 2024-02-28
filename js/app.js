/** @format */
'use strict';
let countImages = 9;

function showRandomImage() {
  const body = document.body;
  const image = document.createElement('img');
  const imagePath = './images/';
  const randomImage = Math.floor(Math.random() * countImages) + 1;
  image.src = imagePath + randomImage + '.jpeg';
  body.appendChild(image);
}

showRandomImage();
