

import '../scss/style.scss'

// import scrollBar from './modules/scrollBar';

const $img = document.querySelector('img');

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  $img.style.clipPath = `circle(${current + 50}px at center)`;
});

const $progress = document.querySelector('#progressbar');
//コンテンツの高さ(ウィンドウ外も含む)
const $mainHeight = document.querySelector('.main');
// const contentHeight = document.body.scrollHeight;
const contentHeight = $mainHeight.offsetHeight;
//はみ出た分を動かす
//contenHeightが3651やったら良い(コンテンツの高さ)今はなぜか6000??くらいになる
const totalHeight = contentHeight - window.innerHeight;
  window.onscroll = () => {
  const progressHeight = (window.pageYOffset / totalHeight) * 100;
  $progress.style.height = progressHeight + "%";
  console.log(contentHeight);
}
