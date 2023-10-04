class DigitalClock {
  constructor(dateSelector, timeSelector) {
    this.dateDiv = document.querySelector(dateSelector);
    this.timeDiv = document.querySelector(timeSelector);

    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    const currentDate = new Date();

    // 日付と時刻をフォーマット
    const formattedDate = this.formatDate(currentDate);
    const formattedTime = this.formatTime(currentDate);

    // 日付と時刻を表示
    this.dateDiv.innerText = formattedDate;
    this.timeDiv.innerText = formattedTime;
  }

  formatDate(date) {
    const year = date.getFullYear();
    const month = this.zeroPad(date.getMonth() + 1);
    const day = this.zeroPad(date.getDate());
    const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"][date.getDay()];
    return `${year}年 ${month}月 ${day}日 ${dayOfWeek}曜日`;
  }

  formatTime(date) {
    const hours = this.zeroPad(date.getHours());
    const minutes = this.zeroPad(date.getMinutes());
    const seconds = this.zeroPad(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }

  zeroPad(n) {
    // 数値を文字列に変換
    const numberString = n.toString();

    // ゼロ埋めして2桁にする
    return numberString.padStart(2, '0');
  }
}

export default DigitalClock;
