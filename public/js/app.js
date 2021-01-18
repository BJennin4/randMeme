const memeButton = document.querySelector('#memeButton');
// Makes the button go Vroom
memeButton.addEventListener('click', async function (e){
    e.preventDefault();
    // API for pulling wholesome memes
    const meme = await axios.get('https://meme-api.herokuapp.com/gimme/wholesomememes')
    const memeUrl = meme.data.url;
    // Sends the meme data to the index
    axios.post('/', { memeUrl });
    location.reload();
})

// Crates the meme cards instantly when the button is hit
// This does make the creation of the cards in this file obsolete as the page auto realoads anyways, however this was great practice
// In the future the reload could be taken out if functionality were given to the buttons pre-reloading
function appendMeme(meme){
    const memeHolder = document.querySelector('#memeHolder');

    const content = document.createElement('img');
    content.setAttribute('src',meme);
    content.setAttribute('class', 'card-img-top');

    const col = document.createElement('div');
    col.setAttribute('class', 'col');

    const card = document.createElement('div');
    card.setAttribute('class', 'card bg-light text-dark');

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.innerText = 'Rating: ?';

    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', 'card-text');
    buttonDiv.setAttribute('role', 'group');
    buttonDiv.setAttribute('aria-label', 'Meme Editing');

    const show = document.createElement('a');
    show.setAttribute('class', 'btn btn-outline-success');
    show.setAttribute('href', '/BROKEN');
    show.innerText = 'Look Closer';

    const update = document.createElement('a');
    update.setAttribute('class', 'btn btn-outline-info');
    update.setAttribute('href', '/BROKEN');
    update.innerText = 'Rate';

    const destroyForm = document.createElement('form');
    destroyForm.setAttribute('method', 'POST');
    destroyForm.setAttribute('action', '/BROKEN');

    const destroy = document.createElement('button');
    destroy.setAttribute('class', 'btn btn-outline-danger');
    destroy.innerText = 'Destroy';

    // Slaps all the pieces into a bootstrap card
    memeHolder.appendChild(col);
    col.appendChild(card);
    card.appendChild(content);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(buttonDiv);
    buttonDiv.appendChild(show);
    buttonDiv.appendChild(update);
    buttonDiv.appendChild(destroyForm);
    destroyForm.appendChild(destroy);

    // Sends the meme information to the index
    axios.post('/', { memeUrl: meme });

    // Buttons will not update without reloading
    location.reload();
}

