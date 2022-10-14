const Component = ({
  value: valueProp,
  defaultValue,
  onClick,
}: {
  value?: number;
  defaultValue?: number;
  onClick?: () => void;
}) => {
  const [value, setValue] = useControlled({
    defaultValue,
    controlledValue: valueProp,
  });

  const handleOnClick = () => {
    setValue(value! + 1);

    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <Button onClick={handleOnClick}>+</Button>
      <StyledDiv>{value}</StyledDiv>
    </>
  );
};
export const UncontrolledComponent = () => <Component defaultValue={40} />;
export const ControlledComponent = () => (
  <Component value={value} onClick={() => setValue(value + 1)} />
);
