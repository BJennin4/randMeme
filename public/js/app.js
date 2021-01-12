const memeButton = document.querySelector('#memeButton');

memeButton.addEventListener('click', async function (e){
    e.preventDefault();
    const meme = await axios.get('https://meme-api.herokuapp.com/gimme/wholesomememes')
    const memeUrl = meme.data.url;
    appendMeme(memeUrl);
})

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

    const cardText = document.createElement('p');
    cardText.setAttribute('class', 'card-text');

    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', 'btn-group');
    buttonDiv.setAttribute('role', 'group');
    buttonDiv.setAttribute('aria-label', 'Meme Editing');

    const show = document.createElement('button');
    show.setAttribute('class', 'btn btn-outline-success');
    show.innerText = 'Look Closer';

    const update = document.createElement('button');
    update.setAttribute('class', 'btn btn-outline-info');
    update.innerText = 'Rate';

    const destroy = document.createElement('button');
    destroy.setAttribute('class', 'btn btn-outline-danger');
    destroy.innerText = 'Destroy';

    buttonDiv.appendChild(show);
    buttonDiv.appendChild(update);
    buttonDiv.appendChild(destroy);
    card.appendChild(content);
    cardBody.appendChild(cardTitle);
    cardText.appendChild(buttonDiv);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    col.appendChild(card);
    memeHolder.appendChild(col);
}

