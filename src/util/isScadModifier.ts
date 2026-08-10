import { Modifier } from '../modifiers.js';

const chars = ['*', '!', '#', '%'];

export function isScadModifier(x: any): x is Modifier {
  return 'type' in x && chars.includes(x.type);
}
