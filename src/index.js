import gsap from 'gsap';
import RectangleFactory from './RectangleFactory';

const originalMatrix = [];
const snail = [];

function assemblingRectangles() {
  let x = 45;
  let y = 60;
  const width = 15;
  const height = 15;
  const quantRow = 19;
  const quantColumn = 27;
  const stepX = 30;
  const stepY = 30;
  let i = -1;

  for (let j = 0; j < quantRow; j += 1) {
    x = 45;
    originalMatrix[j] = [];
    for (let k = 0; k < quantColumn; k += 1) {
      i += 1;
      originalMatrix[j].push(i);
      RectangleFactory.createRectangle(
        x,
        y,
        width,
        height,
        'yellow',
      ).draw();
      x += stepX;
    }
    y += stepY;
  }
}
assemblingRectangles();

function buildSnail(arr) {
  const src = arr.map((a) => a.slice());
  const pushAll = (e) => snail.push(e);
  let fase = 0;
  while (src.filter((a) => a.length > 0).length > 0) {
    fase += 1;
    switch (fase % 4) {
      case 0:
        src.splice(0, 1)[0].forEach(pushAll);
        break;
      case 1:
        src.map((a) => a.splice(-1)[0]).forEach(pushAll);
        break;
      case 2:
        src.splice(-1)[0].reverse().forEach(pushAll);
        break;
      case 3:
        src
          .map((a) => a.splice(0, 1)[0])
          .reverse()
          .forEach(pushAll);
        break;
      default:
        break;
    }
  }
  return snail;
}
buildSnail(originalMatrix);

gsap.to(RectangleFactory.rectangles, {
  duration: 0.2,
  repeatDelay: 1,
  scale: 0,
  repeat: -1,
  yoyo: true,
  ease: 'back.in(9)',
  stagger(index) {
    return snail.indexOf(index) * 0.01;
  },
});
