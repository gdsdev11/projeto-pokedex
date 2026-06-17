var pokecontainer = window.document.getElementById('pokecontainer')

var getpokemons = async () => {
    var url = 'https://pokeapi.co/api/v2/pokemon/'
    var resp = await fetch(url)
    var data = await resp.json()
    console.log(data);
}

getpokemons()