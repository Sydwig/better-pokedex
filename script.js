var pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'
var quoteUrl = 'https://api.quotable.io/random' 

fetch(pokeUrl)
.then((response) => response.json())
.then((data) => {
    // CODE GOES HERE
    for (var i = 0; i < data.length; i++){
        
    }
    
    console.log(data.results);
    
});


// fetch(quoteUrl)
// .then((response) => response.json())
// .then((data) => console.log(data));



