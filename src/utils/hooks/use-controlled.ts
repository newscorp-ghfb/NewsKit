import React from 'react';

export interface UseControlledProps<T = unknown> {
  controlledValue: T | undefined;
  defaultValue: T | undefined;
}

export function useControlled<T = unknown>({
  controlledValue,
  defaultValue,
}: UseControlledProps<T>): [T | undefined, (state: T) => void] {
  const {current: isControlled} = React.useRef(controlledValue !== undefined);
  const [valueState, setValue] = React.useState(defaultValue);
  const value = isControlled ? controlledValue : valueState;

  const setValueIfUncontrolled = React.useCallback(
    (newValue: T) => {
      if (!isControlled) {
        setValue(newValue);
      }
    },
    [isControlled],
  );

  return [value, setValueIfUncontrolled];
}
