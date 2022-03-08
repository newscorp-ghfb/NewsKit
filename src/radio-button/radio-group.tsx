import React, {useCallback} from 'react';
import {useControlled} from '../utils/hooks';

type RadioGroupContextValue = {
  name: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  value: string | undefined;
};

type RadioGroupProps = {
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  children?: React.ReactNode;
};

const RadioGroupContext = React.createContext<
  RadioGroupContextValue | undefined
>(undefined);

export const RadioGroup = ({
  children,
  defaultValue,
  name,
  onChange,
  value: valueProp,
}: RadioGroupProps) => {
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
      <div role="radiogroup">{children}</div>
    </RadioGroupContext.Provider>
  );
};

export const useRadioGroup = (): RadioGroupContextValue | undefined =>
  React.useContext(RadioGroupContext);
