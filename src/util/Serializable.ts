import { Scad } from '../types/Scad.js';
import { serialize } from './serialize.js';

export interface ScadSerializeMethod {
  serialize: typeof serialize;
}

export type Serializable = Scad & ScadSerializeMethod;

const proto = { serialize };

export const isScadSerializable = (x: any): x is ScadSerializeMethod =>
  proto.isPrototypeOf(x);

export function serializable<T>(x: T): T & Serializable {
  return { ...x, __proto__: proto } as any;
}
