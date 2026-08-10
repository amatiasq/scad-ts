import { ScadVariable } from './ScadVariable.js';

type ScadOperation = '+' | '-' | '*' | '/';

const variableRegex = /(\$fa|\$fs|\$fn|\$t|\$vpr|\$vpt|\$vpf|\$vpd|\$preview)/;
const operationRegex = /\d+\s*(\+|\-|\*|\/)\s*\d+/;

export type ScadStatement =
  | `${number}${ScadOperation}${number}`
  | `${string}${ScadVariable}${string}`;

export function isScadStatement(
  value: string | number
): value is ScadStatement {
  return (
    typeof value === 'string' &&
    (variableRegex.test(value) || operationRegex.test(value))
  );
}
