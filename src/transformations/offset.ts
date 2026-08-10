// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#offset

import { ScadNumber } from '../types/ScadNumber.js';
import type { Chainable } from '../util/Chainable.js';
import { ITransformation, transformation } from './internals.js';

export type Offset = ITransformation<
  'offset',
  { r: ScadNumber } | { delta: ScadNumber; chamfer: boolean }
>;

export function radius_offset(this: Chainable, r: ScadNumber) {
  return transformation('offset', this, { r });
}

export function delta_offset(
  this: Chainable,
  delta: ScadNumber,
  chamfer = delta_offset.defaultChamfer
) {
  return transformation('offset', this, { delta, chamfer });
}

delta_offset.defaultChamfer = false;
