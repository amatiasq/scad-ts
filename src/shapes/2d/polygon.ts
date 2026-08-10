// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/2D_Primitives#polygon

import { ScadNumber } from '../../types/ScadNumber.js';
import { ScadVector2 } from '../../types/ScadVector.js';
import { undef } from '../../types/undef.js';
import { Vector2 } from '../../types/Vector.js';
import { vector2 } from '../../util/vector-conversion.js';
import { IShape, shape } from '../internals.js';

export type Polygon = IShape<
  'polygon',
  {
    points?: ScadVector2[] | undef;
    paths?: ScadNumber[][] | ScadNumber[] | undef;
    convexity: ScadNumber;
  }
>;

export function polygon(
  points = polygon.defaultPoints,
  paths = polygon.defaultPaths,
  convexity = polygon.defaultConvexity
) {
  return shape('polygon', {
    points: Array.isArray(points) ? points.map((x) => vector2(x)) : points,
    paths,
    convexity,
  });
}

polygon.defaultPoints = undef as Vector2[] | undef;
polygon.defaultPaths = undef as ScadNumber[][] | ScadNumber[] | undef;
polygon.defaultConvexity = 1 as ScadNumber;
