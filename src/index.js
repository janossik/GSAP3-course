import gsap from 'gsap';

const addImage = (i) => {
  const img = document.createElement('img');
  img.src = `images/${i}.png`;
  img.style.position = 'absolute';
  img.className = 'code';
  document.getElementById('root').prepend(img);
};

for (let i = 1; i <= 22; i += 1) {
  addImage(i);
}

let skip = 1;
let increment = 2;
let angleZ = 0;
let angleY = 0;

window.addEventListener('mousemove', () => {
  if (skip % 5 === 0) {
    if (angleY < -89) {
      if (angleY % 90 === 0) {
        increment *= -1;
      }
    }
    gsap.to('.code', {
      duration: 2,
      rotateY: angleY,
      rotateZ: -angleZ,
      stagger: 0.1,
    });
    skip += 1;
    angleY -= 5 * Math.abs(increment);
    angleZ += increment;
  }
  skip += 1;
});
