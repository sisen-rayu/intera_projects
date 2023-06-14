let $menu = document.querySelector('.menu');
let $items = document.querySelectorAll('.menu_content');
let clones = [];
let disableScroll = false;
let scrollheight = 0;
let scrollpos = 0;
let clonesHeight = 0;

function getScrollPos() {
  return $menu. scrollTop; //スクロールした量
}

// window.pageYOffset ;
// let pos = window.pageYOffset;

function setScrollPos(pos) {
  $menu.scrollTop = pos;
}

function getClonesHeigh() {
  clonesHeight = 0;

  clones.forEach(clone => {
    clonesHeight += clone.offsetHeight; //offsetHeightはエレメントの高さを返す
  })

  return clonesHeight;
}


//リサイズ時
function reCalc() {
  scrollpos = getScrollPos();
  scrollheight = $menu.scrollheight;
  clonesHeight = getClonesHeigh();

  if(scrollpos <= 0){
    setScrollPos(1); //上方向へのスクロールを可能にするため、初期値は1pxに設定
  }
}

function scrollUpdate() {
  if(!disableScroll) {
    scrollpos = getScrollPos();
    if(clonesHeight + scrollpos >= scrollheight) {
      //最下部までスクロールしたらtopに戻る
      setScrollPos(1);
      disableScroll = true;
    } else if (scrollpos <= 0) {
      setScrollPos(scrollheight - clonesHeight);
      disableScroll = true;
    }
  }

  if(disableScroll) {
    window.setTimeout(() => {
      disableScroll = false;
    }, 40);
  }
}

function onLoad() {
  $items.forEach(item => {
    const clone = item.cloneNode(true);
    $menu.appendChild(clone);
    clone.classList.add('js-clone');
  });

  clones = $menu.querySelectorAll('.js-clone');

  reCalc();

  $menu.addEventListener('scroll', () => {
    window.requestAnimationFrame(scrollUpdate);
  }, false);


  window.addEventListener('resize', () => {
    window.requestAnimationFrame(reCalc);
  },false);
}

window.onload = onLoad();