/* eslint-disable no-new */
import gsap from 'gsap';

class StaggerImage {
  constructor(
    src,
    classNameWrapper,
    parent = document.getElementById('root'),
  ) {
    this.src = src;
    this.classNameWrapper = classNameWrapper;
    this.createImage(parent);
  }

  createWrapperImage() {
    const wrapper = document.createElement('div');
    wrapper.className = this.classNameWrapper;
    return wrapper;
  }

  createImageBody() {
    const image = document.createElement('img');
    image.setAttribute('src', this.src);
    return image;
  }

  createImage(parent = document.getElementById('root')) {
    this.wrapper = this.createWrapperImage();
    this.image = this.createImageBody();

    this.wrapper.append(this.image);
    parent.append(this.wrapper);
    return this.wrapper;
  }
}

const imageAssembly = () => {
  new StaggerImage(`assets/background.jpg`, 'image');

  for (let i = 1; i < 65; i += 1) {
    new StaggerImage(`assets/images/${i}.png`, 'block');
  }
  new StaggerImage(`assets/background.png`, 'image');
  new StaggerImage(`assets/background_white.png`, 'mask');
};
imageAssembly();

let count = 1;
let angle = 0;
const tl = gsap.timeline();

document.addEventListener('click', () => {
  angle += 360;
  if (count % 2 === 1) {
    tl.to('.block', {
      duration: 3,
      rotateZ: angle,
      x: 1200,
      ease: 'back.inOut(6)',
      stagger: {
        amount: 2.5,
        grid: 'auto',
        from: 'random',
        axis: 'x',
      },
    });
  } else {
    tl.to('.block', {
      duration: 3,
      x: 0,
      ease: 'back.inOut(7)',
      stagger: {
        amount: 1.5,
        grid: 'auto',
        from: 'center',
      },
    });
  }
  count += 1;
});
