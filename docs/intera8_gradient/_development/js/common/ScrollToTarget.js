import velocity from 'velocity-animate';

export default class ScrollToTarget {
  constructor() {
    this.$ = document.body;
    this.$header = this.$.querySelector('.header');
    this.$scrollButtons = this.$.querySelectorAll('a[href^="#"]');

    this.isPage = true;
    this.addEvent();
  }

  /**
   * イベントまとめたもの
   */
  addEvent() {
    window.addEventListener('load', () => {
      this.updateHeaderHeight();
      this.init();
    });

    [...this.$scrollButtons].forEach(($scrollButton) => {
      $scrollButton.addEventListener('click', (e) => {
        e.preventDefault();
        const $target = $scrollButton.hash;
        this.isPage = true;
        this.scroll($target);
      });
    });
  }

  /**
   * ヘッダーの高さ取得
   */
  updateHeaderHeight() {
    this.headerHeight = this.$header.clientHeight;
  }

  /**
   * 初期化
   */
  init() {
    if (location.hash !== '') {
      this.isPage = false;
      this.scroll(location.hash);
    }
  }

  /**
   * スクロールする
   * @param {*} $target
   */
  scroll($target) {
    const target = this.$.querySelector($target);
    let offset = this.headerHeight + 10;

    if (this.isPage) {
      offset = -offset + 2;
    }

    velocity(target, 'scroll', {
      duration: 400,
      offset,
      easing: 'ease-in-out',
      begin: () => {},
    });
  }
}
