// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#translate

import { isScadNumber, ScadNumber } from '../types/ScadNumber.js';
import { ScadVector } from '../types/ScadVector.js';
import { Vector } from '../types/Vector.js';
import { Chainable } from '../util/Chainable.js';
import { vector } from '../util/vector-conversion.js';
import { ITransformation, transformation } from './internals.js';

export type Translate = ITransformation<'translate', { v: ScadVector }>;

export function translate(this: Chainable, v: Vector | ScadNumber) {
  return transformation('translate', this, {
    v: vector<ScadNumber>(v, isScadNumber),
  });
}

export function translate_x(this: Chainable, x: ScadNumber) {
  return translate.call(this, [x, 0, 0]);
}

export function translate_y(this: Chainable, y: ScadNumber) {
  return translate.call(this, [0, y, 0]);
}

export function translate_z(this: Chainable, z: ScadNumber) {
  return translate.call(this, [0, 0, z]);
}
