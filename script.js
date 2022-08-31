var pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'
var quoteUrl = 'https://api.quotable.io/random' 
var parentEl = document.querySelector('#pokemon');

fetch(pokeUrl)
.then((response) => response.json())
.then((data) => {
    var pokemon = data.results;
    // CODE GOES HERE
    for (var i = 0; i < pokemon.length; i++){
        var gridItem = document.createElement('div');
        gridItem.style.height = '200px'; 
        gridItem.style.width = '200px'; 
        gridItem.style.border = "2px dotted black";
        gridItem.style.padding = "8px";
        gridItem.style.backgroundColor = "gray";
        var label = pokemon[i].name;
        gridItem.textContent = label;
        parentEl.appendChild(gridItem);
    }
    
});


// fetch(quoteUrl)
// .then((response) => response.json())
// .then((data) => console.log(data));



