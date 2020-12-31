const d = document;
const infoPokemon = d.querySelector('#search-pokemon');
const pokemonName = d.querySelector(".card-info-title h1")
const pokemonImage = d.querySelector(".card-img img");
const pokemonNumber = d.querySelector(".card-number h3");
const pokemonType = d.querySelector(".type h5")
const pokemonTypeStyle = d.querySelector(".type > h5")
const pokemonXp = d.querySelector(".xperience h5");
const pokemonWeight = d.querySelector(".weight h5");
const pokemonHeight = d.querySelector(".height h5")
const pokemonCard = d.querySelector(".card");
const pokemonNav = d.querySelector("nav");



fetchPokemon = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
}



ActualizarData = async (id) =>{
const pokemon = await fetchPokemon(id);

function pokemonTypeCond(){
    if(pokemon.types[1]){
        return `${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`
    }
    else{
        return pokemon.types[0].type.name
    }
}

function pokemonTypeColor(type){
    switch (type) {
        case "normal":
            pokemonType.style.backgroundColor="#949e9e";
            break;
        case "poison":
            pokemonType.style.backgroundColor="#9900cc";
            break;
        case "psychic":
            pokemonType.style.backgroundColor="#d65cad";
            break;
        case "grass":
            pokemonType.style.backgroundColor="#00cc66";
            break;
        case "ground":
            pokemonType.style.backgroundColor="#ffcc00";
            break;
        case "ice":
            pokemonType.style.backgroundColor="#99ccff";
            break;
        case "fire":
            pokemonType.style.backgroundColor="#ff3300";
            break;
        case "rock":
            pokemonType.style.backgroundColor="#cc9900";
            break;
        case "dragon":
            pokemonType.style.backgroundColor="#9966ff";
        break;
        case "water":
            pokemonType.style.backgroundColor="#0073e6";
        break;
        case "bug":
            pokemonType.style.backgroundColor="#ace600";
            break;
        case "dark":
            pokemonType.style.backgroundColor="#996633";
            break;
        case "ghost":
            pokemonType.style.backgroundColor="#999966";
            break;
        case "fighting":
            pokemonType.style.backgroundColor="#6666ff";
            break;
        case "steel":
            pokemonType.style.backgroundColor="#808080";
            break;
         case "flying":
            pokemonType.style.backgroundColor="#3380cc";
            break;
        case "electric":
            pokemonType.style.backgroundColor="#d2d22d";
            break;
        case "fairy":
            pokemonType.style.backgroundColor="#e59acc";
            break;     
    }
}


pokemonImage.setAttribute("src",pokemon.sprites.other["official-artwork"].front_default);
pokemonNumber.textContent= `#${pokemon.id}`;
pokemonName.textContent = pokemon.name;
pokemonWeight.textContent = pokemon.weight;
pokemonXp.textContent = pokemon.base_experience;
pokemonHeight.textContent = pokemon.height;
pokemonType.textContent = pokemonTypeCond();
pokemonTypeColor(pokemon.types[0].type.name)
}



infoPokemon.addEventListener('keydown',(e)=>{
    if(e.key==="Enter"){
        pokemonNav.classList.add("show_nav")
        pokemonCard.classList.add("show_card");
        ActualizarData(infoPokemon.value.toLowerCase());
        infoPokemon.value ="";
    }

})

