
const ticket = document.querySelector('#ticket');
const nome = document.getElementById('input-text1');
const kilometres = document.getElementById('input-text2');
const age = document.getElementById('age');
const km = kilometres.value
let price = km * 0.21;
price = price.toFixed(2);

const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');

button1.addEventListener('click', function(){
  ticket.classList.add('active');

  const name = nome.value;
  const offer = age.value;
  const seat = Math.floor((Math.random() * 10) + 1);
  const cpcode = Math.floor((Math.random() * 10000) + 1);

  if(offer == 'minorenne'){
    price = price - (20 / 100 * price) 
  }else if(offer == 'over65'){
    price = price - (40 / 100 * price)  
  }
  
  document.querySelector('.t-name').innerHTML = name;
  document.querySelector('.t-offer').innerHTML = offer;
  document.querySelector('.t-seat').innerHTML = seat;
  document.querySelector('.t-cp').innerHTML = cpcode;
  document.querySelector('.t-price').innerHTML = price;
});

button2.addEventListener('click', function(){
  ticket.classList.remove('active');
});


