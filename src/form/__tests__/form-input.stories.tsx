import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {
  Form,
  FormInput,
  FormInputAssistiveText,
  FormInputLabel,
  FormInputSelect,
  FormInputTextField,
  FormInputCheckbox,
  FormInputRadioButton,
} from '..';
import {
  Block,
  Button,
  IconButton,
  Stack,
  styled,
  ThemeProvider,
  CreateThemeArgs,
  TextFieldSize,
} from '../..';
import {
  IconFilledAccountBalance,
  IconFilledAccountTree,
  IconFilledAddCircleOutline,
} from '../../icons';
import {SelectOption} from '../../select';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Fieldset} from '../../fieldset';
import {RadioGroup} from '../../radio-button';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const formInputCustomThemeObject: CreateThemeArgs = {
  name: 'my-custom-select-theme',
  overrides: {
    stylePresets: {
      fieldsetWithBorder: {
        base: {
          borderColor: '{{colors.amber010}}',
          borderWidth: '1px',
          borderStyle: 'solid',
        },
      },
    },
  },
};

const FormInputBlock = styled(Block)``;

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
          size="small"
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
          size="small"
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
          size="small"
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
          size="small"
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
    <Block paddingBlock="space050" paddingInline="space050">
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

export const FormFieldRadioButton = () => {
  const rules = {
    required: 'Required field',
  };

  return (
    <Block paddingBlock="space050" paddingInline="space050">
      <Form onSubmit={onSubmit}>
        <StorybookHeading>RadioButton and RadioGroup</StorybookHeading>
        <Fieldset legend="Favorite activities">
          <RadioGroup>
            {['Reading', 'Writing', 'Speaking', 'Listening'].map(value => (
              <FormInput key={value} name="favoriteActivities" rules={rules}>
                <FormInputRadioButton
                  label={value}
                  value={value}
                  overrides={{spaceStack: 'space030'}}
                />
              </FormInput>
            ))}
          </RadioGroup>
          <FormInput name="favoriteActivities" rules={rules}>
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </FormInput>
        </Fieldset>
        <Block spaceStack="space030" />
        <Button type="submit">Submit</Button>
      </Form>
    </Block>
  );
};

FormFieldRadioButton.storyName = 'form-input-radio-button';

