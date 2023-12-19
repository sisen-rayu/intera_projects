import '../scss/style.scss';
import Rythm from 'rythm.js'
// const button = document.getElementById("vibrateButton");

// let isVibrating = false; // ボタンの震えの状態を格納するフラグ

// const toggleVibration = () => {
//   if (isVibrating) {
//     button.classList.remove("is-vibrate1");
//   } else {
//     button.classList.add("is-vibrate1");
//   }
//   isVibrating = !isVibrating;
// }

// button.addEventListener("click", toggleVibration);


// var wavesurfer = WaveSurfer.create({
//   container: '#wave',
// });
// wavesurfer.load('./images/73_bpm78.mp3');

// WaveSurferインスタンスを作成
// WaveSurfer.jsの設定
const wavesurfer = WaveSurfer.create({
  container: '#wave', // 波形を表示するコンテナのID
  waveColor: 'blue', // 波形の色を指定（例: 'blue'）
  progressColor: 'purple', // 進捗バーの色を指定（例: 'purple'）
});

// Rythm.jsの設定
const rythm = new Rythm();

// 音楽ファイルのURL
const musicUrl = './images/73_bpm78.mp3';

// 音楽の再生と停止を制御するためのフラグ
let isPlaying = false;

// 再生・停止ボタン
const playPauseButton = document.getElementById('playPauseButton');
playPauseButton.addEventListener('click', () => {
  if (!isPlaying) {
    // WaveSurfer.jsを開始してアニメーションを開始
    wavesurfer.load(musicUrl);
    wavesurfer.play();
    
    // Rythm.jsを開始してアニメーションを開始
    rythm.setMusic(musicUrl);
    rythm.start();
    
    playPauseButton.textContent = '停止'; // ボタンのテキストを変更
    isPlaying = true;
  } else {
    // WaveSurfer.jsのアニメーションを停止
    wavesurfer.pause();
    wavesurfer.seekTo(0); // オーディオを最初に戻す
    
    // Rythm.jsのアニメーションを停止
    rythm.stop();
    
    playPauseButton.textContent = '再生'; // ボタンのテキストを変更
    isPlaying = false;
  }
});
