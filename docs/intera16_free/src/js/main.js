import '../scss/style.scss';

const button = document.getElementById("vibrateButton");

let isVibrating = false; // ボタンの震えの状態を格納するフラグ

const toggleVibration = () => {
  if (isVibrating) {
    button.classList.remove("is-vibrate1");
  } else {
    button.classList.add("is-vibrate1");
  }
  isVibrating = !isVibrating;
}

button.addEventListener("click", toggleVibration);