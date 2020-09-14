import {MultiChoiceKnobOptions} from './knobs/multichoice-knob';

export interface BooleanKnobConfig {
  name: string;
  propName: string;
  value: boolean;
}

export interface InputKnobConfig {
  name: string;
  propName: string;
  value: string;
}

export interface NumberKnobConfig {
  name: string;
  propName: string;
  value: number;
}

export interface ArrayKnobConfig {
  name: string;
  propName: string;
  value: unknown[];
}

export interface MultiChoiceKnobConfig {
  name: string;
  propName: string;
  options: MultiChoiceKnobOptions[];
}

export type KnobsConfig =
  | BooleanKnobConfig
  | InputKnobConfig
  | ArrayKnobConfig
  | MultiChoiceKnobConfig;

export interface PlaygroundProps {
  componentName: string | string[];
  component: React.ComponentType | React.ComponentType[];
  knobs: KnobsConfig[];
}
