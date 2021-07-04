import * as p5 from 'p5';

const Sketch = (p5: p5) => {
  p5.setup = () => {
    p5.createCanvas(400, 400);
  };

  p5.draw = () => {
    p5.background(51);
    p5.fill(0, 0, 255);
  };
};

new p5(Sketch);
