import * as React from 'react';
import {useKeypress} from '../index';

import {StorybookSubHeading} from '../../../test/storybook-comps';
import {TextBlock} from '../../../text-block';
import {styled} from '../../style';

const StyledDiv = styled.div`
  display: inline-block;
  margin: 15px;
  font-size: 42px;
  font-weight: bold;
`;

export const StoryUseKeyPress = () => {
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
      <StorybookSubHeading>useKeypress</StorybookSubHeading>
      <TextBlock stylePreset="inkBase">Press L for love</TextBlock>
      {onPressL && <StyledDiv>🧡</StyledDiv>}
      <TextBlock stylePreset="inkBase">Press SHIFT + F for fox</TextBlock>
      {onPressShiftAndF && <StyledDiv>🦊</StyledDiv>}
      <TextBlock stylePreset="inkBase">Press A or H for happy face</TextBlock>
      {onPressAOrH && <StyledDiv>😊</StyledDiv>}
    </>
  );
};
StoryUseKeyPress.storyName = 'useKeypress';
StoryUseKeyPress.parameters = {
  eyes: {include: false},
};

export default {
  title: 'Utilities/useKeypress',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'useKeypress',
      url: 'https://newskit.co.uk/components/utils/hooks/',
      description:
        'useKeypress is a custom hook that detects when the user is pressing one single key or multiple keys.',
    },
  },
};
