const test = document.querySelector('.js-button')
console.log(test.classList.contains('js-button'));
function gamIng(gaming){
let onOff = document.querySelector('.js-gaming');
if(gaming === 'game'){
if(onOff.innerText === 'Gaming'){
  onOff.innerHTML = 'on';
  onOff.classList.add('is-on');
}else if(onOff.innerHTML === 'on'){
  onOff.innerHTML = 'off';
  onOff.classList.add('is-off');
}else{
  onOff.innerHTML = 'Gaming';
  onOff.classList.remove('is-off');
  onOff.classList.remove('is-on');
}
} 
musicChange(gaming);
techChange(gaming);
}
function musicChange(gaming){
let musicOn = document.querySelector('.js-music');
if(gaming === 'music'){
  if(musicOn.innerText === 'Music'){
  musicOn.innerHTML = 'on';
  musicOn.classList.add('is-on');
}else if(musicOn.innerHTML === 'on'){
  musicOn.innerHTML = 'off';
  musicOn.classList.add('is-off');
}else{
  musicOn.innerHTML = 'Music';
  musicOn.classList.remove('is-off');
  musicOn.classList.remove('is-on');
}
}
}
function techChange(gaming){
let techOn = document.querySelector('.js-tech');
if(gaming === 'tech'){
  if(techOn.innerText === 'Tech'){
  techOn.innerHTML = 'on';
  techOn.classList.add('is-on');
}else if(techOn.innerHTML === 'on'){
  techOn.innerHTML = 'off';
  techOn.classList.add('is-off');
}else{
  techOn.innerHTML = 'Tech';
  techOn.classList.remove('is-off');
  techOn.classList.remove('is-on');
} 
}
}