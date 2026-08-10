import { chain, Chainable } from './util/Chainable.js';

interface IModified<Name extends string> {
  type: Name;
  children: Chainable;
}

const modifier = <Name extends Modifier['type']>(type: Name) => {
  type Result = Extract<Modifier, { type: Name }>;

  return function (this: Chainable) {
    return chain({ type, children: this } as Result);
  };
};

// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Modifier_Characters#Background_Modifier
export type Background = IModified<'%'>;
export const background = modifier('%');

// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Modifier_Characters#Debug_Modifier
export type Debug = IModified<'#'>;
export const debug = modifier('#');

// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Modifier_Characters#Root_Modifier
export type Root = IModified<'!'>;
export const root = modifier('!');

// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Modifier_Characters#Disable_Modifier
export type Disable = IModified<'*'>;
export const disable = modifier('*');

export type Modifier = Disable | Root | Debug | Background;
