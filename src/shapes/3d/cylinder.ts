// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Primitive_Solids#cylinder

import { ScadNumber } from '../../types/ScadNumber.js';
import { ScadRoundingVariables } from '../../types/ScadRoundingVariables.js';
import { IShape, shape } from '../internals.js';

type CylinderRadius = { r: ScadNumber } | { r1: ScadNumber; r2: ScadNumber };

export type Cylinder = IShape<
  'cylinder',
  { h: ScadNumber; center?: boolean } & CylinderRadius & ScadRoundingVariables
>;

export function cylinder(
  height = cylinder.defaultHeight,
  radius = cylinder.defaultRadius,
  params = cylinder.defaultParams
) {
  const r = Array.isArray(radius)
    ? { r1: radius[0], r2: radius[1] }
    : { r: radius };

  return shape('cylinder', {
    h: height,
    ...r,
    ...params,
  });
}

cylinder.defaultHeight = 1 as ScadNumber;
cylinder.defaultRadius = 1 as ScadNumber | [ScadNumber, ScadNumber];
cylinder.defaultParams = {} as ScadRoundingVariables & { center?: boolean };
