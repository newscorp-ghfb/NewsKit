import * as React from 'react';
import {useControlled} from '../index';

import {StorybookSubHeading} from '../../../test/storybook-comps';
import {Button} from '../../../button';
import {getColorCssFromTheme, styled} from '../../style';

const StyledDiv = styled.div`
  ${getColorCssFromTheme('color', 'inkBase')};
`;

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

export default {
  title: 'Utilities/useControlled',
  component: () => 'None',
};

export const StoryUseControlled = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <StorybookSubHeading>Uncontrolled state</StorybookSubHeading>
      <Component defaultValue={40} />
      <StorybookSubHeading>Controlled state</StorybookSubHeading>
      <Component value={value} onClick={() => setValue(value + 1)} />
    </>
  );
};
StoryUseControlled.storyName = 'useControlled';
StoryUseControlled.parameters = {
  eyes: {include: false},
};
