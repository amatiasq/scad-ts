import type { Circle } from './2d/circle.js';
import type { Polygon } from './2d/polygon.js';
import type { Square } from './2d/square.js';
import type { Cube } from './3d/cube.js';
import type { Cylinder } from './3d/cylinder.js';
import type { Polyhedron } from './3d/polyhedron.js';
import type { Sphere } from './3d/sphere.js';

export type Shape =
  | Circle
  | Cube
  | Cylinder
  | Polygon
  | Polyhedron
  | Sphere
  | Square;

export * from './2d/circle.js';
export * from './2d/polygon.js';
export * from './2d/square.js';
export * from './3d/cube.js';
export * from './3d/cylinder.js';
export * from './3d/polyhedron.js';
export * from './3d/sphere.js';
export * from './custom/rounded_cube.js';
export * from './custom/rounded_square.js';
