import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {
  Form,
  FormInput,
  FormInputAssistiveText,
  FormInputCharacterCount,
  FormInputCheckbox,
  FormInputLabel,
  FormInputRadioButton,
  FormInputSelect,
  FormInputTextArea,
  FormInputTextField,
} from '..';
import {
  Block,
  Button,
  FieldsetProps,
  FormInputTextFieldProps,
  GridLayout,
  IconButton,
  styled,
  TextBlock,
  ThemeProvider,
} from '../..';
import {
  IconFilledAddCircle,
  IconFilledRemoveRedEye,
  IconFilledStop,
} from '../../icons';
import {SelectOption} from '../../select';
import {Fieldset} from '../../fieldset';
import {RadioGroup} from '../../radio-button';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

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

const sharedProps: Pick<
  FormInputTextFieldProps,
  'size' | 'placeholder' | 'startEnhancer' | 'endEnhancer'
> = {
  size: 'small',
  placeholder: 'Placeholder',
  startEnhancer: (
    <>
      <IconFilledAddCircle overrides={{size: '20px'}} />
    </>
  ),
  endEnhancer: (
    <>
      <IconFilledAddCircle overrides={{size: '20px'}} />
    </>
  ),
};

const usernameRule = {
  required: 'Required field',
  validate: validateUserName,
};

const emailRule = {
  required: 'Required field',
  pattern: {
    // eslint-disable-next-line no-useless-escape
    value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Please provide a valid email',
  },
};

