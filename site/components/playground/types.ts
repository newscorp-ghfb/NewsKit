import React from 'react';
import {MultiChoiceKnobOptions} from './knobs/multichoice-knob';

type StringKeys<P> = Extract<keyof P, string>;

interface GenericKnobConfig<T extends GenericComponent> {
  name: string;
  propName: StringKeys<React.ComponentProps<T>>;
}

export interface BooleanKnobConfig<T extends GenericComponent>
  extends GenericKnobConfig<T> {
  value: boolean;
}

export interface InputKnobConfig<T extends GenericComponent>
  extends GenericKnobConfig<T> {
  value: string | number;
}

export interface ArrayKnobConfig<T extends GenericComponent>
  extends GenericKnobConfig<T> {
  value: unknown[];
}

export interface MultiChoiceKnobConfig<T extends GenericComponent>
  extends GenericKnobConfig<T> {
  options: MultiChoiceKnobOptions[];
}

export type KnobsConfig<T extends GenericComponent> =
  | BooleanKnobConfig<T>
  | InputKnobConfig<T>
  | ArrayKnobConfig<T>
  | MultiChoiceKnobConfig<T>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericComponent = React.ComponentType<any>;

export interface PlaygroundProps<T extends GenericComponent> {
  componentName: string | string[];
  component: T | T[];
  knobs: KnobsConfig<T>[];
}
