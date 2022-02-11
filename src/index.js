import gsap from 'gsap';

gsap.to('#feTurbulence', {
  duration: 20,
  attr: { baseFrequency: 0.01 },
  repeat: -1,
  yoyo: true,
});
