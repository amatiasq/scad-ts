import { hull } from '../../operations.js';
import { ScadRoundingVariables } from '../../types/ScadRoundingVariables.js';
import { Vector3 } from '../../types/Vector.js';
import { isNumber } from '../../util/type-guards.js';
import { vector3 } from '../../util/vector-conversion.js';
import { sphere } from '../3d/sphere.js';

export function rounded_cube(
  size = rounded_cube.defaultSize,
  radius = rounded_cube.defaultRadius,
  { center, ...params } = rounded_cube.defaultParams
) {
  const [x, y, z] = vector3(size, isNumber);
  const maxRadius = Math.min(x, y, z) / 2;
  const r = radius > 0 && radius < maxRadius ? radius : maxRadius / 8;
  const corner = sphere(r, params);

  const cube = hull(
    corner.translate([r, r, r]),
    corner.translate([x - r, r, r]),
    corner.translate([x - r, y - r, r]),
    corner.translate([r, y - r, r]),
    corner.translate([r, r, z - r]),
    corner.translate([x - r, r, z - r]),
    corner.translate([x - r, y - r, z - r]),
    corner.translate([r, y - r, z - r])
  );

  return center ? cube.translate([-x / 2, -y / 2, -z / 2]) : cube;
}

rounded_cube.defaultSize = 1 as number | Vector3<number>;
rounded_cube.defaultRadius = 0.125 as number;
rounded_cube.defaultParams = { center: true } as ScadRoundingVariables & {
  center: boolean;
};
