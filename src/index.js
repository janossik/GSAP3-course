import gsap from 'gsap';

window.addEventListener('mousemove', (e) => {
  gsap.set('#feTile', {
    attr: { width: e.clientX, height: e.clientY },
  });
});
