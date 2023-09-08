/* 
Creare un input ed verificarne il funzionamento
*/

const nome = document.getElementById('input-text1');
const kilometres = document.getElementById('input-text2');
const age = document.getElementById('age');
let price = kilometres * 0.21 ;
let Ticket;

const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');

button1.addEventListener('click', function(){
  const name = nome.value;

  document.querySelector('.t-name').innerHTML = name;
});




