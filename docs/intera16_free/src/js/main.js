import '../scss/style.scss';
import Rythm from 'rythm.js'

const wavesurfer = WaveSurfer.create({
  container: '#wave', // 波形を表示するコンテナのID
  barWidth: 2,
  backgroundColor: '#fffaf0',
  barGap: 5,
  barRadius: 3,
  cursorColor: '#fff',
  waveColor: '#d2b48c',
  progressColor: '#ff8c00',
  width: 500,
  height: 100,
  interact: false, // 波形をクリックして操作を無効にする
});

const rythm = new Rythm();

// 音楽ファイルのURL
const musicUrl = './images/73_bpm78.mp3';

// Rythm.jsの設定
rythm.setMusic(musicUrl);
rythm.startingScale = 0.75; // 最小スケール
rythm.pulseRatio = 0.30; // パルス比率
rythm.maxValueHistory = 100; // 最大値の履歴数

// 音楽ファイルを直接WaveSurfer.jsにロード
wavesurfer.load(musicUrl);

// WaveSurfer.jsの再生状態を格納するフラグ
let isPlaying = false;

// 音楽が終了したら初期化する関数
function resetWaveform() {
  wavesurfer.stop(); // WaveSurfer.jsの再生を停止
  wavesurfer.seekTo(0); // 再生位置を初期化
  isPlaying = false;
  playPauseButton.textContent = '再生'; // ボタンのテキストを変更
  rythm.stop(); // Rythm.jsのアニメーションを停止
}

// WaveSurfer.jsのfinishイベントをリスニング
wavesurfer.on('finish', resetWaveform);

// 再生・停止ボタン
const playPauseButton = document.getElementById('playPauseButton');
playPauseButton.addEventListener('click', () => {
  if (!isPlaying) {
    // WaveSurfer.jsを開始してアニメーションを開始
    wavesurfer.play();
    
    playPauseButton.textContent = 'stop'; // ボタンのテキストを変更
    isPlaying = true;
    
    // Rythm.jsを開始してアニメーションを開始
    rythm.start();
  } else {
    // WaveSurfer.jsのアニメーションを停止
    wavesurfer.pause();
    
    playPauseButton.textContent = 'start'; // ボタンのテキストを変更
    isPlaying = false;
    
    // Rythm.jsのアニメーションを停止
    rythm.stop();
  }
});


// koko
// 最終目標値までの進捗度
rate = 0;

// 最終目標値
clickPos = {x:0, y:0};

// 現在値
movePos = {x:0, y:0};

init();


// 初期設定
function init() {

  // ステージサイズ
  sw = window.innerWidth
  sh = window.innerHeight

  // 最初はランダム
  clickPos.x = random(0, sw);
  clickPos.y = random(0, sh);

  // クリックしたところを最終目標値に
  $(window).on('click', _eClick);

}


// 毎フレーム実行
window.requestAnimationFrame(update);
function update() {

  // ステージサイズ
  sw = window.innerWidth
  sh = window.innerHeight

  // イージングかける
  ease = 0.02;

  // 進捗度 1へ近づける
  rate += (1 - rate) * ease;

  // だいたい1に近づいたら目標値変更
  if(Math.abs(1 - rate) < 0.005) {
    _eClick();
  }

  // 寄り道ターゲット
  tg = $('.js-tg');

  // 画面真ん中へ寄り道
  tgX = sw * 0.5;
  tgY = sh * 0.5;

  // 動かすやつ
  move = $('.js-move');

  // 進捗度を使って、寄り道しつつ最終的にクリックした位置へ行くように
  moveX = (tgX * (1 - rate)) + (clickPos.x * rate);
  moveY = (tgY * (1 - rate)) + (clickPos.y * rate);
  movePos.x += (moveX - movePos.x) * ease;
  movePos.y += (moveY - movePos.y) * ease;

  // DOM更新
  TweenMax.set(move, {
    x:movePos.x,
    y:movePos.y
  });
  TweenMax.set(tg, {
    x:tgX,
    y:tgY
  });

  window.requestAnimationFrame(update);
  // 画面の更新される時に実行してくれるやつ
  // 例)〜〜FPS
  // 60fpsだいたい早い時=>目指す数字
  // setIntervalじゃなくてrequestAnimationを使おう〜！！
}

// ----------------------------------------
// イベント 画面クリック
// ----------------------------------------
function _eClick(e) {

  rate = 0;

  if(e == null) {
    clickPos.x = random(0, window.innerWidth);
    clickPos.y = random(0, window.innerHeight);
  } else {
    clickPos.x = e.clientX;
    clickPos.y = e.clientY;
  }

}

// ----------------------------------------
// minからmaxまでランダム
// ----------------------------------------
function random(min, max) {
  return Math.random() * (max - min) + min;
}