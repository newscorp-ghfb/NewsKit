import * as React from 'react';

import {CharacterCount, CharacterCountProps} from '..';
import {getSizingCssFromTheme, styled} from '../../utils/style';
import {Stack} from '../../stack';
import {
  Form,
  FormInput,
  FormInputCharacterCount,
  FormInputLabel,
  FormInputTextArea,
  FormInputTextField,
} from '../../form';
import {Button} from '../../button';
import {TextArea, TextAreaProps} from '../../text-area';
import {useRefWithReRender} from '../../utils/use-ref-with-rerender';
import {Label} from '../../label';
import {TextField, TextFieldSize} from '../../text-field';
import {FormInputState} from '../../form/types';
import {createTheme, ThemeProvider} from '../../theme';

const Container = styled.div`
  ${getSizingCssFromTheme('margin', {
    xs: 'sizing000',
    md: 'sizing100',
  })};
`;

const Block = styled.div`
  width: 100%;
  max-width: 300px;
`;

const Page = ({children}: {children: React.ReactNode}) => (
  <Container>
    <Stack stackDistribution="space-between" flow="horizontal-top">
      {children}
    </Stack>
  </Container>
);

export default {
  title: 'Components/Character count',
  component: () => 'None',
};

export const CharacterCountSizes = () => {
  const refs = {
    small: useRefWithReRender<HTMLTextAreaElement>(null),
    medium: useRefWithReRender<HTMLTextAreaElement>(null),
    large: useRefWithReRender<HTMLTextAreaElement>(null),
  };
  return (
    <Page>
      {Object.entries(refs).map(([size, ref]) => (
        <Block>
          <Label htmlFor={`textArea-${size}`} size={size as TextFieldSize}>
            {`${size.slice(0, 1).toUpperCase()}${size.substring(1)}`}
          </Label>
          <TextArea
            size={size as TextAreaProps['size']}
            placeholder="Placeholder"
            id={`textArea-${size}`}
            ref={ref}
            maxLength={200}
          />
          <CharacterCount
            size={size as CharacterCountProps['size']}
            inputRef={ref}
          />
        </Block>
      ))}
    </Page>
  );
};
CharacterCountSizes.storyName = 'Size';

export const CharacterCountStates = () => {
  const refs = {
    valid: useRefWithReRender<HTMLTextAreaElement>(null),
    invalid: useRefWithReRender<HTMLTextAreaElement>(null),
    disabled: useRefWithReRender<HTMLTextAreaElement>(null),
  };
  return (
    <Page>
      {Object.entries(refs).map(([state, ref]) => (
        <Block>
          <Label htmlFor={`textArea-${state}`}>
            {`${state.slice(0, 1).toUpperCase()}${state.substring(1)}`}
          </Label>
          <TextArea
            placeholder="Placeholder"
            id={`textArea-${state}`}
            ref={ref}
            minLength={30}
            state={state as FormInputState}
          />
          <CharacterCount state={state as FormInputState} inputRef={ref} />
        </Block>
      ))}
    </Page>
  );
};
CharacterCountStates.storyName = 'States';

export const CharacterCountMaxLength = () => {
  const textArea = useRefWithReRender<HTMLTextAreaElement>(null);
  const textField = useRefWithReRender<HTMLInputElement>(null);
  return (
    <Page>
      <Block>
        <Label htmlFor="textAreaMax">Text area</Label>
        <TextArea
          placeholder="Placeholder"
          id="textAreaMax"
          ref={textArea}
          maxLength={200}
        />
        <CharacterCount inputRef={textArea} />
      </Block>
      <Block>
        <Label htmlFor="textFieldMax">Text field</Label>
        <TextField
          placeholder="Placeholder"
          id="textFieldMax"
          ref={textField}
          maxLength={20}
        />
        <CharacterCount inputRef={textField} />
      </Block>
    </Page>
  );
};
CharacterCountMaxLength.storyName = 'Max length';

