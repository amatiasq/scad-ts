import { ScadNumber } from './ScadNumber.js';

export type Vector2<T = ScadNumber> = readonly [T, T] | [T, T] | { x: T; y: T };
export type Vector3<T = ScadNumber> =
  | readonly [T, T, T]
  | [T, T, T]
  | { x: T; y: T; z: T };

export type Vector<T = ScadNumber> = Vector2<T> | Vector3<T>;

export function isVector2<T = unknown>(
  val: Vector2<T> | any,
  isPlain?: (x: any) => x is T
): val is Vector2<T> {
  if (!val || typeof val !== 'object') {
    return false;
  }

  if (Array.isArray(val) && val.length === 2) {
    return !isPlain || val.every(isPlain);
  }

  if ('x' in val && 'y' in val) {
    return !isPlain || (isPlain(val.x) && isPlain(val.y));
  }

  return false;
}

export function isVector3<T = unknown>(
  val: Vector3<T> | any,
  isPlain?: (x: any) => x is T
): val is Vector3<T> {
  if (!val || typeof val !== 'object') {
    return false;
  }

  if (Array.isArray(val) && val.length === 3) {
    return !isPlain || val.every(isPlain);
  }

  if ('x' in val && 'y' in val && 'z' in val) {
    return !isPlain || (isPlain(val.x) && isPlain(val.y) && isPlain(val.z));
  }

  return false;
}

export function isVector<T = unknown>(val: Vector<T> | any): val is Vector<T> {
  return isVector2(val) || isVector3(val);
}
