import React from 'react';
import { MQ } from '../utils';
import { CheckboxState } from '../checkbox/types';
import { BaseSwitchState } from '../base-switch/types';
import { SwitchState } from '../switch/types';
export declare const checkboxStates: [
    string,
    {
        checked?: boolean;
        state?: CheckboxState;
    }
][];
export declare const switchStates: [
    string,
    {
        checked?: boolean;
        state?: SwitchState;
    }
][];
export declare const radioButtonStates: [
    string,
    {
        checked?: boolean;
        state?: BaseSwitchState;
    }
][];
interface ComponentData {
    name: string;
    component: ({ stylePreset }: {
        stylePreset?: MQ<string>;
    }) => React.ReactElement;
}
export declare const scenarios: Array<ComponentData>;
export {};
//# sourceMappingURL=scenarios.d.ts.map