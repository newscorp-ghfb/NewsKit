import * as React from 'react';

import {CharacterCount, CharacterCountProps} from '..';
import {getSizingCssFromTheme, styled} from '../../utils/style';
import {Stack} from '../../stack';
import {Block} from '../../block';

import {StorybookHeading} from '../../test/storybook-comps';
import {
  Form,
  FormInput,
  FormInputCharacterCount,
  FormInputLabel,
  FormInputTextArea,
} from '../../form';
import {Button} from '../../button';
import {TextArea} from '../../text-area';
import {useRefWithReRender} from '../../utils/use-ref-with-rerender';
import {Label} from '../../label';

const Container = styled.div`
  ${getSizingCssFromTheme('margin', {
    xs: 'sizing000',
    md: 'sizing100',
  })};
`;

export default {
  title: 'NewsKit Light/character-count',
  component: () => 'None',
};

export const CharacterCountSizes = () => {
  const refs = {
    small: useRefWithReRender<HTMLTextAreaElement>(null),
    medium: useRefWithReRender<HTMLTextAreaElement>(null),
    large: useRefWithReRender<HTMLTextAreaElement>(null),
  };
  return (
    <>
      <StorybookHeading>Character Count</StorybookHeading>
      <Container>
        <Stack stackDistribution="space-between" flow="horizontal-center">
          {Object.entries(refs).map(([size, ref]) => (
            <Block>
              <Label>
                {`${size.slice(0, 1).toUpperCase()}${size.substring(1)}`}
              </Label>
              <TextArea
                defaultValue={`${size} text`}
                ref={ref}
                maxLength={200}
              />
              <CharacterCount
                size={size as CharacterCountProps['size']}
                inputRef={ref}
              />
            </Block>
          ))}
        </Stack>
      </Container>
    </>
  );
};
CharacterCountSizes.storyName = 'character-count-size';

export const CharacterCountConfig = () => {
  const maxLengthRef = useRefWithReRender<HTMLTextAreaElement>(null);
  const minLengthRef = useRefWithReRender<HTMLTextAreaElement>(null);
  return (
    <>
      <StorybookHeading>Character Count</StorybookHeading>
      <Container>
        <Stack stackDistribution="space-between" flow="horizontal-center">
          <Block>
            <Label>Max length</Label>
            <TextArea ref={maxLengthRef} maxLength={200} />
            <CharacterCount inputRef={maxLengthRef} />
          </Block>
          <Block>
            <Label>Min length</Label>
            <TextArea ref={minLengthRef} minLength={20} />
            <CharacterCount inputRef={minLengthRef} />
          </Block>
        </Stack>
      </Container>
    </>
  );
};
CharacterCountConfig.storyName = 'character-count-config';

export const StoryFormFieldCharacterCount = () => (
  <>
    <StorybookHeading>
      FormInput with character count, label and before and after icon
    </StorybookHeading>
    <Form onSubmit={() => {}}>
      <FormInput
        name="name"
        rules={{
          required: 'Required field',
        }}
      >
        <FormInputLabel>Label</FormInputLabel>
        <FormInputTextArea maxLength={200} />
        <FormInputCharacterCount />
      </FormInput>
      <Button type="submit" overrides={{marginBlockStart: 'space040'}}>
        Submit
      </Button>
    </Form>
  </>
);
StoryFormFieldCharacterCount.storyName = 'character-count-form-input';
