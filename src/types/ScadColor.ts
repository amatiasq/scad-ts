import { ScadNumber } from './ScadNumber.js';

type RGB = [ScadNumber, ScadNumber, ScadNumber];
type RGBA = [ScadNumber, ScadNumber, ScadNumber];

export type ScadColor = RGB | RGBA | string;
