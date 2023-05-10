import * as React from 'react';
import {
  Form,
  FormInput,
  FormInputAssistiveText,
  FormInputCheckbox,
  FormInputLabel,
  FormInputRadioButton,
  FormInputSelect,
  FormInputTextField,
} from '..';
import {Button} from '../button';
import {Block} from '../block';
import {IconFilledRemoveRedEye, IconFilledStop} from '../icons';
import {IconButton} from '../icon-button';
import {Fieldset} from '../fieldset';
import {SelectOption} from '../select';
import {RadioGroup} from '../radio-button';
import {StorybookPage} from '../test/storybook-comps';

export default {
  title: 'Composed/Form',
  component: () => 'None',
  parameters: {
    previewTabs: {
      'storybook/canvas/panel': {index: -1},
      'storybook/docs/panel': {hidden: true},
    },
    viewMode: 'story',
    docs: {
      page: null,
    },
  },
};

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
    <StorybookPage>
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

        <Fieldset legend="Subscription type">
          <Block marginBlockStart="space020" marginBlockEnd="space050">
            <FormInput
              name="subscription"
              rules={{
                required: 'Required field',
              }}
            >
              <RadioGroup>
                <FormInputRadioButton
                  id="subscription-online"
                  value="online"
                  label="Online"
                  overrides={{marginBlockEnd: 'space020'}}
                />
                <FormInputRadioButton
                  id="subscription-print"
                  value="print"
                  label="Print"
                  overrides={{marginBlockEnd: 'space020'}}
                />
                <FormInputRadioButton
                  id="subscription-both"
                  value="both"
                  label="Online and print"
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
                id="interests-business"
                value="Business"
                label="Business"
                overrides={{marginBlockEnd: 'space020'}}
              />
              <FormInputCheckbox
                id="interests-society"
                value="Society"
                label="Society"
                overrides={{marginBlockEnd: 'space020'}}
              />
              <FormInputCheckbox
                id="interests-technology"
                value="Technology"
                label="Technology"
                overrides={{marginBlockEnd: 'space020'}}
              />
              <FormInputCheckbox
                id="interests-sport"
                value="Sport"
                label="Sport"
                overrides={{marginBlockEnd: 'space020'}}
              />
              <FormInputCheckbox
                id="interests-science"
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
    </StorybookPage>
  );
};
StoryFormComplete.storyName = 'Complete';
