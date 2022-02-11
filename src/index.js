import gsap from 'gsap';

const element = document.getElementById('feTurbulence');
let frequency = 0.02;
let yoyo = false;

const animation = () => {
  if (frequency > 0.04) {
    yoyo = true;
  } else if (frequency < 0.02) {
    yoyo = false;
  }
  frequency += yoyo ? -0.00005 : 0.00005;
  element.setAttribute('baseFrequency', frequency);
};

const main = () => {
  animation();
  window.requestAnimationFrame(main);
};

window.requestAnimationFrame(main);

/* gsap.to('#feTurbulence', {
  duration: 20,
  attr: { baseFrequency: 0.01 },
  repeat: -1,
  yoyo: true,
});
 */
