export function renderPost(post) {
    const li = document.createElement('li');

    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    const span = document.createElement('span');
    span.textContent = categoryEmoji(post.category);
    span.classList.add('category-image');

    const img = document.createElement('img');
    img.classList.add('image-size');
    img.src = post.image_url;

    const p = document.createElement('p');
    p.textContent = post.description;

    const p2 = document.createElement('p');
    p2.textContent = 'contact: ' + post.contact;

    li.append(h2, span, img, p, p2);
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
