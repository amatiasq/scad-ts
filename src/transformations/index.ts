import type { Color } from './color.js';
import type { LinearExtrude } from './extrusion/linear_extrude.js';
import type { RotateExtrude } from './extrusion/rotate_extrude.js';
import type { Mirror } from './mirror.js';
import type { Offset } from './offset.js';
import type { Projection } from './projection.js';
import type { Resize } from './resize.js';
import type { Rotate } from './rotate.js';
import type { Scale } from './scale.js';
import type { Translate } from './translate.js';

export type Transformation =
  | Color
  | LinearExtrude
  | Mirror
  | Offset
  | Projection
  | Resize
  | Rotate
  | RotateExtrude
  | Scale
  | Translate;

export * from './color.js';
export * from './extrusion/linear_extrude.js';
export * from './extrusion/rotate_extrude.js';
export * from './mirror.js';
export * from './offset.js';
export * from './projection.js';
export * from './resize.js';
export * from './rotate.js';
export * from './scale.js';
export * from './translate.js';
