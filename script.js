console.log('js ok')

// 1
const itemsWrapper = document.querySelector('.items-wrapper');
const topC = document.querySelector('.top');
const botC = document.querySelector('.bottom');

topC.classList.add('hide')

// 2

const images = [
  'asset/img/01.webp',
  'asset/img/02.webp',
  'asset/img/03.webp',
  'asset/img/04.webp',
  'asset/img/05.webp',
]

let counterImg = 0;

// 3
for(let i = 0; i < images.length; i++){
  const img = images [i];
  itemsWrapper.innerHTML += `<img class="img hide" src="${img}">`
}

// 4
const itemsCollection = document.getElementsByClassName('img');
itemsCollection[counterImg].classList.remove('hide');

// 5
topC.addEventListener('click', function(){    
  botC.classList.remove('hide')
  itemsCollection[counterImg].classList.add('hide');
  counterImg--;
  if(counterImg === 0){
    topC.classList.add('hide')
  }

  // 6
  itemsCollection[counterImg].classList.remove('hide');
})

// 7
botC.addEventListener('click', function(){
  topC.classList.remove('hide')
  itemsCollection[counterImg].classList.add('hide');
  counterImg++;

  itemsCollection[counterImg].classList.remove('hide');
  if(counterImg === images.length -1){
    botC.classList.add('hide')
  }
})