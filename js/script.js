/* 
Creare un input ed verificarne il funzionamento
*/
const nome = document.getElementById('input-text1');
const kilometres = document.getElementById('input-text2');
const age = document.getElementById('age');
const min = document.getElementById('s-min')
const normal = document.getElementById('n-disc')
const max = document.getElementById('s-max')
let price = kilometres * 0.21;
let Ticket;
price = price.toFixed(2);

const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');

button1.addEventListener('click', function(){
  const name = nome.value;
  const offer = age.value;
  const seat = Math.floor((Math.random() * 10) + 1);
  const cpcode = Math.floor((Math.random() * 10000) + 1);
  
  // if(min){
  //   price = price - (20 / 100 * price) 
  // }else if(max){
  //   price = price - (40 / 100 * price) 
  // } 


  document.querySelector('.t-name').innerHTML = name;
  document.querySelector('.t-offer').innerHTML = offer;
  document.querySelector('.t-seat').innerHTML = seat;
  document.querySelector('.t-cp').innerHTML = cpcode;
  // document.querySelector('.t-price').innerHTML = ;


});




