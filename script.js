// global variables
var pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'
var quoteUrl = 'https://api.quotable.io/random'
var parentEl = document.querySelector('#pokemon');
var myModal = document.getElementById('modal1');

// poke api url fetch request
fetch(pokeUrl)
    .then((response) => response.json())
    .then((data) => {
        var pokemon = data.results;
        // for loop for showing each pokemon name, picture, and modal prompt
        for (var i = 0; i < pokemon.length; i++) {
            var gridItem = document.createElement('div');
            gridItem.style.height = '200px';
            gridItem.style.width = '200px';
            gridItem.style.border = "2px solid black";
            gridItem.style.padding = "8px";
            gridItem.style.margin = "10px";
            gridItem.style.backgroundColor = "gray";
            gridItem.style.borderRadius = "10px";
            gridItem.style.backgroundImage = `url('./sprites/${i + 1}.png')`;
            gridItem.style.backgroundRepeat = "no-repeat";
            gridItem.style.backgroundPosition = "center";
            gridItem.setAttribute('data-bs-toggle', 'modal');
            gridItem.setAttribute('data-bs-target', '#modal1');
            var label = pokemon[i].name;
            gridItem.textContent = label;
            parentEl.appendChild(gridItem);
        }

    });

// function to change background color of each pokemon to signify that that pokemon has been caught and fetches quote api to put quote into modal
parentEl.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = 'red';
    fetch(quoteUrl)
        .then((response) => response.json())
        .then((data) => {
            var randoQuote = data.content
            var quoteEl = document.querySelector('p');
            quoteEl.textContent = randoQuote;
        });
});


// function to close the modal using the close button
function closeModal() {
    document.getElementById('modal1').style.display = 'none';
}

function clearBtn() {
    localStorage.clear();

}
