export * from './operations.js';
export * from './shapes/index.js';
export * from './types/Scad.js';
export * from './types/ScadColor.js';
export * from './types/ScadNumber.js';
export * from './types/ScadRoundingVariables.js';
export * from './types/ScadStatement.js';
export * from './types/ScadVariable.js';
export * from './types/ScadVector.js';
export * from './types/undef.js';
export * from './types/Vector.js';
// `export type` on the type re-exports, not decoration: the `bun` condition
// serves these `.ts` files raw, and Bun cannot tell a re-exported type from a
// re-exported value — it looks for `ScadMethods` at runtime and dies.
export { isScadChainable } from './util/Chainable.js';
export type {
  Chainable as ScadChainable,
  ScadMethods,
} from './util/Chainable.js';
export { isScadSerializable } from './util/Serializable.js';
export type { Serializable as ScadSerializable } from './util/Serializable.js';
export * from './util/type-guards.js';
export * from './util/vector-conversion.js';
