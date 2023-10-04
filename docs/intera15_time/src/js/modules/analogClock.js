class AnalogClock {
  constructor(hourHandSelector, minuteHandSelector, secondHandSelector) {
    // 時、分、秒の要素を取得
    this.hourHand = document.querySelector(hourHandSelector);
    this.minuteHand = document.querySelector(minuteHandSelector);
    this.secondHand = document.querySelector(secondHandSelector);

    // 時計を初期化し、1秒ごとに更新
    this.initializeClock();
    setInterval(() => this.updateClock(), 1000);
  }

  // 時計の初期化
  initializeClock() {
    // 初期表示のために現在の時刻で回転角度を設定
    this.updateClock();
  }

  // 時計を更新
  updateClock() {
    const currentDate = new Date();

    // 秒、分、時の割合を計算
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    // memo
    // getSeconds():「秒」を0から59の整数で返す
    // getMinutes():「分」を0から59の整数で返す
    // getHours():「時」を0から23の整数で返す

    // 要素の回転を設定
    this.setRotation(this.secondHand, secondsRatio);
    this.setRotation(this.minuteHand, minutesRatio);
    this.setRotation(this.hourHand, hoursRatio);
  }

  // 要素の回転を設定
  setRotation(element, rotationRatio) {
    // CSSのカスタムプロパティで回転角度を設定
    element.style.setProperty('--rotation', rotationRatio * 360);
  }
}

export default AnalogClock;
