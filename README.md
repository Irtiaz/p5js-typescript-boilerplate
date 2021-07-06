### p5js-typescript-boilerplate

Clone this repo and then run

```
npm install
```

---

If you want to change the default `index.html` then edit `dist/index.html` file that is already created for you. And the main sketch is located at `src/index.ts`.

Remember, **globals are evil**. So this sketch uses p5's instance mode. [Learn about p5 instance mode](https://p5js.org/reference/#/p5/p5). Import `p5` as instance mode like so -

```typescript
import * as p5 from 'p5';

//Now let's say we want to draw a rectangle, we call
p5.rect(x, y, w, h);
```

When adding multiple typescript files, simply use `import` to import the modules to link. You _do not_ need `<script>` tag to link! So in every module that uses p5 will need to import p5. You might need to pass the `p5` object from the `index.ts` file like so

```typescript
//In index.ts file
import * as p5 from 'p5';
import drawRect from './drawRect';

//other stuff ...

p5.draw = () => {
  drawRect(p5, 0, 0, 100, 100);
};

//In drawRect.ts file
import * as p5 from 'p5';
export default function drawRect(
  p5: p5,
  x: number,
  y: number,
  w: number,
  h: number
) {
  p5.rect(x, y, w, h);
}
```

To add any asset simply put it in the `dist` folder

---

To run the developent server run

```
npm run dev
```

and visit `http://localhost:3000/`

---

To build the project run

```
npm run build
```

Building the project will create a `dist` folder containing `index.html` and necessary `javascript` files.

This project uses [webpack](https://webpack.js.org/) under the hood to link everything together
