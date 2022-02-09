class Rectangle {
  #body;

  constructor(x, y, width, height, fill = 'yellow') {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fill = fill;
    this.#body = document.createElementNS(
      `http://www.w3.org/2000/svg`,
      'rect',
    );
  }

  get body() {
    return this.#body;
  }

  draw(parent = document.getElementById('svgContainer')) {
    this.#body.setAttributeNS(null, 'x', this.x);
    this.#body.setAttributeNS(null, 'y', this.y);
    this.#body.setAttributeNS(null, 'width', this.width);
    this.#body.setAttributeNS(null, 'height', this.height);
    this.#body.setAttributeNS(null, 'fill', this.fill);
    this.#body.setAttributeNS(null, 'class', 'rct');
    parent.prepend(this.#body);
  }
}

export default Rectangle;
