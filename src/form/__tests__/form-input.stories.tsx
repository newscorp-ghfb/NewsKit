import React from 'react';
import {
  Form,
  FormInput,
  FormInputAssistiveText,
  FormInputLabel,
  FormInputSelect,
  FormInputTextField,
  FormInputCheckbox,
} from '..';
import {
  Block,
  Button,
  IconButton,
  IconFilledAccountBalance,
  IconFilledAccountTree,
} from '../..';
import {SelectOption} from '../../select';
import {TextFieldSize} from '../../text-field';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = async (data: any) => {
  await sleep(2000);
  // eslint-disable-next-line no-console
  console.log('Submitted data:', data);
};

const validateUserName = async (value: string) => {
  await sleep(1000);
  return value !== 'newskit' || 'This username is already taken';
};

export default {
  title: 'NewsKit Light/form-input',
  component: () => 'None',
  disabledRules: ['color-contrast'],
};
export const StoryFormField = () => (
  <>
    <StorybookHeading>
      FormInput with assistive text, label and before and after icon
    </StorybookHeading>
    <StorybookSubHeading>Valid State</StorybookSubHeading>
    <Form onSubmit={onSubmit}>
      <FormInput
        state="valid"
        name="email-valid"
        rules={{
          required: 'Required field',
          pattern: {
            // eslint-disable-next-line no-useless-escape
            value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            message: 'Please provide a valid email',
          },
        }}
      >
        <FormInputLabel>E-mail</FormInputLabel>
        <FormInputTextField
          size={'small' as TextFieldSize}
          startEnhancer={
            <>
              <IconFilledAccountBalance overrides={{size: '20px'}} />
            </>
          }
        />
        <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
      </FormInput>
      <StorybookSubHeading>Invalid State</StorybookSubHeading>

      <FormInput
        state="invalid"
        name="username-invalid"
        rules={{
          required: 'Required field',
          minLength: {
            value: 5,
            message: 'Usernames must be at least 5 characters long',
          },
          validate: validateUserName,
        }}
      >
        <FormInputLabel>Username</FormInputLabel>
        <FormInputTextField
          size={'small' as TextFieldSize}
          startEnhancer={
            <>
              <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
              <Block spaceInline="space020" />
              <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
            </>
          }
          endEnhancer={
            <>
              <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
              <Block spaceInline="space020" />
              <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
            </>
          }
          overrides={{
            startEnhancer: {
              spaceInline: 'space020',
            },
            endEnhancer: {
              spaceInline: 'space040',
            },
          }}
        />
        <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
      </FormInput>

      <FormInput
        name="username-default"
        rules={{
          required: 'Required field',
          minLength: {
            value: 5,
            message: 'Usernames must be at least 5 characters long',
          },
          validate: validateUserName,
        }}
      >
        <StorybookSubHeading>Default State</StorybookSubHeading>
        <FormInputLabel>Surname</FormInputLabel>
        <FormInputTextField
          size={'small' as TextFieldSize}
          startEnhancer={
            <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
          }
          endEnhancer={
            <>
              <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
              <Block spaceInline="space020" />
              <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
            </>
          }
          overrides={{
            startEnhancer: {
              spaceInline: 'space050',
            },
            endEnhancer: {
              spaceInline: 'space050',
            },
          }}
        />
        <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
      </FormInput>
      <FormInput name="password-disbled" state="disabled">
        <StorybookSubHeading>Disabled State</StorybookSubHeading>
        <FormInputLabel>Password</FormInputLabel>
        <FormInputTextField
          state="disabled"
          size={'small' as TextFieldSize}
          startEnhancer={
            <IconFilledAccountBalance overrides={{size: '20px'}} />
          }
          endEnhancer={<IconFilledAccountBalance overrides={{size: '20px'}} />}
        />
        <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
      </FormInput>
      <Button type="submit">Submit</Button>
    </Form>
  </>
);

