//variables
var input1 = document.getElementById('input1');
var boton1 = document.getElementById('boton1');
var fragmento1 = document.createDocumentFragment();
var img = document.createElement('img');
var contenedor = document.getElementById('contenedor');
var lista = document.createElement('ul');
var elementos1 = document.createElement('li');
var elementos2 = document.createElement('li');
var hnombre = document.getElementById('nombreP');




alert('aqui puedes buscar tu pokemon, gracias por visitar, no olvides darle un viztaso a mi cv , gracias  ');

boton1.addEventListener('click', (e)=>{

    var pokemon = input1.value;
    const req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status>=200 && req.status<300) {
            
            const respuestaServidor = JSON.parse(req.responseText);
            console.log(respuestaServidor);
            agregarPokemon(respuestaServidor)

        };
        function agregarPokemon(pokemon){
            
                img.src = pokemon.sprites.front_default;
                img.setAttribute('class','imgagen-de-pokemon');
                hnombre.innerHTML = `${pokemon.name}`;
                elementos1.innerHTML = `${pokemon.name}`;
                elementos2.innerHTML = `${pokemon.moves[0].move.name}`;
                lista.appendChild(elementos1);              
                lista.appendChild(elementos2);

                fragmento1.appendChild(lista);
                contenedor.appendChild(img);
                contenedor.appendChild(fragmento1);
                
           

            
        }

    };
    
    req.open("GET",`https://pokeapi.co/api/v2/pokemon/${pokemon}/`,true);
    req.send();
    
});






   
 





