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
// WaveSurfer.jsの設定
const wavesurfer = WaveSurfer.create({
  container: '#wave', // 波形を表示するコンテナのID
  waveColor: 'blue', // 波形の色を指定（例: 'blue'）
  progressColor: 'purple', // 進捗バーの色を指定（例: 'purple'）
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

// 再生・停止ボタン
const playPauseButton = document.getElementById('playPauseButton');
playPauseButton.addEventListener('click', () => {
  if (!isPlaying) {
    // WaveSurfer.jsを開始してアニメーションを開始
    wavesurfer.play();
    
    playPauseButton.textContent = '停止'; // ボタンのテキストを変更
    isPlaying = true;
    
    // Rythm.jsを開始してアニメーションを開始
    rythm.start();
  } else {
    // WaveSurfer.jsのアニメーションを停止
    wavesurfer.pause();
    
    playPauseButton.textContent = '再生'; // ボタンのテキストを変更
    isPlaying = false;
    
    // Rythm.jsのアニメーションを停止
    rythm.stop();
  }
});
