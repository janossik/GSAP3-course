import Rectangle from './Rectangle';

class RectangleFactory {
  constructor() {
    if (RectangleFactory.exists) {
      // eslint-disable-next-line no-constructor-return
      return this;
    }
    this.rectangles = [];
    RectangleFactory.exists = true;
    RectangleFactory.instance = this;
  }

  createRectangle(x, y, width, height, fill = 'yellow') {
    const rectangle = new Rectangle(x, y, width, height, fill);
    this.rectangles.push(rectangle.body);
    return rectangle;
  }
}

export default new RectangleFactory();
