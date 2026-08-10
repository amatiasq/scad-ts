import {
  isScadVector2,
  isScadVector3,
  ScadVector,
  ScadVector2,
  ScadVector3,
} from '../types/ScadVector.js';
import {
  isVector2,
  isVector3,
  Vector,
  Vector2,
  Vector3,
} from '../types/Vector.js';

type Guard<T> = (x: any) => x is T;

export function vector2<T, U>(input: Vector2<T> | U): ScadVector2<T> | U;
export function vector2<T>(
  input: Vector2<T> | T,
  isPlain?: Guard<T>
): ScadVector2<T>;
export function vector2<T, U>(input: Vector2<T> | U, isPlain?: Guard<T>) {
  if (!isPlain) {
    if (isVector2(input)) {
      return toScadVector2(input);
    }

    return input;
  }

  if (isPlain(input)) {
    return [input, input];
  }

  if (isVector2(input, isPlain)) {
    return toScadVector2(input);
  }

  throwInvalidType(input);
}

export function vector3<T, U>(input: Vector3<T> | U): ScadVector3<T> | U;
export function vector3<T>(
  input: Vector3<T> | T,
  isPlain?: Guard<T>
): ScadVector3<T>;
export function vector3<T, U>(input: Vector3<T> | U, isPlain?: Guard<T>) {
  if (!isPlain) {
    if (isVector3(input)) {
      return toScadVector3(input);
    }

    if (isVector2(input)) {
      return toScadVector3(vector2(input as Vector2<T>));
    }

    return input;
  }

  if (isPlain(input)) {
    return [input, input, input];
  }

  if (isVector3(input, isPlain)) {
    return toScadVector3(input);
  }

  if (isVector2(input, isPlain)) {
    return toScadVector3(vector2(input, isPlain));
  }

  throwInvalidType(input);
}

export function vector<T>(
  input: Vector2<T> | T,
  isPlain: Guard<T>
): ScadVector2<T>;
export function vector<T>(
  input: Vector3<T> | T,
  isPlain: Guard<T>
): ScadVector3<T>;
export function vector<T>(
  input: Vector<T> | T,
  isPlain: Guard<T>
): ScadVector<T>;
export function vector<T, U>(input: Vector2<T> | U): ScadVector2<T> | U;
export function vector<T, U>(input: Vector3<T> | U): ScadVector3<T> | U;
export function vector<T, U>(input: Vector<T> | U): ScadVector<T> | U;
export function vector<T>(input: Vector2<T>): ScadVector2<T>;
export function vector<T>(input: Vector3<T>): ScadVector3<T>;
export function vector<T>(input: Vector<T>): ScadVector<T>;
export function vector<T, U>(
  input: Vector<T> | U,
  isPlain?: Guard<T>
): ScadVector<T> | U {
  if (isVector3(input, isPlain)) return toScadVector3(input);
  if (isVector2(input, isPlain)) return toScadVector2(input);
  return input;
}

function toScadVector2<T>(input: Vector2<T>): ScadVector2<T> {
  return isScadVector2(input) ? input : [input.x, input.y];
}

function toScadVector3<T>(input: Vector3<T> | ScadVector2<T>): ScadVector3<T> {
  if (isScadVector2(input)) return [...input, 0 as any as T];
  return isScadVector3(input) ? input : [input.x, input.y, input.z];
}

function throwInvalidType(input: unknown): never {
  console.error({ input });
  throw new Error('Invalid vector type');
}
