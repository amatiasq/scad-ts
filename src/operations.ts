import { chain, Chainable } from './util/Chainable.js';
import { ScadSerializeMethod } from './util/Serializable.js';

interface IOperation<Name extends string> {
  type: Name;
  children: Chainable[];
}

const operation =
  <
    Name extends Operation['type'],
    Type extends Extract<Operation, { type: Name }>
  >(
    type: Name
  ) =>
  (...children: ScadSerializeMethod[]) =>
    chain({ type, children } as Type);

// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling#difference
export type Difference = IOperation<'difference'>;
export const difference = operation('difference');

// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#hull
export type Hull = IOperation<'hull'>;
export const hull = operation('hull');

// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling#intersection
export type Intersection = IOperation<'intersection'>;
export const intersection = operation('intersection');

// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#minkowski
export type Minkowski = IOperation<'minkowski'>;
export const minkowski = operation('minkowski');

// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling#union
export type Union = IOperation<'union'>;
export const union = operation('union');

// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling#render
export type Render = IOperation<'render'>;
export const render = operation('render');

export type Operation =
  | Difference
  | Hull
  | Intersection
  | Minkowski
  | Render
  | Union;
