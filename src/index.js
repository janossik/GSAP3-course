import gsap from 'gsap';

const svg = document.getElementById('svgContainer');
const urlSvg = 'http://www.w3.org/2000/svg';

let index = 0;

class Circle {
  #body;

  constructor(x = 100, y = 100, radius = 100, fill = 'yellow') {
    this.id = `circle-${index}`;
    this.className = 'circle';
    this.position = { x, y };
    this.radius = radius;
    this.fill = fill;
    this.createBody();
    index += 1;
  }

  get body() {
    return this.#body;
  }

  createBody() {
    this.#body = document.createElementNS(urlSvg, this.className);
    this.#body.setAttributeNS(null, 'id', this.id);
    this.#body.setAttributeNS(null, 'class', this.className);
  }

  draw(parent) {
    this.body.setAttributeNS(null, 'cx', this.position.x);
    this.body.setAttributeNS(null, 'cy', this.position.y);
    this.body.setAttributeNS(null, 'r', this.radius);
    this.body.setAttributeNS(null, 'fill', this.fill);
    parent.appendChild(this.body);
  }
}

const figureAssembly = (quantity = 40) => {
  const x = 600;
  const y = 300;
  let r = 200;
  let color = 'yellow';
  for (let j = 0; j < quantity; j += 1) {
    if (r < 1) {
      return;
    }
    const circle = new Circle(x, y, r, color);
    circle.body = '23';
    circle.draw(svg);
    r -= 5;
    if (j % 2 === 0) {
      color = 'black';
    } else {
      color = 'yellow';
    }
  }
};

figureAssembly(40);

window.addEventListener(
  'mousemove',
  (e) => {
    gsap.to('.circle', {
      duration: 0.5,
      x: e.pageX - 600,
      y: e.pageY - 300,
      ease: 'power1.out',
      stagger: 0.05,
    });
  },
  false,
);
