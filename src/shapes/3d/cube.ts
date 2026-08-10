// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Primitive_Solids#cube

import { ScadNumber } from '../../types/ScadNumber.js';
import { ScadVector3 } from '../../types/ScadVector.js';
import { Vector3 } from '../../types/Vector.js';
import { vector3 } from '../../util/vector-conversion.js';
import { IShape, shape } from '../internals.js';

export type Cube = IShape<
  'cube',
  { size: ScadVector3 | ScadNumber; center: boolean }
>;

export function cube(size = cube.defaultSize, center = cube.defaultCenter) {
  return shape('cube', {
    size: vector3(size),
    center,
  });
}

cube.defaultSize = [1, 1, 1] as Vector3 | ScadNumber;
cube.defaultCenter = false;
