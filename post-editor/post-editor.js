/* Imports */

import '../auth/user.js';
import { uploadImage } from '../fetch-utils.js';

/* DOM elements*/

const bulletinForm = document.getElementById('bulletin-form');
const errorDisplay = document.getElementById('error-display');
const imageInput = document.getElementById('image-input');
const preview = document.getElementById('preview');
const addButton = document.getElementById('add-button');

/* State */

let error = null;

/* Events */

imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
    } else {
        preview.src = '../assets/place-holder.png';
    }
});

bulletinForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    addButton.disabled = true;
    const formData = new formData('image');
    const imageFile = formData.get('image');
    const randomFolder = Math.floor(Date.now() * Math.random());
    const imagePath = `project-images/bulletin/${randomFolder}/${imageFile.name}`;
    const url = await uploadImage('images', imagePath, imageFile);
});
