let calculator = localStorage.getItem('calculator') || '';
function calculationUpdate(value){
  calculator += value;
  localStorage.setItem('calculator', calculator);
  document.querySelector('.js-show').innerHTML = calculator;
}