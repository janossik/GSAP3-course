import gsap from 'gsap';

document.body.style.background = 'red';
let index = 0;

class Triangle {
  constructor(x1, y1, x2, y2, x3, y3, fill, i, j) {
    this.id = `trg-${index}`;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.fill = fill;
    this.width = x3 - x2;
    this.height = y2 - y1;
    this.i = i;
    this.j = j;
    this.angle = -90 + j * 13.3;
    this.draw();
    index += 1;
  }

  draw() {
    const container = document.getElementById('svgContainer');
    if (!container) {
      throw new Error(
        'You must add svg element with id svgContainer',
      );
    }
    const xmlns = 'http://www.w3.org/2000/svg';
    const polygon = document.createElementNS(xmlns, 'polygon');
    polygon.setAttributeNS(null, 'id', this.id);
    polygon.setAttributeNS(null, 'class', 'triangle');
    polygon.setAttributeNS(null, 'fill', this.fill);
    polygon.setAttributeNS(
      null,
      'points',
      `${this.x1} ${this.y1} ${this.x2} ${this.y2} ${this.x3} ${this.y3} ${this.x1} ${this.y1}`,
    );
    container.append(polygon);

    if (typeof this.i === 'number' && typeof this.j === 'number') {
      gsap.set(polygon, {
        transformOrigin: '-50% -50%',
        rotate: this.angle,
      });
    }
  }

  static boardPrint(width = 40, height = 15) {
    const stepY = 6;
    const quantRows = Math.floor(
      (window.innerHeight - 60) / (height - 1),
    );
    const quantColumns = Math.floor(
      (window.innerWidth - 80) / (width - 2),
    );
    for (let i = 0; i < quantRows; i += 1) {
      let color = 'snow';
      if ((quantRows - quantRows / 8) / 2 < i) {
        color = 'red';
      }
      for (let j = 0; j < quantColumns; j += 1) {
        // eslint-disable-next-line no-new
        new Triangle(
          (width + 2) / 2 + width * j,
          stepY + height * i,
          2 + width * j,
          height + height * i,
          width + width * j,
          height + height * i,
          color,
          i,
          j,
        );
      }
    }
  }
}

Triangle.boardPrint();

document.addEventListener('click', () => {
  gsap.to([...document.getElementById('svgContainer').children], {
    duration: 50000,
    rotate: 3600000,
    repeat: -1,
    ease: 'linear',
    yoyo: true,
    stagger: 0.001,
  });
});
