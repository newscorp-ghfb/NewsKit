export const Component = () => {
    const [onPressL, setOnPressL] = React.useState(false);
    const [onPressShiftAndF, setonPressShiftAndF] = React.useState(false);
    const [onPressAOrH, setonPressAOrH] = React.useState(false);
  
    const onPressSingle = React.useCallback(() => {
      setOnPressL(true);
    }, [setOnPressL]);
  
    const onPressMulti = React.useCallback(() => {
      setonPressShiftAndF(true);
    }, [setonPressShiftAndF]);
  
    const onPressEitherKey = React.useCallback(() => {
      setonPressAOrH(true);
    }, [setonPressAOrH]);
  
    useKeypress('l', onPressSingle, {eventType: 'keydown'});
    useKeypress('shift + f', onPressMulti, {eventType: 'keydown'});
    useKeypress(['a', 'h'], onPressEitherKey, {eventType: 'keydown'});
  
    return (
      <>
        <TextBlock stylePreset="inkBase">Press L for love</TextBlock>
        {onPressL && <StyledDiv>🧡</StyledDiv>}
        <TextBlock stylePreset="inkBase">Press SHIFT + F for fox</TextBlock>
        {onPressShiftAndF && <StyledDiv>🦊</StyledDiv>}
        <TextBlock stylePreset="inkBase">Press A or H for happy face</TextBlock>
        {onPressAOrH && <StyledDiv>😊</StyledDiv>}
      </>
    );
  };