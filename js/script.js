// elements 
const itemsWrapper = document.querySelector('.items-wrapper');
const topChev = document.querySelector('.top');
const bottomChev = document.querySelector('.bottom');

topChev.classList.add('hide')

let counterImg = 0;
console.log(counterImg);



// inserisco tutti i percorsi delle immagini in un array

const images = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp',
]

// AUTOPLAY //
let c = 0;
let myAutoPlay = setInterval(autoPlay, 3000);

function autoPlay() {
  itemsCollection[c].classList.add('hide');
  c++;

  if(c > images.length - 1){
    c = 0;
  }

  itemsCollection[c].classList.remove('hide');
}

// creo un ciclo dell'array delle immagini e ad ogni ciclo aggiungo il tag con l'immagine ciclata 

for(let i = 0; i < images.length; i++){
  const img = images [i];
  console.log(img);

  itemsWrapper.innerHTML += `<img class="img hide" src="${img}">`
}

// prendo tutti gli elementi con la classe img 
const itemsCollection = document.getElementsByClassName('img');
console.log(itemsCollection);

// tolgo la classe .hide al primo elemento 

itemsCollection[counterImg].classList.remove('hide');
console.log(itemsCollection[counterImg]); 


// al click delle frecce incremento o decremento il counter 
topChev.addEventListener('click', function(){    
  bottomChev.classList.remove('hide')
  // rimetto la classe hide all'elemento con l'indice attuale che si incrementa o decrementa
  itemsCollection[counterImg].classList.add('hide');

  counterImg--;

  if(counterImg === 0){
    topChev.classList.add('hide')
  }

 // tolgo la classe hide all'elemento a indice contatore (che si è incrementato o decrementato)
  itemsCollection[counterImg].classList.remove('hide');
})


bottomChev.addEventListener('click', function(){

topChev.classList.remove('hide')

itemsCollection[counterImg].classList.add('hide');

counterImg++;


itemsCollection[counterImg].classList.remove('hide');


  if(counterImg === images.length -1){
    bottomChev.classList.add('hide')
  }
})