export const StoryFormFieldset = () => (
  <>
    <StorybookHeading>FormInputs inside Fieldset</StorybookHeading>

    <Form onSubmit={onSubmit}>
      <Stack stackDistribution="space-between" flow="horizontal-top">
        <Fieldset
          legend="Small Fieldset"
          size="small"
          overrides={{
            stylePreset: 'fieldsetWithBorder',
            legend: {
              spaceStack: 'space070',
            },
          }}
        >
          <FormInputBlock spaceStack="space040">
            <FormInput
              name="first-name"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters long',
                },
                validate: validateUserName,
              }}
            >
              <FormInputLabel
                overrides={{
                  typographyPreset: 'utilityLabel010',
                  spaceStack: 'space030',
                }}
              >
                First name
              </FormInputLabel>
              <FormInputTextField
                startEnhancer={
                  <IconFilledAddCircleOutline
                    overrides={{size: 'iconSize020'}}
                  />
                }
                overrides={{spaceStack: 'space000'}}
              />
            </FormInput>
          </FormInputBlock>
          <FormInputBlock spaceStack="space050">
            <FormInput
              name="last-name"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 2,
                  message: 'Last name must be at least 2 characters long',
                },
                validate: validateUserName,
              }}
            >
              <FormInputLabel
                overrides={{
                  typographyPreset: 'utilityLabel010',
                  spaceStack: 'space030',
                }}
              >
                Last name
              </FormInputLabel>
              <FormInputTextField
                startEnhancer={
                  <IconFilledAddCircleOutline
                    overrides={{size: 'iconSize020'}}
                  />
                }
                overrides={{spaceStack: 'space020'}}
              />
              <FormInputAssistiveText>
                This should be your legal last name
              </FormInputAssistiveText>
            </FormInput>
          </FormInputBlock>
          <FormInputBlock>
            <FormInput
              name="small-checkbox"
              rules={{
                required: 'Required field',
              }}
            >
              <FormInputCheckbox
                label="I agree to the terms & conditions"
                value="tc"
                overrides={{spaceStack: 'space020'}}
              />
            </FormInput>
            <FormInput
              name="small-checkbox"
              rules={{
                required: 'Required field',
              }}
            >
              <FormInputCheckbox
                label="I want to hear about more offers"
                value="tc"
              />
            </FormInput>
          </FormInputBlock>
        </Fieldset>

        <Fieldset
          legend="Medium Fieldset"
          size="medium"
          overrides={{
            stylePreset: 'fieldsetWithBorder',
            legend: {
              spaceStack: 'space070',
            },
          }}
        >
          <FormInputBlock spaceStack="space050">
            <FormInput
              name="first-name"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters long',
                },
                validate: validateUserName,
              }}
            >
              <FormInputLabel
                overrides={{
                  typographyPreset: 'utilityLabel020',
                  spaceStack: 'space030',
                }}
              >
                First name
              </FormInputLabel>
              <FormInputTextField
                startEnhancer={
                  <IconFilledAddCircleOutline
                    overrides={{size: 'iconSize020'}}
                  />
                }
                overrides={{spaceStack: 'space000'}}
              />
            </FormInput>
          </FormInputBlock>

          <FormInputBlock spaceStack="space060">
            <FormInput
              name="last-name"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 2,
                  message: 'Last name must be at least 2 characters long',
                },
                validate: validateUserName,
              }}
            >
              <FormInputLabel
                overrides={{
                  typographyPreset: 'utilityLabel020',
                  spaceStack: 'space030',
                }}
              >
                Last name
              </FormInputLabel>
              <FormInputTextField
                startEnhancer={
                  <IconFilledAddCircleOutline
                    overrides={{size: 'iconSize020'}}
                  />
                }
                overrides={{spaceStack: 'space020'}}
              />
              <FormInputAssistiveText>
                This should be your legal last name
              </FormInputAssistiveText>
            </FormInput>
          </FormInputBlock>

          <FormInputBlock>
            <FormInput
              name="medium-checkbox"
              rules={{
                required: 'Required field',
              }}
            >
              <FormInputCheckbox
                label="I agree to the terms & conditions"
                value="tc"
                overrides={{spaceStack: 'space030'}}
              />
            </FormInput>
            <FormInput
              name="medium-checkbox"
              rules={{
                required: 'Required field',
              }}
            >
              <FormInputCheckbox
                label="I want to hear about more offers"
                value="tc"
              />
            </FormInput>
          </FormInputBlock>
        </Fieldset>

        <Fieldset
          legend="Large Fieldset"
          size="large"
          overrides={{
            stylePreset: 'fieldsetWithBorder',
            legend: {
              spaceStack: 'space070',
            },
          }}
        >
          <FormInputBlock spaceStack="space050">
            <FormInput
              name="first-name"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters long',
                },
                validate: validateUserName,
              }}
            >
              <FormInputLabel
                overrides={{
                  typographyPreset: 'utilityLabel030',
                  spaceStack: 'space030',
                }}
              >
                First name
              </FormInputLabel>
              <FormInputTextField
                startEnhancer={
                  <IconFilledAddCircleOutline
                    overrides={{size: 'iconSize010'}}
                  />
                }
                overrides={{
                  spaceStack: 'space000',
                }}
              />
            </FormInput>
          </FormInputBlock>
          <FormInputBlock spaceStack="space060">
            <FormInput
              name="last-name"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 2,
                  message: 'Last name must be at least 2 characters long',
                },
                validate: validateUserName,
              }}
            >
              <FormInputLabel
                overrides={{
                  typographyPreset: 'utilityLabel030',
                  spaceStack: 'space030',
                }}
              >
                Last name
              </FormInputLabel>
              <FormInputTextField
                startEnhancer={
                  <IconFilledAddCircleOutline
                    overrides={{size: 'iconSize010'}}
                  />
                }
                overrides={{
                  spaceStack: 'space020',
                }}
              />
              <FormInputAssistiveText>
                This should be your legal last name
              </FormInputAssistiveText>
            </FormInput>
          </FormInputBlock>

          <FormInputBlock>
            <FormInput
              name="large-checkbox"
              rules={{
                required: 'Required field',
              }}
            >
              <FormInputCheckbox
                label="I agree to the terms & conditions"
                value="tc"
                overrides={{spaceStack: 'space030'}}
              />
            </FormInput>
            <FormInput
              name="large-checkbox"
              rules={{
                required: 'Required field',
              }}
            >
              <FormInputCheckbox
                label="I want to hear about more offers"
                value="tc"
              />
            </FormInput>
          </FormInputBlock>
        </Fieldset>

        <Fieldset
          legend="Mixed Size Fieldset"
          size="small"
          overrides={{
            stylePreset: 'fieldsetWithBorder',
            legend: {
              spaceStack: 'space070',
            },
          }}
        >
          <FormInputBlock spaceStack="space040">
            <FormInput
              name="first-name"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters long',
                },
                validate: validateUserName,
              }}
            >
              <FormInputLabel
                overrides={{
                  typographyPreset: 'utilityLabel010',
                  spaceStack: 'space030',
                }}
              >
                First name
              </FormInputLabel>
              <FormInputTextField
                startEnhancer={
                  <IconFilledAddCircleOutline
                    overrides={{size: 'iconSize020'}}
                  />
                }
                overrides={{spaceStack: 'space000'}}
              />
            </FormInput>
          </FormInputBlock>
          <FormInputBlock spaceStack="space050">
            <FormInput
              name="last-name"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 2,
                  message: 'Last name must be at least 2 characters long',
                },
                validate: validateUserName,
              }}
              size="large"
            >
              <FormInputLabel
                overrides={{
                  typographyPreset: 'utilityLabel010',
                  spaceStack: 'space030',
                }}
              >
                Last name
              </FormInputLabel>
              <FormInputTextField
                startEnhancer={
                  <IconFilledAddCircleOutline
                    overrides={{size: 'iconSize020'}}
                  />
                }
                overrides={{spaceStack: 'space020'}}
              />
              <FormInputAssistiveText>
                This should be your legal last name
              </FormInputAssistiveText>
            </FormInput>
          </FormInputBlock>
          <FormInputBlock>
            <FormInput
              name="medium-checkbox"
              rules={{
                required: 'Required field',
              }}
              size="large"
            >
              <FormInputCheckbox
                label="I agree to the terms & conditions"
                value="tc"
                overrides={{spaceStack: 'space020'}}
                size="medium"
              />
            </FormInput>
            <FormInput
              name="small-checkbox"
              rules={{
                required: 'Required field',
              }}
            >
              <FormInputCheckbox
                label="I want to hear about more offers"
                value="tc"
              />
            </FormInput>
          </FormInputBlock>
        </Fieldset>
      </Stack>
    </Form>
  </>
);
StoryFormFieldset.storyName = 'form-input-fieldset';

export default {
  title: 'Components/form-input',
  component: () => 'None',
  disabledRules: [],
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          formInputCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
