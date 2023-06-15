

import '../scss/style.scss';




  const $windmill = document.querySelector('.windmill');

  let start;
  const duration = 2000; // 2秒/周
  let animationFrameId; //requestAnimationFrameおまじない
  let currentRotation = 0; //風車の現在の回転角度を保持。マウスが要素上から離れたときに更新

  const rotate = (timestamp, elem) => {
    if (start === undefined) {
      start = timestamp;
    }

    const elapsed = timestamp - start; //経過時間

    let rotation = currentRotation + (elapsed / duration) * 360;  //要素の回転角度
    rotation %= 360;

    elem.style.transform = `rotate(${rotation}deg)`;

    if (rotation < 359.99 + currentRotation) { //要素が完全な1周（360度）未満の回転をしている場合
      animationFrameId = requestAnimationFrame((time) => {
        rotate(time, elem);
      });
    }
  }


  //マウスオーバー
  $windmill.addEventListener('mouseover', () => {
    $windmill.style.transformOrigin = '50% 50%';
    start = undefined;
    animationFrameId = requestAnimationFrame((time) => {
      rotate(time, $windmill);
    });
  });

  //マウスアウト
  $windmill.addEventListener('mouseout', () => {
    cancelAnimationFrame(animationFrameId);
    const computedStyle = window.getComputedStyle($windmill);
    // console.log(computedStyle);
    const transformString = computedStyle.transform;
    console.log(transformString); // matrix(a, b, c, d, tx, ty)
    const values = transformString.split('(')[1].split(')')[0].split(',');
    const a = values[0];
    const b = values[1];
    currentRotation = Math.atan2(b, a) * (180/Math.PI); //現在の回転角度を保持
    console.log(currentRotation + 'degree');
  });


  //memo
  //2D変換行列の値は、: matrix(a, b, c, d, tx, ty)。
  //回転に関連する要素は a と b の値。a は cos(θ) の値を表し、b は sin(θ) の値を表す。
  // a は x 方向の拡大縮小やx軸方向のせん断を表す。
  // b は y 方向の拡大縮小やy軸方向のせん断を表す。
  // c は x 方向のせん断やy軸方向の拡大縮小を表す。
  // d は y 方向のせん断やx軸方向の拡大縮小を表す。
  // tx は x 方向の平行移動を表す。
  // ty は y 方向の平行移動を表す。
  //=>よくわからん
  // 要素を移動、回転、拡大縮小、せん断（歪曲）することができる。!!!!!おおお?
  //せん断:任意の面に関して面に平行方向に力が作用すること

// 要素の回転角度は、アークタンジェント関数を使用して求める
// Math.atan2(b, a)の結果は、ラジアンで返す
//(180/Math.PI)をかけて度数に変換
//https://1-notes.com/javascript-angle-between-coordinates/
// atan 関数では「直線の傾き」から角度を算出するのに対し、 atan2 関数は「座標」から角度を求める