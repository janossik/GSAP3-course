import gsap from 'gsap';

gsap.to('#root', {
  delay: 1,
  duration: 2,
  scale: 4,
  x: '+=100%',
  y: '+=100%',
  repeat: -1,
  yoyo: true,
});
