/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getPosts } from './fetch-utils.js';
import { renderPost } from './render-utils.js';
/* Get DOM Elements */

const postList = document.getElementById('bulletin-board');
const errorDisplay = document.getElementById('error-display');

/* State */
let posts = [];
let error = null;
/* Events */
window.addEventListener('load', async () => {
    const response = await getPosts();
    error = response.error;
    posts = response.data;

    if (error) {
        displayError();
    } else {
        displayPosts();
    }
});
/* Display Functions */

function displayError() {
    if (error) {
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}

function displayPosts() {
    postList.innerHTML = '';
    for (const post of posts) {
        const postEl = renderPost(post);
        postList.append(postEl);
    }
}
