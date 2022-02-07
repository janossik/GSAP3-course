import gsap from 'gsap';

const circleA = document.getElementById('a');
const circleB = document.getElementById('b');
const circleC = document.getElementById('c');

gsap.to(circleA, {
  duration: 3,
  delay: 2,
  x: 700,
  repeat: -1,
  ease: 'none',
});
gsap.from(circleB, {
  duration: 3,
  delay: 2,
  x: 700,
  repeat: -1,
  ease: 'none',
});
gsap.fromTo(
  circleC,
  {
    x: 200,
  },
  {
    duration: 3,
    delay: 2,
    x: 700,
    repeat: -1,
    ease: 'none',
  },
);
