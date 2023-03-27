import * as React from 'react';
import {useContext} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-phone-number-input/style.css';
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input';
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
import {Button} from '../../button';
import {Block} from '../../block';
import {styled} from '../../utils';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {FormInputContext} from '../context';
import {IconFilledRemoveRedEye, IconFilledStop} from '../../icons';
import {IconButton} from '../../icon-button';
import {Fieldset} from '../../fieldset';
import {SelectOption} from '../../select';
import {RadioGroup} from '../../radio-button';

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

const emailValidation = {
  required: 'Required field',
  pattern: {
    // eslint-disable-next-line no-useless-escape
    value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Please provide a valid email',
  },
};

const usernameValidation = {
  required: 'Required field',
  minLength: {
    value: 5,
    message: 'Usernames must be at least 5 characters long',
  },
  validate: validateUserName,
};

const phoneNumberValidation = {
  required: 'Required field',
  validate: (v: string) =>
    isValidPhoneNumber(v) || 'Please provide a valid phone number.',
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
});

export default {
  title: 'Components/Form',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'Form',
      url: 'https://newskit.co.uk/components/form',
      description:
        'The form component allows users to enter and edit information into a UI using form controls. Based on React Hook Form.',
    },
  },
};

const Container = styled.div`
  max-width: 300px;
`;

export const StoryFormDefault = () => (
  <Container>
    <Form onSubmit={onSubmit}>
      <GridLayout rowGap="space050">
        <GridLayoutItem>
          <FormInput name="email">
            <FormInputLabel>Email</FormInputLabel>
            <FormInputTextField />
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </FormInput>
        </GridLayoutItem>
        <GridLayoutItem>
          <FormInput name="username">
            <FormInputLabel>Username</FormInputLabel>
            <FormInputTextField />
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </FormInput>
        </GridLayoutItem>
        <GridLayoutItem>
          <Button type="submit">Submit</Button>
        </GridLayoutItem>
      </GridLayout>
    </Form>
  </Container>
);
StoryFormDefault.storyName = 'Default';

export const StoryFormSubmitValidation = () => (
  <Container>
    <Form onSubmit={onSubmit}>
      <GridLayout rowGap="space050">
        <GridLayoutItem>
          <FormInput name="email" rules={emailValidation}>
            <FormInputLabel>Email</FormInputLabel>
            <FormInputTextField />
          </FormInput>
        </GridLayoutItem>
        <GridLayoutItem>
          <FormInput name="username" rules={usernameValidation}>
            <FormInputLabel>Username</FormInputLabel>
            <FormInputTextField />
          </FormInput>
        </GridLayoutItem>
        <GridLayoutItem>
          <Button type="submit">Submit</Button>
        </GridLayoutItem>
      </GridLayout>
    </Form>
  </Container>
);
StoryFormSubmitValidation.storyName = 'Submit validation';

export const StoryFormYupResolver = () => (
  <Container data-testid="yup-resolver">
    <Form onSubmit={onSubmit} resolver={yupResolver(schema)}>
      <GridLayout rowGap="space050">
        <GridLayoutItem>
          <FormInput name="email">
            <FormInputLabel>Email</FormInputLabel>
            <FormInputTextField data-testid="email-input" />
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </FormInput>
        </GridLayoutItem>
        <GridLayoutItem>
          <FormInput name="username">
            <FormInputLabel>Username</FormInputLabel>
            <FormInputTextField data-testid="username-input" />
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </FormInput>
        </GridLayoutItem>
        <GridLayoutItem>
          <Button type="submit" data-testid="submit-button">
            Submit
          </Button>
        </GridLayoutItem>
      </GridLayout>
    </Form>
  </Container>
);
StoryFormYupResolver.storyName = 'Yup schema validation';

