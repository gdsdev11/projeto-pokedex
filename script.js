var pokecontainer = window.document.getElementById('pokecontainer')

var pokenum = 1025

var cores = {
    fire: '#ff8b8b',
    grass: '#DEFDE0',
    electric: '#f4fc89',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#8368c2',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#befffc',
    fighting: '#E6E0D4',
    normal: '#bbbbbb',
}

var tiposprincipais = Object.keys(cores)

var fetchPokemons = async () => {
    for (let i = 1; i <= pokenum; i++) {
        await getpokemons(i)
    }
}

var getpokemons = async (id) => {
    var url = `https://pokeapi.co/api/v2/pokemon/${id}`
    var resp = await fetch(url)
    var data = await resp.json()
    createPokemonCard(data)
}

var createPokemonCard = (poke) => {
    var proxcard = window.document.createElement('div')
    proxcard.classList.add("card")

    var name = poke.name[0].toUpperCase() + poke.name.slice(1)
    var id = poke.id.toString().padStart(3, "0")

    var pokeTypes = poke.types.map(type => type.type.name)
    var type = tiposprincipais.find(type => pokeTypes.indexOf(type) > -1)
    var color = cores[type]

    proxcard.style.backgroundColor = color

    var pokemonInnerHTML = `
    <div class="img">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${name}">
    </div>
    <div class="info">
        <span class="number"> #${id} </span>
        <h2 class="name" >${name}</h2>
        <small class="Type">Tipo: <span> ${type} </span></small>
    </div>
    `

    proxcard.innerHTML = pokemonInnerHTML

    pokecontainer.appendChild(proxcard)
}

fetchPokemons()