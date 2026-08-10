import type { Chainable } from '../util/Chainable.js';
import { ITransformation, transformation } from './internals.js';

export type Projection = ITransformation<'projection', { cut: boolean }>;

export function projection(this: Chainable, cut = false) {
  return transformation('projection', this, { cut });
}
