// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#color

import { ScadColor } from '../types/ScadColor.js';
import { ScadNumber } from '../types/ScadNumber.js';
import type { Chainable } from '../util/Chainable.js';
import { ITransformation, transformation } from './internals.js';

export type Color = ITransformation<
  'color',
  { c: ScadColor; alpha: ScadNumber }
>;

export function color(
  this: Chainable,
  code: ScadColor,
  alpha = color.defaultAlpha
) {
  return transformation('color', this, { c: code, alpha });
}

color.defaultAlpha = 1 as ScadNumber;
