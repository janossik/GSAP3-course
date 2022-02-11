import gsap from 'gsap';

class Teleport {
  constructor({
    id = 'teleport',
    color = 'black',
    height = 160,
    width = 80,
    x = 0,
    y = 0,
  }) {
    this.id = id;
    this.height = height;
    this.width = width;
    this.color = color;
    this.rx = width / 2;
    this.ry = height / 2;
    this.x = x + this.rx;
    this.y = y + this.ry;
    this.strokeWidth = 3;
    this.body = this.#createTeleport();
  }

  #createTeleport() {
    const body = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'ellipse',
    );
    body.setAttributeNS(null, 'stroke-width', this.strokeWidth);
    body.setAttributeNS(null, 'stroke', this.color);
    body.setAttributeNS(null, 'cx', this.x);
    body.setAttributeNS(null, 'cy', this.y);
    body.setAttributeNS(null, 'rx', this.rx - this.strokeWidth);
    body.setAttributeNS(null, 'ry', this.ry - this.strokeWidth);
    return body;
  }

  setTeleport({ color, height, width, x, y }) {
    if (height) {
      this.height = height;
      this.ry = height / 2;
    }
    if (y) {
      this.y = y;
    }
    if (width) {
      this.width = width;
      this.rx = width / 2;
    }
    if (x) {
      this.x = x;
    }
    if (color) {
      this.color = color;
    }
    this.body.setAttributeNS(null, 'stroke', this.color);
    this.body.setAttributeNS(null, 'cx', this.x);
    this.body.setAttributeNS(null, 'cy', this.y);
    this.body.setAttributeNS(null, 'rx', this.rx - this.strokeWidth);
    this.body.setAttributeNS(null, 'ry', this.ry - this.strokeWidth);
  }
}

const root = document.getElementById('root');
const switchTeleport = document.getElementById('switchTeleport');
const teleport = new Teleport({ color: 'red' });
const teleport2 = new Teleport({ color: 'blue', x: 500 });
const tl = gsap.timeline({
  defaults: { duration: 0.6, ease: 'linear' },
});
let activeTeleport = teleport2;

const move = (conut) => {
  let localCount = conut;
  if (localCount < 10) {
    tl.to('#wheel', {
      x: teleport2.x - 200,
      y: teleport2.y - 250,
    });
    tl.set('#wheel', {
      x: teleport.x - 200,
      y: teleport.y - 250,
    });
    localCount += 1;
    move(localCount);
  }
};

switchTeleport.addEventListener('click', () => {
  if (activeTeleport === teleport) {
    activeTeleport = teleport2;
    switchTeleport.innerText = 'Choose red teleport';
  } else {
    activeTeleport = teleport;
    switchTeleport.innerText = 'Choose blue teleport';
  }
});

root.addEventListener('click', (e) => {
  tl.clear();
  activeTeleport.setTeleport({
    x: e.pageX - teleport.width,
    y: e.pageY - teleport.height / 2,
  });
  move(0);
});

document.getElementById('root').append(teleport.body);
document.getElementById('root').append(teleport2.body);
