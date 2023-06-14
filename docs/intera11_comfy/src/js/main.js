

import '../scss/style.scss';
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

// import scrollBar from './modules/scrollBar';
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel', {
    type   : 'loop', //slide=>ノーマルタイプ , loop=>カルーセルスライダー, fade=>各スライドをフェードにより切り替える。このオプションはperPageと併用不可
    autoplay: true,
    interval: 3000,
    speed: 1000,
    perPage:3,
    gap:'25px',
    focus  : 'center',
    perMove: 1,
    cover: true,
    // heightRatio: 0.1, //スライドの高さを、幅に対する割合で指定
    height:100,
  } ).mount();
} );


