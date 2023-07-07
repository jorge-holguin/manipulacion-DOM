// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito =document.getElementsByClassName('parrafito');
// const pid = document.getElementById('pid');
// const input = document.querySelector ('input');

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// })

// h1.innerHTML = 'Patito <br> Feo';
// h1.innerText ='Patito <br> Feo'
// //console.log(h1.getAttribute = ('class'));
// //h1.setAttribute('class','rojo')

// h1.classList.add('rojo');
// h1.classList.remove('verde');

// input.value ="456"

// const img = document.createElement('img');
// img.setAttribute('src','https://play-lh.googleusercontent.com/0vpq7Mu6ZEloYsC6kJFJRRHidRQzZf9loRcOcBh03GT2DNQiX_Z-uS9tyYuaHZIDKCI');

// pid.innerHTML ="";
// pid.appendChild(img);

const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#calcular1');
const input2= document.querySelector('#calcular2');
const btn= document.querySelector('#btnCalcular');
const pResult= document.querySelector('#result');

form.addEventListener('submit',sumarInputValues);


function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: "+ sumaInputs;
}

