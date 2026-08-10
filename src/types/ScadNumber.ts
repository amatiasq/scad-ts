import { isNumber } from '../util/type-guards.js';
import { isScadStatement, ScadStatement } from './ScadStatement.js';

export type ScadNumber = number | ScadStatement;

export function isScadNumber(x: any): x is ScadNumber {
  return isNumber(x) || isScadStatement(x);
}