const FormInputBlock = ({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) => (
  <Block marginBlockStart="space020" marginBlockEnd="space050">
    {label && (
      <TextBlock
        as="h2"
        stylePreset="inkSubtle"
        typographyPreset="utilityBody010"
        marginBlockEnd="space050"
      >
        {label}
      </TextBlock>
    )}
    {children}
  </Block>
);

const FormInputAssistiveTextWithErrorIcon = () => (
  <FormInputAssistiveText style={{display: 'flex', alignItems: 'center'}}>
    <IconFilledAddCircle
      overrides={{
        size: '16px',
        stylePreset: 'iconNegative',
        marginInlineEnd: '8px',
      }}
    />
    Assistive Text
  </FormInputAssistiveText>
);

const Container = styled.div`
  max-width: 300px;
`;

export const StoryFormInputTextField = () => (
  <Container>
    <Form onSubmit={onSubmit}>
      <FormInputBlock label="Base (default)">
        <FormInput name="text-field-email" rules={emailRule}>
          <FormInputLabel>E-mail</FormInputLabel>
          <FormInputTextField {...sharedProps} />
          <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
        </FormInput>
      </FormInputBlock>
      <FormInputBlock label="Valid">
        <FormInput
          state="valid"
          name="text-field-username"
          rules={usernameRule}
        >
          <FormInputLabel>Username</FormInputLabel>
          <FormInputTextField {...sharedProps} />
          <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
        </FormInput>
      </FormInputBlock>
      <FormInputBlock label="Invalid">
        <FormInput state="invalid" name="text-field-first-name">
          <FormInputLabel>First name</FormInputLabel>
          <FormInputTextField {...sharedProps} />
          <FormInputAssistiveTextWithErrorIcon />
        </FormInput>
      </FormInputBlock>
      <FormInputBlock label="Disabled">
        <FormInput name="text-field-surname" state="disabled">
          <FormInputLabel>Surname</FormInputLabel>
          <FormInputTextField {...sharedProps} />
          <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
        </FormInput>
      </FormInputBlock>
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
);
StoryFormInputTextField.storyName = 'Form input text field';

export const StoryFormInputTextArea = () => (
  <Container>
    <Form onSubmit={onSubmit}>
      <FormInputBlock label="Base (default)">
        <FormInput name="text-field-email" rules={emailRule}>
          <FormInputLabel>E-mail</FormInputLabel>
          <FormInputTextArea
            {...sharedProps}
            rows={1}
            overrides={{height: 'unset'}}
          />
          <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
        </FormInput>
      </FormInputBlock>
      <FormInputBlock label="Valid">
        <FormInput
          state="valid"
          name="text-field-username"
          rules={usernameRule}
        >
          <FormInputLabel>Username</FormInputLabel>
          <FormInputTextArea
            {...sharedProps}
            rows={1}
            overrides={{height: 'unset'}}
          />
          <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
        </FormInput>
      </FormInputBlock>
      <FormInputBlock label="Invalid">
        <FormInput state="invalid" name="text-field-first-name">
          <FormInputLabel>First name</FormInputLabel>
          <FormInputTextArea
            {...sharedProps}
            rows={1}
            overrides={{height: 'unset'}}
          />
          <FormInputAssistiveTextWithErrorIcon />
        </FormInput>
      </FormInputBlock>
      <FormInputBlock label="Disabled">
        <FormInput name="text-field-surname" state="disabled">
          <FormInputLabel>Surname</FormInputLabel>
          <FormInputTextArea
            {...sharedProps}
            rows={1}
            overrides={{height: 'unset'}}
          />
          <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
        </FormInput>
      </FormInputBlock>
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
);
StoryFormInputTextArea.storyName = 'Form input text area';

export const FormFieldWithIconButton = () => (
  <Container>
    <Form onSubmit={onSubmit}>
      <FormInputBlock>
        <FormInput name="text-field-email" rules={emailRule}>
          <FormInputLabel>E-mail</FormInputLabel>
          <FormInputTextField
            size="small"
            placeholder="Placeholder"
            endEnhancer={
              <IconButton
                aria-label="toggle password"
                size="small"
                overrides={{stylePreset: 'iconButtonOutlinedSecondary'}}
              >
                <IconFilledAddCircle
                  overrides={{
                    size: 'iconSize010',
                    stylePreset: 'iconDefault',
                  }}
                />
              </IconButton>
            }
          />
          <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
        </FormInput>
      </FormInputBlock>
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
);
FormFieldWithIconButton.storyName = 'Form input with icon button';

export const FormInputWithSelect = () => (
  <Container>
    <Form onSubmit={onSubmit}>
      <FormInputBlock label="Standalone select">
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
            <FormInputSelect size="small" placeholder="Select option">
              <SelectOption value="Option 1">Option 1</SelectOption>
              <SelectOption value="Option 2">Option 2</SelectOption>
            </FormInputSelect>
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </Block>
        </FormInput>
      </FormInputBlock>
      <FormInputBlock label="Start and end enhancers">
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
              {...sharedProps}
              placeholder="Select option"
              endEnhancer={undefined}
            >
              <SelectOption value="Option 1">Option 1</SelectOption>
              <SelectOption value="Option 2">Option 2</SelectOption>
            </FormInputSelect>
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </Block>
        </FormInput>
      </FormInputBlock>
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
);
FormInputWithSelect.storyName = 'Form input select';

export const FormFieldCheckbox = () => (
  <Form onSubmit={onSubmit}>
    <FormInputBlock>
      <FormInput
        name="checkbox"
        size="small"
        rules={{
          required: 'Required field',
        }}
      >
        <FormInputCheckbox
          label="I agree to the terms & conditions"
          overrides={{marginBlockEnd: '7px'}}
        />
        <FormInputAssistiveText validationIcon>
          Please agree with our terms & conditions
        </FormInputAssistiveText>
      </FormInput>
    </FormInputBlock>
    <Button type="submit">Submit</Button>
  </Form>
);
FormFieldCheckbox.storyName = 'Form input checkbox';

export const FormFieldRadioButton = () => (
  <Form onSubmit={onSubmit}>
    <FormInputBlock>
      <Fieldset legend="Select an option">
        <RadioGroup>
          <FormInput name="option1" rules={{required: 'Required field'}}>
            <FormInputRadioButton
              label="Option 1"
              value="1"
              overrides={{spaceStack: 'space030'}}
            />
          </FormInput>
          <FormInput name="option2" rules={{required: 'Required field'}}>
            <FormInputRadioButton
              label="Option 2"
              value="2"
              overrides={{spaceStack: 'space030'}}
            />
          </FormInput>
          <FormInput name="option3" rules={{required: 'Required field'}}>
            <FormInputRadioButton
              label="Option 3"
              value="3"
              overrides={{spaceStack: 'space030'}}
            />
          </FormInput>
        </RadioGroup>
        <FormInput
          name="favoriteActivities"
          rules={{required: 'Required field'}}
        >
          <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
        </FormInput>
      </Fieldset>
    </FormInputBlock>
    <Button type="submit">Submit</Button>
  </Form>
);

FormFieldRadioButton.storyName = 'Form input radio button';

export const StoryFormFieldset = () => {
  const sizes: NonNullable<FieldsetProps['size']>[] = [
    'small',
    'medium',
    'large',
  ];
  return (
    <GridLayout columns={{sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}}>
      {sizes.map(size => (
        <Container>
          <Form onSubmit={onSubmit} marginBlockEnd="space050">
            <Fieldset
              legend={`${size.slice(0, 1).toUpperCase()}${size.substring(1)}`}
              size={size}
            >
              <FormInputBlock>
                <FormInput name="first-name" rules={emailRule}>
                  <FormInputLabel>Email</FormInputLabel>
                  <FormInputTextField size={size} placeholder="Placeholder" />
                  <FormInputAssistiveText>
                    Assistive text
                  </FormInputAssistiveText>
                </FormInput>
              </FormInputBlock>
              <FormInputBlock>
                <FormInput name="last-name" rules={usernameRule}>
                  <FormInputLabel>Username</FormInputLabel>
                  <FormInputTextField size={size} placeholder="Placeholder" />
                  <FormInputAssistiveText>
                    Assistive text
                  </FormInputAssistiveText>
                </FormInput>
              </FormInputBlock>
              <Button type="submit" size={size}>
                Submit
              </Button>
            </Fieldset>
          </Form>
        </Container>
      ))}
    </GridLayout>
  );
};
StoryFormFieldset.storyName = 'Form input fieldset';

export const StoryFormInputCharacterCount = () => (
  <Container>
    <Form onSubmit={onSubmit}>
      <FormInputBlock label="Base (default)">
        <FormInput
          name="text-field-email"
          rules={{
            ...emailRule,
            maxLength: {
              value: 200,
            },
          }}
        >
          <FormInputLabel>E-mail</FormInputLabel>
          <FormInputTextField {...sharedProps} />
          <FormInputCharacterCount />
        </FormInput>
      </FormInputBlock>
      <FormInputBlock label="Valid">
        <FormInput
          state="valid"
          name="text-field-username"
          rules={{
            ...usernameRule,
            maxLength: {
              value: 40,
            },
          }}
        >
          <FormInputLabel>Username</FormInputLabel>
          <FormInputTextField {...sharedProps} />
          <FormInputCharacterCount />
        </FormInput>
      </FormInputBlock>
      <FormInputBlock label="Invalid">
        <FormInput
          state="invalid"
          name="text-field-first-name"
          rules={{
            maxLength: {
              value: -15,
            },
          }}
        >
          <FormInputLabel>First name</FormInputLabel>
          <FormInputTextField {...sharedProps} />
          <FormInputCharacterCount />
        </FormInput>
      </FormInputBlock>
      <FormInputBlock label="Disabled">
        <FormInput
          name="text-field-surname"
          state="disabled"
          rules={{
            maxLength: {
              value: 200,
            },
          }}
        >
          <FormInputLabel>Surname</FormInputLabel>
          <FormInputTextField {...sharedProps} />
          <FormInputCharacterCount aria-disabled />
        </FormInput>
      </FormInputBlock>
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
);
StoryFormInputCharacterCount.storyName = 'Form input character count';

const FormContainer = styled.div`
  height: 700px;
  overflow: auto;
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ShowPasswordButton = ({
  onClick,
  isVisible,
}: {
  onClick: () => void;
  isVisible: boolean;
}) => (
  <IconButton
    aria-label="toggle password"
    onClick={onClick}
    size="small"
    overrides={{stylePreset: 'iconButtonMinimalPrimary'}}
  >
    {isVisible ? (
      <IconFilledStop overrides={{size: 'iconSize010'}} />
    ) : (
      <IconFilledRemoveRedEye overrides={{size: 'iconSize010'}} />
    )}
  </IconButton>
);

export const StoryFormComplete = () => {
  const [showPassword, toggleShowPassword] = React.useState(false);
  return (
    <FormContainer>
      <Form onSubmit={console.log}>
        <Fieldset legend="Personal">
          <Block marginBlockStart="space020" marginBlockEnd="space050">
            <FormInput
              name="first-name"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters long',
                },
              }}
            >
              <FormInputLabel>First name</FormInputLabel>
              <FormInputTextField />
              <FormInputAssistiveText>
                Enter your first name
              </FormInputAssistiveText>
            </FormInput>
          </Block>

          <Block marginBlockStart="space020" marginBlockEnd="space050">
            <FormInput
              name="last-name"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters long',
                },
              }}
            >
              <FormInputLabel>Last name</FormInputLabel>
              <FormInputTextField />
              <FormInputAssistiveText>
                Enter your last name
              </FormInputAssistiveText>
            </FormInput>
          </Block>

          <Block marginBlockStart="space020" marginBlockEnd="space050">
            <FormInput
              name="country"
              rules={{
                required: 'Required field',
              }}
            >
              <FormInputLabel>Country</FormInputLabel>
              <FormInputSelect>
                <SelectOption value="BG">Bulgaria</SelectOption>
                <SelectOption value="UK">United Kingdom</SelectOption>
                <SelectOption value="NL">The Netherlands</SelectOption>
                <SelectOption value="DE">Germany</SelectOption>
              </FormInputSelect>
              <FormInputAssistiveText>
                Enter your last name
              </FormInputAssistiveText>
            </FormInput>
          </Block>
        </Fieldset>

        <Fieldset legend="Login information">
          <Block marginBlockStart="space020" marginBlockEnd="space050">
            <FormInput
              name="email"
              rules={{
                required: 'Required field',
                pattern: /^\S+@\S+$/i,
              }}
            >
              <FormInputLabel>Email</FormInputLabel>
              <FormInputTextField type="email" />
              <FormInputAssistiveText>Enter your email</FormInputAssistiveText>
            </FormInput>
          </Block>

          <Block marginBlockStart="space020" marginBlockEnd="space050">
            <FormInput
              name="password"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 8,
                  message: 'Name must be at least 8 characters long',
                },
              }}
            >
              <FormInputLabel>Password</FormInputLabel>
              <FormInputTextField
                type={showPassword ? 'text' : 'password'}
                endEnhancer={
                  <ShowPasswordButton
                    onClick={() => toggleShowPassword(!showPassword)}
                    isVisible={showPassword}
                  />
                }
              />
              <FormInputAssistiveText>
                Enter your password
              </FormInputAssistiveText>
            </FormInput>
          </Block>
        </Fieldset>

        <Fieldset legend="Gender">
          <Block marginBlockStart="space020" marginBlockEnd="space050">
            <FormInput
              name="sex"
              rules={{
                required: 'Required field',
              }}
            >
              <RadioGroup>
                <FormInputRadioButton
                  id="gender-male"
                  value="male"
                  label="Male"
                  overrides={{marginBlockEnd: 'space020'}}
                />
                <FormInputRadioButton
                  id="gender-female"
                  value="female"
                  label="Female"
                  overrides={{marginBlockEnd: 'space020'}}
                />
                <FormInputRadioButton
                  id="gender-3rd"
                  value="3rd"
                  label="Third Gender"
                  overrides={{marginBlockEnd: 'space020'}}
                />
                <FormInputRadioButton
                  id="gender-noSay"
                  value="noSay"
                  label="Not to say"
                  overrides={{marginBlockEnd: 'space020'}}
                />
              </RadioGroup>
              <FormInputAssistiveText>Make your choice</FormInputAssistiveText>
            </FormInput>
          </Block>
        </Fieldset>

        <Fieldset legend="Interests">
          <Block marginBlockStart="space020" marginBlockEnd="space050">
            <FormInput
              name="interests"
              rules={{
                required: 'Required field',
                validate: (value: string[]) => {
                  if (value.length < 3) {
                    return 'Select at least 3 interests';
                  }

                  return true;
                },
              }}
            >
              <FormInputCheckbox
                id="interests-politics"
                value="politics"
                label="Politics"
                overrides={{marginBlockEnd: 'space020'}}
              />
              <FormInputCheckbox
                id="interests-Business"
                value="Business"
                label="Business"
                overrides={{marginBlockEnd: 'space020'}}
              />
              <FormInputCheckbox
                id="interests-Society"
                value="Society"
                label="Society"
                overrides={{marginBlockEnd: 'space020'}}
              />
              <FormInputCheckbox
                id="interests-Technology"
                value="Technology"
                label="Technology"
                overrides={{marginBlockEnd: 'space020'}}
              />
              <FormInputCheckbox
                id="interests-Sport"
                value="Sport"
                label="Sport"
                overrides={{marginBlockEnd: 'space020'}}
              />
              <FormInputCheckbox
                id="interests-Science"
                value="Science"
                label="Science"
                overrides={{marginBlockEnd: 'space020'}}
              />
              <FormInputAssistiveText>Make your choice</FormInputAssistiveText>
            </FormInput>
          </Block>
        </Fieldset>

        <Button type="submit">Register</Button>
      </Form>
    </FormContainer>
  );
};
StoryFormComplete.storyName = 'Form complete';

export default {
  title: 'Components/Form input',
  component: () => 'None',
  disabledRules: [],
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          {},
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
