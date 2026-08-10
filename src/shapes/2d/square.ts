// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/2D_Primitives#square

import { ScadNumber } from '../../types/ScadNumber.js';
import { ScadVector2 } from '../../types/ScadVector.js';
import { Vector2 } from '../../types/Vector.js';
import { vector2 } from '../../util/vector-conversion.js';
import { IShape, shape } from '../internals.js';

export type Square = IShape<
  'square',
  { size: ScadVector2 | ScadNumber; center?: boolean }
>;

export function square(
  size = square.defaultSize,
  center = square.defaultCenter
) {
  return shape('square', {
    size: vector2(size),
    center,
  });
}

square.defaultSize = [1, 1] as Vector2 | ScadNumber;
square.defaultCenter = false;
