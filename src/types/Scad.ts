import { Modifier } from '../modifiers.js';
import { Operation } from '../operations.js';
import { Shape } from '../shapes/index.js';
import { Transformation } from '../transformations/index.js';

export type Scad = Modifier | Operation | Shape | Transformation;
