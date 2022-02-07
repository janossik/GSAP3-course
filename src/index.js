import gsap from 'gsap';

gsap.to('.rect', {
  delay: 1,
  duration: 3,
  rotate: 2880,
  skewX: 45,
  fill: 'yellow',
  ease: 'power1.in',
});
