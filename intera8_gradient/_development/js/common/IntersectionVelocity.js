import velocity from 'velocity-animate';

/**
 * IntersectionObserberによって発火されるVelocityアニメーション
 * .scrollObserve自身も含む
 * <style id="scrollObserveCSS"> *[data-effect] { opacity: 0; } </style>
 */
export default class IntersectionVelocity {
  constructor(selector = '.scrollObserve') {
    this.$ = Array.from(document.querySelectorAll(selector));
    this.initialize();
    this.startObservation();
  }

  initialize() {
    this.$.forEach($element => {
      Array.from($element.querySelectorAll('[data-effect]'), $target => {
        $target.style.opacity = 0;
      });
      if ($element.hasAttribute('data-effect')) $element.style.opacity = 0;
    });
    const $style = document.querySelector('#scrollObserveCSS');
    if ($style) $style.parentNode.removeChild($style);
  }

  startObservation() {
    const observer = new IntersectionObserver(
      (entries, object) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          this.applyVelocity(entry.target);
          object.unobserve(entry.target);
        });
      },
      {
        rootMargin: '-100px -100px',
        threshold: [0.1],
      }
    );

    this.$.forEach($target => {
      observer.observe($target);
    });
  }

  applyVelocity($element) {
    const $targets = Array.from($element.querySelectorAll('[data-effect]'));
    if ($element.hasAttribute('data-effect')) $targets.push($element);

    $targets.forEach($target => {
      const effect = JSON.parse($target.dataset.effect);
      const delay = $target.dataset.delay || 0;
      let easing = $target.dataset.easing || [250, 30];
      const duration = $target.dataset.duration || 700;
      const css = $target.dataset.css ? JSON.parse($target.dataset.css) : {};
      const slideIn = $target.dataset.slidein;
      let $img;
      if (easing.indexOf('[') === 0) {
        easing = JSON.parse(easing);
      }
      if (slideIn) {
        $img = $target.querySelector('img');
        effect.width = [$target.clientWidth, 0];
        effect.height = [$target.clientHeight, $target.clientHeight];
        $img.style.width = `${$target.clientWidth}px`;
        $img.style.height = `${$target.clientHeight}px`;
      }
      Array.from(Object.keys(css), key => {
        $target.style[key] = css[key];
      });
      velocity($target, effect, {
        duration,
        delay,
        easing,
        mobileHA: false,
        complete: () => {
          $target.setAttribute('style', '');
          if ($img) $img.setAttribute('style', '');
        },
      });
    });
  }
}
