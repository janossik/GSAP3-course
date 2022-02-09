import gsap from 'gsap';

const svg = document.getElementById('svgContainer');
const urlSvg = 'http://www.w3.org/2000/svg';

let index = 0;

class Circle {
  #body;

  constructor(x = 100, y = 100, radius = 100, fill = 'snow') {
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
    this.body.setAttributeNS(null, 'stroke', this.fill);
    this.body.setAttributeNS(null, 'stroke-width', 10);
    this.body.setAttributeNS(null, 'stroke-dasharray', '100%, 0');
    parent.appendChild(this.body);
  }
}

const figureAssembly = (quantity = 40) => {
  const x = 450;
  const y = 350;
  let r = 300;
  const color = 'snow';
  for (let j = 0; j < quantity; j += 1) {
    if (r < 1) {
      return;
    }
    const circle = new Circle(x, y, r, color);
    circle.draw(svg);
    r -= 15;
  }
};

figureAssembly(20);

document.addEventListener('click', () => {
  gsap.to('.circle', {
    duration: 2,
    delay: 1,
    repeatDelay: 1,
    strokeDasharray: `0, 100%`,
    yoyo: true,
    ease: 'power1.inOut',
    repeat: -1,
    stagger: (i) => {
      let gap = 0.2;
      if (i % 2 === 0) {
        gap = 0.05;
      } else if (i % 3 === 0) {
        gap = 0.1;
      } else {
        gap = 0.2;
      }
      return gap * i;
    },
  });
});
