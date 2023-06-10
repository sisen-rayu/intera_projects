let $container = document.querySelector('.container');
let count =  50;
for (let i = 0; i < count; i++){
  let $slimeBall = document.createElement('div');
  $slimeBall.className = 'ball';
  $container.appendChild($slimeBall);
}

setInterval( () => {
  let $slime = Array.from(document.querySelectorAll('.ball'));
  for (let i = 0; i < $slime.length; i++) {
    $slime[i].style.left = Math.floor(Math.random()*70) + 'vw';
    $slime[i].style.top = Math.floor(Math.random()*80) + 'vh';
  }
},2000)