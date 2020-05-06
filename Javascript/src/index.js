import * as ex from './map-sample.js'


//const ul = document.createElement('ul');
//const li = document.createElement('li');

let root = document.querySelector('#root');

/*
ex.listaModelosCarros.forEach(modelo => {
    root.innerHTML += `<p>${modelo}</p>`
});
*/

ex.listaCarrosFiltrados.forEach(carro => {
    root.innerHTML += `<p>${carro.model}</p>`
});