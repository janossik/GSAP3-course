import gsap from 'gsap';

const imagesData = [
  { id: 'comet', x: '820', y: '-270', href: 'images/comet.png' },
  { id: 'comet', x: '980', y: '-300', href: 'images/comet.png' },
  { id: 'comet', x: '1240', y: '-190', href: 'images/comet.png' },
  { id: 'comet', x: '1150', y: '-250', href: 'images/comet.png' },
  { id: 'space1', x: '0', y: '0', href: 'images/space1.png' },
  { id: 'space2', x: '0', y: '0', href: 'images/space2.png' },
  { id: 'plane', x: '-2400', y: '500', href: 'images/plane.png' },
  { id: 'body', x: '0', y: '460', href: 'images/body.png' },
  { id: 'head', x: '15', y: '396', href: 'images/head.png' },
];

const svg = document.getElementById('root');

const addImageToSVG = ({ id, x, y, href }) => {
  svg.innerHTML += `<image id="${id}" xlink:href="${href}" x="${x}" y="${y}"></image>`;
};

imagesData.forEach((image) => {
  addImageToSVG(image);
});

gsap.to('#comet', {
  duration: 30,
  x: '-=1600',
  y: '+=1600',
  repeat: -1,
  ease: 'power1.in',
});

window.addEventListener('mousemove', (e) => {
  gsap.set('#body', { transformOrigin: '50% 50%' });
  gsap.to('#body', { duration: 1, x: e.pageX, rotation: e.pageX });
  gsap.to('#head', { duration: 1.02, x: e.pageX });
  gsap.to('#space1', { duration: 1, x: -e.pageX / 10 });
  gsap.to('#space2', { duration: 1, x: -e.pageX / 20 });
  gsap.to('#plane', {
    duration: 1,
    x: -e.pageX / 5,
    rotation: e.pageX / 10000,
  });
});

let jump = false;

document.addEventListener('click', (e) => {
  if (!jump) {
    jump = true;
    gsap.to('#body', {
      duration: 0.15,
      y: -60,
      repeat: 1,
      yoyo: true,
      ease: 'power1.out',
    });
    gsap.to('#head', {
      duration: 0.18,
      y: -70,
      repeat: 1,
      yoyo: true,
      ease: 'power1.out',
    });
    setTimeout(() => {
      jump = false;
    }, 2 * 180);
  }
});
