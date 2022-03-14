import React from 'react';
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
  createTheme,
  IconButton,
  IconFilledAccountBalance,
  IconFilledAccountTree,
  IconFilledAddCircleOutline,
  IconFilledRemoveRedEye,
  IconFilledStop,
  Stack,
  StackDistribution,
  styled,
  ThemeProvider,
} from '../..';
import {SelectOption} from '../../select';
import {TextFieldSize} from '../../text-field';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Fieldset} from '../../fieldset';
import {RadioGroup} from '../../radio-button';
import {GridLayout} from '../../grid-layout';

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

export const FormFieldRadioButton = () => {
  const rules = {
    required: 'Required field',
  };

  return (
    <Block spaceInset="space050">
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

const myCustomTheme = createTheme({
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
});

export const StoryFormFieldset = () => (
  <>
    <StorybookHeading>FormInputs inside Fieldset</StorybookHeading>

    <Form onSubmit={onSubmit}>
      <ThemeProvider theme={myCustomTheme}>
        <Stack
          stackDistribution={StackDistribution.SpaceBetween}
          flow="horizontal-top"
        >
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
                size={'large' as TextFieldSize}
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
                size={'large' as TextFieldSize}
              >
                <FormInputCheckbox
                  label="I agree to the terms & conditions"
                  value="tc"
                  overrides={{spaceStack: 'space020'}}
                  size={'medium' as TextFieldSize}
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
      </ThemeProvider>
    </Form>
  </>
);
StoryFormFieldset.storyName = 'form-input-fieldset';

const ShowPasswordButton = ({onClick, isVisible}) => (
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

const FormContainer = styled.div`
  height: 700px;
  overflow: auto;
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const formExampleTheme = createTheme({
  name: 'my-form-theme',
  overrides: {
    componentDefaults: {
      label: {
        medium: {
          spaceStack: 'space020',
        },
      },
      textField: {
        medium: {
          spaceStack: 'space030',
        },
      },
      radioButton: {
        medium: {
          spaceStack: 'space030',
        },
      },
      checkbox: {
        medium: {
          spaceStack: 'space030',
        },
      },
      assistiveText: {
        medium: {
          spaceStack: 'space060',
        },
      },
      // Why we cant change this ?
      fieldset: {
        spaceStack: 'space040',
      },
      legend: {
        medium: {
          typographyPreset: 'utilityLabel030',
          spaceStack: 'space050',
        },
      },
    },
  },
});

export const StoryFormComplete = () => {
  const [showPassword, toggleShowPassword] = React.useState(false);

  return (
    <ThemeProvider theme={formExampleTheme}>
      <FormContainer>
        <Form onSubmit={data => console.log(data)}>
          <Fieldset legend="Personal">
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
          </Fieldset>

          <Fieldset legend="Login information">
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
          </Fieldset>

          <Fieldset legend="Gender">
            <FormInput
              name="sex"
              rules={{
                required: 'Required field',
              }}
            >
              <RadioGroup>
                <FormInputRadioButton value="male" label="Male" />
                <FormInputRadioButton value="female" label="Female" />
                <FormInputRadioButton value="3rd" label="Third Gender" />
                <FormInputRadioButton value="noSay" label="Not to say" />
              </RadioGroup>
              <FormInputAssistiveText>Make your choice</FormInputAssistiveText>
            </FormInput>
          </Fieldset>

          <Fieldset legend="Interests">
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
              <FormInputCheckbox value="politics" label="Politics" />
              <FormInputCheckbox value="Business" label="Business" />
              <FormInputCheckbox value="Society" label="Society" />
              <FormInputCheckbox value="Technology" label="Technology" />
              <FormInputCheckbox value="Sport" label="Sport" />
              <FormInputCheckbox value="Science" label="Science" />
              <FormInputAssistiveText>Make your choice</FormInputAssistiveText>
            </FormInput>
          </Fieldset>

          <Button type="submit">Register</Button>
        </Form>
      </FormContainer>
    </ThemeProvider>
  );
};

StoryFormComplete.storyName = 'form-complete';

type FormEntry = {
  name: string;
  label: string;
  assistiveText?: string;
  type?: 'text' | 'password' | 'email' | 'select' | 'checkbox' | 'radio';
  options?: {value: string; label: string}[];
  rules?: Record<string, string | object>;
};

const formEntries: FormEntry[] = [
  {
    name: 'first-name',
    label: 'First Name',
    assistiveText: 'Enter your first name',
    type: 'text',
    rules: {
      required: 'Required field',
      minLength: {
        value: 2,
        message: 'Name must be at least 2 characters long',
      },
    },
    options: [],
  },
  {
    name: 'last-name',
    label: 'Last name',
    assistiveText: 'Enter your last name',
    type: 'text',
    rules: {
      required: 'Required field',
      minLength: {
        value: 2,
        message: 'Name must be at least 2 characters long',
      },
    },
    options: [],
  },
  {
    name: 'country',
    label: 'Country',
    assistiveText: 'Select your country',
    type: 'select',
    rules: {required: 'Required field'},
    options: [
      {value: 'BG', label: 'Bulgaria'},
      {value: 'UK', label: 'United Kingdom'},
      {value: 'NL', label: 'The Netherlands'},
    ],
  },
  {
    name: 'email',
    label: 'Email',
    assistiveText: 'Enter our email address',
    type: 'email',
    rules: {
      required: 'Required field',
      pattern: /^\S+@\S+$/i,
    },
    options: [],
  },
  {
    name: 'password',
    label: 'Password',
    assistiveText: 'Enter password min 8 chars',
    type: 'password',
    rules: {
      required: 'Required field',
      minLength: {
        value: 8,
        message: 'Name must be at least 8 characters long',
      },
    },
    options: [],
  },
  {
    name: 'gender',
    label: 'Gender',
    assistiveText: 'Make your choice',
    type: 'checkbox',
    rules: {required: 'Required field'},
    options: [
      {value: 'male', label: 'Male'},
      {value: 'female', label: 'Female'},
      {value: '3rd', label: 'Third Gender'},
      {value: 'noSay', label: 'Not to say'},
    ],
  },
  {
    name: 'interests',
    label: 'Interests',
    assistiveText: 'Select at last 3',
    type: 'radio',
    rules: {
      required: 'Required field',
      validate: (value: string[]) => {
        if (value.length < 3) {
          return 'Select at least 3 interests';
        }

        return true;
      },
    },
    options: [
      {value: 'Politics', label: 'Politics'},
      {value: 'Business', label: 'Business'},
      {value: 'Society', label: 'Society'},
      {value: 'Technology', label: 'Technology'},
      {value: 'Sport', label: 'Sport'},
      {value: 'Science', label: 'Science'},
    ],
  },
];

type FormConfig = {
  onSubmit: (values: Record<string, string | number>) => void;
  inputSize: 'small' | 'medium' | 'large' | TextFieldSize;
  space: {
    small: string;
    medium: string;
    large: string;
  };
};

const makeRadioGroup = (
  {name, rules, options, assistiveText, label}: FormEntry,
  config: FormConfig,
) => (
  <Fieldset legend={label} size={config.inputSize}>
    <FormInput
      name={name}
      rules={rules}
      size={config.inputSize as TextFieldSize}
    >
      <RadioGroup>
        {options.map(option => (
          <FormInputRadioButton
            key={option.label}
            value={option.value}
            label={option.label}
            overrides={{spaceStack: config.space.small}}
          />
        ))}
      </RadioGroup>
      <FormInputAssistiveText>{assistiveText}</FormInputAssistiveText>
    </FormInput>
  </Fieldset>
);

const makeCheckboxGroup = (
  {name, rules, options, assistiveText, label}: FormEntry,
  config: FormConfig,
) => (
  <Fieldset legend={label} size={config.inputSize as TextFieldSize}>
    <FormInput name={name} rules={rules}>
      <>
        {options.map(option => (
          <FormInputCheckbox
            key={option.label}
            value={option.value}
            label={option.label}
            overrides={{spaceStack: config.space.small}}
          />
        ))}
      </>
      <FormInputAssistiveText>{assistiveText}</FormInputAssistiveText>
    </FormInput>
  </Fieldset>
);

const makeSelect = (
  {name, rules, label, assistiveText, options}: FormEntry,
  config: FormConfig,
) => (
  <div>
    <FormInput
      name={name}
      rules={rules}
      size={config.inputSize as TextFieldSize}
    >
      <FormInputLabel>{label}</FormInputLabel>
      <FormInputSelect>
        {options.map(option => (
          <SelectOption value={option.value}>{option.label}</SelectOption>
        ))}
      </FormInputSelect>
      <FormInputAssistiveText>{assistiveText}</FormInputAssistiveText>
    </FormInput>
  </div>
);

const makeInput = (
  {name, rules, label, assistiveText, ...props}: FormEntry,
  config: FormConfig,
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showPassword, toggleShowPassword] = React.useState(false);
  const type =
    // eslint-disable-next-line no-nested-ternary
    props.type === 'password'
      ? showPassword
        ? 'password'
        : 'text'
      : props.type;

  const endEnhancer =
    props.type === 'password' ? (
      <ShowPasswordButton
        onClick={() => toggleShowPassword(!showPassword)}
        isVisible={showPassword}
      />
    ) : null;

  return (
    <div>
      <FormInput
        name={name}
        rules={rules}
        size={config.inputSize as TextFieldSize}
      >
        <FormInputLabel>{label}</FormInputLabel>
        <FormInputTextField type={type} endEnhancer={endEnhancer} />
        <FormInputAssistiveText>{assistiveText}</FormInputAssistiveText>
      </FormInput>
    </div>
  );
};

const createForm = (items: FormEntry[], config: FormConfig) => (
  <Form onSubmit={config.onSubmit}>
    <GridLayout rowGap={config.space.medium}>
      {items.map(entry => {
        switch (entry.type) {
          case 'radio':
            return makeRadioGroup(entry, config);
          case 'checkbox':
            return makeCheckboxGroup(entry, config);
          case 'select':
            return makeSelect(entry, config);
          default:
            return makeInput(entry, config);
        }
      })}
      <Button type="submit" size={config.inputSize}>
        Send
      </Button>
    </GridLayout>
  </Form>
);

export const StoryFormBuilder = () => (
  <FormContainer>
    {createForm(formEntries, {
      onSubmit: data => console.log(data),
      inputSize: 'small',
      space: {
        small: 'space030',
        medium: 'space060',
        large: 'space090',
      },
    })}
  </FormContainer>
);

StoryFormBuilder.storyName = 'form-builder';
