// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#mirror

import { ScadVector } from '../types/ScadVector.js';
import type { Chainable } from '../util/Chainable.js';
import { ITransformation, transformation } from './internals.js';

export type Mirror = ITransformation<'mirror', { v: ScadVector }>;

export function mirror(this: Chainable, v: ScadVector) {
  return transformation('mirror', this, { v });
}

export function mirror_x(this: Chainable) {
  return mirror.call(this, [1, 0, 0]);
}

export function mirror_y(this: Chainable) {
  return mirror.call(this, [0, 1, 0]);
}

export function mirror_z(this: Chainable) {
  return mirror.call(this, [0, 0, 1]);
}
