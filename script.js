// global variables
var pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'
var quoteUrl = 'https://api.quotable.io/random'
var parentEl = document.querySelector('#pokemon');
var myModal = document.getElementById('modal1');
var caught = localStorage.getItem('caught')


// poke api url fetch request
fetch(pokeUrl)
    .then((response) => response.json())
    .then((data) => {
        var pokemon = data.results;
        pokemonStorage = pokemon
        console.log(pokemon)
        var storage = localStorage.getItem("collected-Pokemon") || "[]";
        storage = JSON.parse(storage);
        // for loop for showing each pokemon name, picture, and modal prompt
        for (var i = 0; i < pokemon.length; i++) {
            var gridItem = document.createElement('div');
            gridItem.style.height = '200px';
            gridItem.style.width = '200px';
            gridItem.style.border = "2px solid black";
            gridItem.style.padding = "8px";
            gridItem.style.margin = "10px";

            storage.includes(pokemon[i].name)?
            gridItem.style.backgroundColor = "red":
            gridItem.style.backgroundColor = "gray";

            gridItem.style.borderRadius = "10px";
            gridItem.style.borderColor = "black";
            gridItem.style.backgroundImage = `url('./sprites/${i + 1}.png')`;
            gridItem.style.backgroundRepeat = "no-repeat";
            gridItem.style.backgroundPosition = "center";
            gridItem.style.backgroundSize = "150px";
            gridItem.setAttribute('data-bs-toggle', 'modal');
            gridItem.setAttribute('data-bs-target', '#modal1');
            var label = pokemon[i].name;
            gridItem.textContent = label;
            parentEl.appendChild(gridItem);
        }

    });

// function to change background color of each pokemon to signify that that pokemon has been caught and fetches quote api to put quote into modal
parentEl.addEventListener('click', function onClick(event) {
    event.preventDefault();
    if (event.target.style.backgroundColor === 'gray') { //allows background color to be reset after clicking
        event.target.style.backgroundColor = 'red'
    }
    else { event.target.style.backgroundColor = 'gray' }
    fetch(quoteUrl)
        .then((response) => response.json())
        .then((data) => {
            var randoQuote = data.content
            var quoteEl = document.querySelector('p');
            quoteEl.textContent = randoQuote;
        });
    var bgColor = event.target.style.backgroundColor;
    var storage = localStorage.getItem('collected-Pokemon') || '[]';
    storage = JSON.parse(storage);

    if (bgColor === 'red') {
        storage.push(event.target.textContent);
    }
    else {
        storage = storage.filter(function(pokemon){
            return pokemon !== event.target.textContent;
        });
    }

    localStorage.setItem('collected-Pokemon', JSON.stringify(storage))
});

// function to close the modal using the close button
function closeModal() {
    document.getElementById('modal1').style.display = 'none';
}

// resets local storage and bg div colors
var resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', clearBtn);

function clearBtn() {
    localStorage.clear();
    location.reload();
}
