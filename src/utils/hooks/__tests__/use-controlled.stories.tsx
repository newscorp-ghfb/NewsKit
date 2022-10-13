import * as React from 'react';
import {IconFilledAddCircle} from '../../../icons';
import {useControlled} from '../index';

import {getColorCssFromTheme, styled} from '../../style';
import {IconButton} from '../../../icon-button';
import {Stack} from '../../../stack';
import {StorybookSubHeading} from '../../../test/storybook-comps';

const StyledDiv = styled.div`
  ${getColorCssFromTheme('color', 'inkBase')};
`;

export const StoryUseControlled = () => {
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

    const title = valueProp ? 'controlled' : 'uncontrolled';

    return (
      <Stack flow="horizontal-center" spaceInline="space030">
        <IconButton
          size="medium"
          onClick={handleOnClick}
          aria-label={`Add for ${title}`}
        >
          <IconFilledAddCircle />
        </IconButton>
        <StyledDiv>{value}</StyledDiv>
      </Stack>
    );
  };

  const [externalValue, setExternalValue] = React.useState(0);

  return (
    <Stack flow="horizontal-top" spaceInline="space120">
      <Stack spaceStack="space045">
        <StorybookSubHeading>Uncontrolled state</StorybookSubHeading>
        <Component defaultValue={40} />
      </Stack>
      <Stack spaceStack="space045">
        <StorybookSubHeading>Controlled state</StorybookSubHeading>
        <Component
          value={externalValue}
          onClick={() => setExternalValue(externalValue + 1)}
        />
      </Stack>
    </Stack>
  );
};
StoryUseControlled.storyName = 'useControlled';
StoryUseControlled.parameters = {
  eyes: {include: false},
};

export default {
  title: 'Utilities/useControlled',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'useControlled',
      url: 'https://newskit.co.uk/components/utils/hooks/',
      description:
        'useControlled is a custom hook used to allow any component handle controlled and uncontrolled modes, and provide control over its internal state.',
    },
  },
};
