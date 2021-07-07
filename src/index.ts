import * as p5 from 'p5';

const Sketch = (sketch: p5) => {
  sketch.setup = () => {
    sketch.createCanvas(400, 400);
  };

  sketch.draw = () => {
    sketch.background(51);
  };
};

new p5(Sketch);
