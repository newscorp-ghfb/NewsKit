import React, {useState} from 'react';
import {SliderProps, StatefulSliderProps} from './types';
import {Slider} from './slider';

export const StatefulSlider: React.FC<StatefulSliderProps> = ({
  values,
  ...props
}) => {
  const [stateValues, setValues] = useState(values);
  const onChange: SliderProps['onChange'] = newValues => {
    setValues(newValues);
    if (props.onChange) {
      props.onChange(newValues);
    }
  };
  return <Slider {...props} values={stateValues} onChange={onChange} />;
};
