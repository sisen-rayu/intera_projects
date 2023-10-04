import '../scss/style.scss';

import AnalogClock from './modules/analogClock';
import DigitalClock from './modules/digitalClock';

new AnalogClock('[data-hour-hand]', '[data-minute-hand]', '[data-second-hand]');
new DigitalClock('#date', '#clock');


// 太陽と月の出入り時間を計算
const today = new Date();
const times = SunCalc.getTimes(today, 35.63314483101375, 139.88032459585844); // 緯度と経度を設定

// アイコン要素を取得
const icon = document.getElementById('icon');

// 現在の時刻
const now = today.getTime();

// 太陽が昇っているかどうかをチェックしてテキストを切り替える
if (now >= times.sunrise.getTime() && now <= times.sunset.getTime()) {
  // 太陽が昇っている場合は「太陽」と表示
  icon.innerText = '🌞';
} else {
  // 太陽が沈んでいる場合は「月」と表示
  icon.innerText = '🌛';
}
