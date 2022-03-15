import React, {useCallback} from 'react';
import {useControlled} from '../utils/hooks';
import {RadioGroupContextValue, RadioGroupProps} from './types';

const RadioGroupContext = React.createContext<
  RadioGroupContextValue | undefined
>(undefined);

export const RadioGroup = React.forwardRef<HTMLInputElement, RadioGroupProps>(
  (
    {children, defaultValue, name, onChange, value: valueProp, ...restProps},
    ref,
  ) => {
    const [value, setValueState] = useControlled({
      controlledValue: valueProp,
      defaultValue,
    });

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueState(event.target.value);

        if (onChange) {
          onChange(event);
        }
      },
      [setValueState, onChange],
    );
    return (
      <RadioGroupContext.Provider value={{name, onChange: handleChange, value}}>
        <div ref={ref} role="radiogroup" {...restProps}>
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  },
);

export const useRadioGroup = (): RadioGroupContextValue | undefined =>
  React.useContext(RadioGroupContext);
