import React from 'react';
import {MultiChoiceKnob} from './multichoice-knob';

export interface BooleanKnobProps {
  label: string;
  value: boolean;
  onChange?: (value: boolean) => void;
}

export const BooleanKnob: React.FC<BooleanKnobProps> = ({
  label,
  value,
  onChange,
}) => (
  <MultiChoiceKnob
    label={label}
    options={[
      {
        label: 'True',
        value: 'true',
      },
      {
        label: 'False',
        value: 'false',
      },
    ]}
    onChange={v => onChange && onChange(v === 'true')}
    value={value.toString()}
  />
);

export default BooleanKnob;
