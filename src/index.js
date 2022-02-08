import gsap, { MotionPathPlugin } from 'gsap/all';

gsap.registerPlugin(MotionPathPlugin);

const tl = gsap.timeline({
  repeat: 2,
  repeatDelay: 5,
  defaults: {
    duration: 12,
    ease: 'power1.inOut',
  },
});

tl.to('#hand', {
  motionPath: {
    path: '#path',
    align: '#path',
    alignOrigin: [0.5, 0.5],
  },
}).to(
  '#path',
  {
    strokeDasharray: `${'4046'}, ${'0'}`,
  },
  '<',
);

document.getElementById('pause').onclick = () => tl.pause();
document.getElementById('play').onclick = () => tl.play();
document.getElementById('reverse').onclick = () => tl.reverse();
document.getElementById('seek').onclick = () => tl.seek();
document.getElementById('restart').onclick = () => tl.restart();
