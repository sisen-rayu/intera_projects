import velocity from 'velocity-animate';
import isMobile from '../util/isMobile';

export default class ScrollToTop {
  constructor() {
    this.isMobile = isMobile();
    this.$target = document.querySelector('#wrapper');
    this.$scrollButton = document.querySelector('.js-scrollToTop');
    // this.$qoo = document.querySelector('.js-scrollToTopQoo');

    this.pageHeight = 0;
    this.addEvent();
  }

  /**
   * イベントまとめたやつ
   */
  addEvent() {
    window.addEventListener('load', () => {
      this.updatePageHeight();
    });
    this.$scrollButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.scroll();
    });
  }

  updatePageHeight() {
    this.pageHeight = Math.round(this.$target.clientHeight);
  }

  /**
   * スクロール
   */
  scroll() {
    if (!this.isMobile) {
      const duration = this.pageHeight > window.innerHeight * 2 ? 1500 : 500;
      let offsetTop = Math.round(
        this.$qoo.getBoundingClientRect().top
          + (window.pageYOffset || document.documentElement.scrollTop),
      );
      offsetTop += Math.round(offsetTop / 10);
      this.$qoo.classList.add('active');

      velocity(
        this.$qoo,
        {
          translateY: [-offsetTop, 0],
        },
        {
          duration: duration + 200,
          easing: [0.43, 0.54, 0.63, 0.55],
          begin: () => {
            this.$qoo.classList.add('will_change_transform');
          },
          complete: () => {
            this.$qoo.classList.remove('active');
            this.$qoo.classList.remove('will_change_transform');
            this.$qoo.style.transform = 'translateY(0)';
            this.$qoo.style.webkitTransform = 'translateY(0)';
          },
        },
      );
      velocity(this.$target, 'scroll', {
        duration,
        easing: 'linear',
      });
    } else {
      velocity(this.$target, 'scroll', {
        duration: 400,
        easing: 'ease-in-out',
      });
    }
  }
}
