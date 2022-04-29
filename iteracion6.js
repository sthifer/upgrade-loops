/* Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array: */

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ];

let borrar = [];

for (const item of toys) {
    if (item.name.includes('gato')){
        borrar.push(toys.indexOf(item));
    }
}

borrar.sort((a, b) => b - a);

borrar.forEach(element => {
    toys.splice(element,1)
});

console.log(toys);