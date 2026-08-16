# scad-ts

Generate [OpenSCAD](https://www.openscad.org) solid models with TypeScript.

```ts
import { cube, cylinder, difference } from 'scad-ts';

const model = difference(cube(20, true), cylinder(30, 6).rotate_x(90));

console.log(model.serialize({ $fn: 60 }));
```

```scad
$fn = 60;
difference() {
  cube(size = 20, center = true);
  rotate(a = 90, v = [1, 0, 0]) {
    cylinder(h = 30, r = 6);
  }
}
```

Every shape is a plain object with a `type`, its `params` and, for
transformations, its `children`. `serialize` turns that tree into OpenSCAD
source; the chainable methods (`translate`, `rotate`, `color`, `linear_extrude`,
the modifiers `debug`/`disable`/`root`/`background`…) return new nodes, so a
model is just an expression you can build with functions.

## Install

```bash
pnpm add scad-ts
```

## ESM only

From 1.0.0 this package ships ES modules and nothing else — the CommonJS build
is gone. `require('scad-ts')` still works on Node 22.12 and newer, which loads
ES modules from `require`; on anything older, and on bundlers that only read
CommonJS, it fails. Stay on `0.3.0` if that is you.

## The `openscad` command

The package installs an `openscad` binary that runs your local OpenSCAD:

```bash
pnpm exec openscad model.scad
```

It looks at `$OPENSCAD`, then at `OpenSCAD.app` (macOS keeps the binary inside
an app bundle, off the PATH), then at `openscad` on the PATH. It never installs
anything; if nothing is found it tells you and exits 127.

## Relationship to `scad-js`

This is a fork of [`scad-js`](https://github.com/scad-js/scad-js) by
[20lives](https://github.com/20lives), rewritten so the types can be inferred
from the shape of the code. Upstream declined that restructuring, so the two
have diverged for good and this is not a drop-in replacement.

## Acknowledgements

`scad-js`, and the projects that inspired it:
[farrellm/scad-clj](https://github.com/farrellm/scad-clj),
[OpenJSCAD.org](https://openjscad.org/) and
[tasn/scadjs](https://github.com/tasn/scadjs). And OpenSCAD itself.

## License

MIT — see [LICENSE](LICENSE).
