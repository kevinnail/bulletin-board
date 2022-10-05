export function renderPost(post) {
    const li = document.createElement('li');

    const h3 = document.createElement('h3');
    h3.textContent = post.title;

    const span = document.createElement('span');
    span.textContent = categoryEmoji(post.category);
    span.classList.add('category-image');

    const img = document.createElement('img');

    if (post.image_url) {
        img.classList.add('image-size');
        img.src = post.image_url;
    } else {
        img.classList.add('image-size');
        img.src = './assets/place-holder.png';
    }

    const p = document.createElement('p');
    p.textContent = post.description;

    const p2 = document.createElement('p');
    p2.textContent = 'Contact: ' + post.contact;
    p2.classList.add('contact-info');

    li.append(h3, span, img, p, p2);
    return li;
}

function categoryEmoji(category) {
    if (category === 'community') return '🧑🏻‍🤝‍🧑🏽';
    if (category === 'services') return '🐕‍🦺';
    if (category === 'housing') return '🏠';
    if (category === 'for-sale') return '💵';
    if (category === 'jobs') return '🤑';
    if (category === 'gigs') return '🎙️';
    if (category === 'pictures-of-cats') return '😻';
}
