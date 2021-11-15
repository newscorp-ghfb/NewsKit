import React from 'react';

export function useControlled({
  controlledValue,
  defaultValue,
}: {
  controlledValue: boolean | undefined;
  defaultValue: boolean;
}): [boolean, (state: boolean) => void] {
  const {current: isControlled} = React.useRef(controlledValue !== undefined);
  const [valueState, setValue] = React.useState(defaultValue);
  const value = (isControlled ? controlledValue : valueState) as boolean;

  const setValueIfUncontrolled = React.useCallback(
    newValue => {
      if (!isControlled) {
        setValue(newValue);
      }
    },
    [isControlled],
  );

  return [value, setValueIfUncontrolled];
}
