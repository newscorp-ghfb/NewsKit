import {MultiChoiceKnobOptions} from './knobs/multichoice-knob';

export interface BooleanKnobConfig {
  name: string;
  propName: string;
  value: boolean;
}

export interface TextKnobConfig {
  name: string;
  propName: string;
  value: string;
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
  | TextKnobConfig
  | ArrayKnobConfig
  | MultiChoiceKnobConfig;

export interface PlaygroundProps {
  componentName: string | string[];
  newskitPath: string;
  component: React.ComponentType | React.ComponentType[];
  knobs: KnobsConfig[];
}
