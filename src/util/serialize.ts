import { ScadNumber } from '../types/ScadNumber.js';
import { isScadStatement } from '../types/ScadStatement.js';
import { isScadUndef, undef } from '../types/undef.js';
import { isScadModifier } from './isScadModifier.js';
import { Serializable } from './Serializable.js';

// type KeysOfUnion<T> = T extends T ? keyof T: never;
// type ValuesOfUnion<T, K extends keyof T> = T extends keyof T ? keyof T: never;

type SerializableWithParams = Extract<Serializable, { params: any }>;
type Params = SerializableWithParams['params'];
// type Keys = KeysOfUnion<Params>
type Value = any;
type Variables = Record<string, ScadNumber>;

export function serialize(this: Serializable, vars: Variables = {}): string {
  const variables = Object.entries(vars)
    .map(([a, b]) => `${a} = ${b};\n`)
    .join('');

  const result = serializeRecursive(this, 0).replace(/, auto = false/g, '');

  return `${variables}${result}`;
}

const indent = (n: number) => ' '.repeat(2 * n);

function serializeRecursive(target: Serializable, depth: number): string {
  const params = 'params' in target ? target.params : null;
  const tab = indent(depth);

  if (isScadModifier(target)) {
    const child = serializeRecursive(target.children, depth);
    return `${tab}${target.type}${child.trimStart()}`;
  }

  const output = `${tab}${target.type}(${parameters(params)})`;

  if (!('children' in target)) {
    return `${output};\n`;
  }

  if (!Array.isArray(target.children)) {
    return `${output} ${serializeRecursive(target.children, depth)}`;
  }

  const children = target.children
    .map((child) => serializeRecursive(child, depth + 1))
    .join('');

  return `${output} {\n${children}${tab}}\n`;
}

function parameters(params: Params | null) {
  if (!params) return '';

  return Object.entries(params)
    .map(([name, value]) => `${name} = ${stringify(value)}`)
    .join(', ');
}

function stringify(x: Value) {
  if (isScadUndef(x)) {
    return undef;
  }

  if (typeof x == 'string') {
    return isScadStatement(x) ? x : `"${x}"`;
  }

  return JSON.stringify(x).replace(/"/g, '').replace(/,/g, ', ');
}