export const StoryFormValidationAndAssistiveText = () => (
  <Container>
    <Form onSubmit={onSubmit}>
      <GridLayout rowGap="space050">
        <GridLayoutItem>
          <FormInput name="email" rules={emailValidation}>
            <FormInputLabel>Email</FormInputLabel>
            <FormInputTextField />
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </FormInput>
        </GridLayoutItem>
        <GridLayoutItem>
          <FormInput name="username" rules={usernameValidation}>
            <FormInputLabel>Username</FormInputLabel>
            <FormInputTextField />
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </FormInput>
        </GridLayoutItem>
        <GridLayoutItem>
          <Button type="submit">Submit</Button>
        </GridLayoutItem>
      </GridLayout>
    </Form>
  </Container>
);
StoryFormValidationAndAssistiveText.storyName = 'Validation and assistive text';

const StyledPhoneInput = styled.div`
  input {
    border: none;
    color: rgb(59, 59, 59);
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  input:focus {
    outline: none;
  }

  .PhoneInput {
    border: 1px solid #919191;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 8px;
  }

  .PhoneInput:has(input:focus) {
    outline: 2px solid #3768fb;
  }
`;

const FormInputPhoneNumber = React.forwardRef<HTMLInputElement>(() => {
  const {
    name,
    onChange: onChangeContext,
    onBlur: onBlurContext,
    ref,
    id,
  } = useContext(FormInputContext);

  const onChange = (value: string) =>
    onChangeContext &&
    onChangeContext({target: {value}} as React.ChangeEvent<HTMLInputElement>);

  return (
    <StyledPhoneInput>
      <PhoneInput
        defaultCountry="GB"
        name={name}
        onChange={onChange}
        onBlur={onBlurContext}
        ref={ref}
        id={id}
      />
    </StyledPhoneInput>
  );
});

export const StoryFormPhoneInputExample = () => (
  <Container>
    <Form onSubmit={onSubmit}>
      <GridLayout rowGap="space050">
        <GridLayoutItem>
          <FormInput name="email" rules={emailValidation}>
            <FormInputLabel>Email</FormInputLabel>
            <FormInputTextField />
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </FormInput>
        </GridLayoutItem>
        <GridLayoutItem>
          <FormInput name="phoneNumber" rules={phoneNumberValidation}>
            <FormInputLabel>Phone number</FormInputLabel>
            <FormInputPhoneNumber />
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </FormInput>
        </GridLayoutItem>
        <GridLayoutItem>
          <Button type="submit">Submit</Button>
        </GridLayoutItem>
      </GridLayout>
    </Form>
  </Container>
);
StoryFormPhoneInputExample.storyName = 'Phone input example';

export const StoryFormEmailInputExample = () => (
  <Container>
    <Form onSubmit={onSubmit}>
      <GridLayout rowGap="space050">
        <GridLayoutItem>
          <FormInput name="email" rules={emailValidation}>
            <FormInputLabel>Email</FormInputLabel>
            <FormInputTextField />
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </FormInput>
        </GridLayoutItem>
        <GridLayoutItem>
          <Button type="submit">Submit</Button>
        </GridLayoutItem>
      </GridLayout>
    </Form>
  </Container>
);
StoryFormEmailInputExample.storyName = 'Email input example';

export const StoryFormLogicalProps = () => (
  <Container>
    <Form onSubmit={onSubmit}>
      <GridLayout rowGap="space050">
        <GridLayoutItem>
          <FormInput name="email" rules={emailValidation}>
            <FormInputLabel>Email</FormInputLabel>
            <FormInputTextField overrides={{paddingBlock: 'space030'}} />
            <FormInputAssistiveText overrides={{marginBlockEnd: 'space050'}}>
              Assistive Text
            </FormInputAssistiveText>
          </FormInput>
        </GridLayoutItem>
        <GridLayoutItem>
          <Button type="submit">Submit</Button>
        </GridLayoutItem>
      </GridLayout>
    </Form>
  </Container>
);
StoryFormLogicalProps.storyName = 'Logical props';

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
    </FormContainer>
  );
};
StoryFormComplete.storyName = 'Form complete';
