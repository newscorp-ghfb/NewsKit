import * as React from 'react';
import {IconFilledAddCircle} from '../../../icons';
import {useControlled} from '../index';
import {IconButton} from '../../../icon-button';
import {Stack} from '../../../stack';
import {StorybookCase, StorybookPage} from '../../../test/storybook-comps';
import {TextBlock} from '../../../text-block';

const twoCols = {
  xs: 'repeat(1, minmax(150px, max-content))',
  sm: 'repeat(2, minmax(150px, max-content))',
};

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
        <TextBlock typographyPreset="utilityBody020" stylePreset="inkBase">
          {value}
        </TextBlock>
      </Stack>
    );
  };

  const [externalValue, setExternalValue] = React.useState(0);

  return (
    <StorybookPage columns={twoCols} rowGap={{xs: 'space050', sm: 'space080'}}>
      <StorybookCase>
        <Component defaultValue={40} />
      </StorybookCase>
      <StorybookCase>
        <Component
          value={externalValue}
          onClick={() => setExternalValue(externalValue + 1)}
        />
      </StorybookCase>
    </StorybookPage>
  );
};
StoryUseControlled.storyName = 'useControlled';
StoryUseControlled.parameters = {
  percy: {skip: true},
};

export default {
  title: 'Utilities/useControlled',
  component: useControlled,
  parameters: {
    nkDocs: {
      title: 'Hooks',
      url: 'https://newskit.co.uk/components/utils/hooks/',
      description:
        'useControlled is a custom hook used to allow any component handle controlled and uncontrolled modes, and provide control over its internal state.',
    },
  },
};
