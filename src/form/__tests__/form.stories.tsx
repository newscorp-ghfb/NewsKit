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
  FormInputLabel,
  FormInputTextField,
} from '..';
import {Button} from '../../button';
import {styled} from '../../utils';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {FormInputContext} from '../context';
import {StorybookPage} from '../../test/storybook-comps';

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

export const StoryFormDefault = () => (
  <StorybookPage>
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
  </StorybookPage>
);
StoryFormDefault.storyName = 'Default';

export const StoryFormSubmitValidation = () => (
  <StorybookPage>
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
  </StorybookPage>
);
StoryFormSubmitValidation.storyName = 'Submit validation';

export const StoryFormYupResolver = () => (
  <StorybookPage data-testid="yup-resolver">
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
  </StorybookPage>
);
StoryFormYupResolver.storyName = 'Yup schema validation';

export const StoryFormValidationAndAssistiveText = () => (
  <StorybookPage>
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
  </StorybookPage>
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
  <StorybookPage>
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
  </StorybookPage>
);
StoryFormPhoneInputExample.storyName = 'Phone input example';

export const StoryFormEmailInputExample = () => (
  <StorybookPage>
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
  </StorybookPage>
);
StoryFormEmailInputExample.storyName = 'Email input example';

export const StoryFormLogicalProps = () => (
  <StorybookPage>
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
  </StorybookPage>
);
StoryFormLogicalProps.storyName = 'Logical props';