StoryFormField.storyName = 'form-input-before-and-after-icon';
export const FormFieldWithIconButton = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <>
      <StorybookHeading>FormInput with Button enhancer</StorybookHeading>
      <Block>
        <Form onSubmit={onSubmit}>
          <FormInput
            name="password-icon"
            rules={{
              required: 'Required field',
            }}
          >
            <Block spaceStack="space020">
              <FormInputLabel>Enter Password</FormInputLabel>
            </Block>
            <Block spaceStack="space020">
              <FormInputTextField
                type={!showPassword ? 'password' : 'text'}
                startEnhancer={
                  <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
                }
                endEnhancer={
                  <IconButton
                    aria-label="toggle password"
                    onClick={() => setShowPassword(!showPassword)}
                    size="small"
                  >
                    {showPassword ? (
                      <IconFilledAccountBalance
                        overrides={{size: 'iconSize010'}}
                      />
                    ) : (
                      <IconFilledAccountTree
                        overrides={{size: 'iconSize010'}}
                      />
                    )}
                  </IconButton>
                }
                overrides={{
                  startEnhancer: {
                    spaceInline: 'space070',
                  },
                  endEnhancer: {
                    spaceInline: 'space070',
                  },
                }}
              />
              <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
            </Block>
          </FormInput>
          <Button type="submit">Submit</Button>
        </Form>
      </Block>
    </>
  );
};
FormFieldWithIconButton.storyName = 'form-input-with-icon-button';

export const FormInputWithSelect = () => (
  <>
    <StorybookHeading>FormInput with Select</StorybookHeading>
    <Block>
      <StorybookSubHeading>Standalone Select</StorybookSubHeading>
      <Form onSubmit={onSubmit}>
        <FormInput
          name="select"
          rules={{
            required: 'Required field',
          }}
        >
          <Block spaceStack="space020">
            <FormInputLabel>Select Item</FormInputLabel>
          </Block>
          <Block spaceStack="space020">
            <FormInputSelect overrides={{button: {width: '300px'}}}>
              <SelectOption value="Option 1">Option 1</SelectOption>
              <SelectOption value="Option 2">Option 2</SelectOption>
            </FormInputSelect>
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </Block>
        </FormInput>
        <Button type="submit">Submit</Button>
      </Form>
    </Block>
    <Block>
      <StorybookSubHeading>Select with enhancers</StorybookSubHeading>
      <Form onSubmit={onSubmit}>
        <FormInput
          name="select"
          rules={{
            required: 'Required field',
          }}
        >
          <Block spaceStack="space020">
            <FormInputLabel>Select Item</FormInputLabel>
          </Block>
          <Block spaceStack="space020">
            <FormInputSelect
              overrides={{button: {width: '300px'}}}
              startEnhancer={
                <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
              }
              endEnhancer={
                <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
              }
            >
              <SelectOption value="Option 1">Option 1</SelectOption>
              <SelectOption value="Option 2">Option 2</SelectOption>
            </FormInputSelect>
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </Block>
        </FormInput>
        <Button type="submit">Submit</Button>
      </Form>
    </Block>
  </>
);
FormInputWithSelect.storyName = 'form-input-with-select';

const spaceStack = {
  small: 'space020',
  medium: 'space020',
  large: 'space030',
};

export const FormFieldCheckbox = () => (
  <Form onSubmit={onSubmit}>
    <StorybookSubHeading>Single checkbox validation</StorybookSubHeading>
    <Block spaceInset="space050">
      {['small', 'medium', 'large'].map(size => (
        <Block spaceStack="space050">
          <FormInput
            name={`${size}-name`}
            size={size as TextFieldSize}
            rules={{
              required: 'Required field',
            }}
          >
            <FormInputCheckbox
              label={`Agree with T&C ${size}`}
              value="tc"
              overrides={{
                spaceStack: spaceStack[size as keyof typeof spaceStack],
              }}
            />
            <FormInputAssistiveText validationIcon>
              Please agree with our T&C
            </FormInputAssistiveText>
          </FormInput>
        </Block>
      ))}

      <Button type="submit">Submit</Button>
    </Block>
  </Form>
);

FormFieldCheckbox.storyName = 'form-input-checkbox';