export const CharacterCountMinLength = () => {
  const textArea = useRefWithReRender<HTMLTextAreaElement>(null);
  const textField = useRefWithReRender<HTMLInputElement>(null);
  return (
    <Page>
      <Block>
        <Label htmlFor="textAreaMin">Text area</Label>
        <TextArea
          placeholder="Placeholder"
          id="textAreaMin"
          ref={textArea}
          minLength={30}
        />
        <CharacterCount inputRef={textArea} />
      </Block>
      <Block>
        <Label htmlFor="textFieldMin">Text field</Label>
        <TextField
          placeholder="Placeholder"
          id="textFieldMin"
          ref={textField}
          minLength={10}
        />
        <CharacterCount inputRef={textField} />
      </Block>
    </Page>
  );
};
CharacterCountMinLength.storyName = 'Min length';

export const CharacterCountMinAndMaxLength = () => {
  const textArea = useRefWithReRender<HTMLTextAreaElement>(null);
  const textField = useRefWithReRender<HTMLInputElement>(null);
  return (
    <Page>
      <Block>
        <Label htmlFor="textAreaMinMax">Text area</Label>
        <TextArea
          placeholder="Placeholder"
          id="textAreaMinMax"
          ref={textArea}
          minLength={30}
          maxLength={200}
        />
        <CharacterCount inputRef={textArea} />
      </Block>
      <Block>
        <Label htmlFor="textFieldMinMax">Text field</Label>
        <TextField
          placeholder="Placeholder"
          id="textFieldMinMax"
          ref={textField}
          minLength={10}
          maxLength={20}
        />
        <CharacterCount inputRef={textField} />
      </Block>
    </Page>
  );
};
CharacterCountMinAndMaxLength.storyName = 'Min and max length';

export const CharacterCountForm = () => (
  <Form onSubmit={() => {}}>
    <Stack>
      <Block>
        <FormInput
          rules={{
            required: 'Required field',
            minLength: {
              value: 30,
              message: 'message is required for state to update',
            },
            maxLength: {
              value: 100,
              message: 'message is required for state to update',
            },
          }}
          name="textArea"
        >
          <FormInputLabel>Label</FormInputLabel>
          <FormInputTextArea />
          <FormInputCharacterCount />
        </FormInput>
      </Block>
      <Block>
        <FormInput
          rules={{
            required: 'Required field',
            minLength: {
              value: 10,
              message: 'message is required for state to update',
            },
            maxLength: {
              value: 25,
              message: 'message is required for state to update',
            },
          }}
          name="textField"
        >
          <FormInputLabel>Label</FormInputLabel>
          <FormInputTextField />
          <FormInputCharacterCount />
        </FormInput>
      </Block>
      <Block>
        <Button type="submit" overrides={{marginBlockStart: 'space040'}}>
          Submit
        </Button>
      </Block>
    </Stack>
  </Form>
);
CharacterCountForm.storyName = 'Form with submit validation';

const myCustomTheme = createTheme({
  name: 'my-custom-theme',
  overrides: {
    stylePresets: {
      characterCountCustom: {
        base: {
          color: '{{colors.amber060}}',
        },
      },
    },
  },
});

export const CharacterCountOverrides = () => {
  const styleRef = useRefWithReRender<HTMLTextAreaElement>(null);
  const logicalPropsRef = useRefWithReRender<HTMLTextAreaElement>(null);
  const minHeightRef = useRefWithReRender<HTMLTextAreaElement>(null);
  return (
    <ThemeProvider theme={myCustomTheme}>
      <Page>
        <Block>
          <Label htmlFor="style">Style</Label>
          <TextArea
            placeholder="Placeholder"
            id="style"
            ref={styleRef}
            maxLength={200}
          />
          <CharacterCount
            inputRef={styleRef}
            overrides={{stylePreset: 'characterCountCustom'}}
          />
        </Block>
        <Block>
          <Label htmlFor="logicalProps">Logical props</Label>
          <TextArea
            placeholder="Placeholder"
            id="logicalProps"
            ref={logicalPropsRef}
            maxLength={20}
            overrides={{width: '200px'}}
          />
          <CharacterCount
            inputRef={logicalPropsRef}
            overrides={{marginBlock: 'space040', paddingInline: 'space060'}}
          />
        </Block>
        <Block>
          <Label htmlFor="minHeight">Min height</Label>
          <TextArea
            placeholder="Placeholder"
            id="minHeight"
            ref={minHeightRef}
            maxLength={200}
          />
          <CharacterCount
            inputRef={minHeightRef}
            overrides={{minHeight: '80px'}}
          />
        </Block>
      </Page>
    </ThemeProvider>
  );
};
CharacterCountOverrides.storyName = 'Overrides';
