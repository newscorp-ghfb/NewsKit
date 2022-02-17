import * as React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-phone-number-input/style.css';
import {Form, FormInput, FormInputCheckbox, FormRef} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Button} from '../../button';
import {TextInput, TextInputSize} from '../../text-input';
import {Block} from '../../block';
import {Stack} from '../../stack';
import {styled} from '../../utils';
import {TextBlock} from '../..';

const PhoneInputWithCountry = require('react-phone-number-input/react-hook-form')
  .default;

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

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
});

export default {
  title: 'NewsKit Light/form',
  component: () => 'None',
};

export const StoryFormWithSubmitValidation = () => (
  <>
    <StorybookHeading>Form</StorybookHeading>
    <Block>
      <StorybookSubHeading>Input validation mode: onSubmit</StorybookSubHeading>
      <Form onSubmit={onSubmit}>
        <Block spaceStack="space050">
          <TextInput
            label="Email"
            name="email"
            rules={{
              required: 'Required field',
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: 'Please provide a valid email',
              },
            }}
          />
        </Block>
        <Block spaceStack="space050">
          <TextInput
            label="Username"
            name="username"
            rules={{
              required: 'Required field',
              minLength: {
                value: 5,
                message: 'Usernames must be at least 5 characters long',
              },
              validate: validateUserName,
            }}
          />
        </Block>
        <Button type="submit">Submit</Button>
      </Form>
    </Block>
  </>
);
StoryFormWithSubmitValidation.storyName = 'form-with-submit-validation';

export const StoryFormWithResolver = () => (
  <>
    <div data-testid="yup-resolver">
      <StorybookHeading>Form</StorybookHeading>
      <Block>
        <StorybookSubHeading>Yup Schema Validation</StorybookSubHeading>
        <Form onSubmit={onSubmit} resolver={yupResolver(schema)}>
          <Block spaceStack="space050">
            <TextInput label="Email" name="email" data-testid="email-input" />
          </Block>
          <Block spaceStack="space050">
            <TextInput
              label="Username"
              name="username"
              data-testid="username-input"
            />
          </Block>
          <Button type="submit" data-testid="submit-button">
            Submit
          </Button>
        </Form>
      </Block>
    </div>
  </>
);
StoryFormWithResolver.storyName = 'form-with-resolver';

export const StoryFormWithSubmitValidationAndAssistiveText = () => (
  <>
    <StorybookHeading>Form</StorybookHeading>
    <Block>
      <StorybookSubHeading>
        onSubmit validation and assistive text
      </StorybookSubHeading>
      <Form onSubmit={onSubmit}>
        <Block spaceStack="space050">
          <TextInput
            label="Email"
            name="email"
            assistiveText="Your email"
            rules={{
              required: 'Required field',
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: 'Please provide a valid email',
              },
            }}
          />
        </Block>
        <Block spaceStack="space050">
          <TextInput
            label="Username"
            name="username"
            assistiveText="Your username"
            rules={{
              required: 'Required field',
              minLength: {
                value: 5,
                message: 'Usernames must be at least 5 characters long',
              },
              validate: validateUserName,
            }}
          />
        </Block>
        <Button type="submit">Submit</Button>
      </Form>
    </Block>
  </>
);
StoryFormWithSubmitValidationAndAssistiveText.storyName =
  'form-with-submit-validation-and-assistive-text';

export const StoryFormSizes = () => (
  <>
    <StorybookHeading>Form with</StorybookHeading>
    <Block>
      <Stack
        flow="horizontal-center"
        stackDistribution="space-between"
        spaceInline="space030"
      >
        <Form onSubmit={onSubmit} validationMode="onBlur">
          <StorybookSubHeading>large text input</StorybookSubHeading>
          <Block spaceStack="space050">
            <TextInput
              size={TextInputSize.Large}
              label="Email"
              name="email"
              assistiveText="Your email"
              rules={{
                required: 'Required field',
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                  message: 'Please provide a valid email',
                },
              }}
            />
          </Block>
          <Block spaceStack="space050">
            <TextInput
              size={TextInputSize.Large}
              label="Username"
              name="username"
              assistiveText="Your username"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 5,
                  message: 'Usernames must be at least 5 characters long',
                },
                validate: validateUserName,
              }}
            />
          </Block>
          <Button type="submit">Submit</Button>
        </Form>
        <Form onSubmit={onSubmit} validationMode="onBlur">
          <StorybookSubHeading>medium text input</StorybookSubHeading>
          <Block spaceStack="space050">
            <TextInput
              size={TextInputSize.Medium}
              label="Email"
              name="email"
              assistiveText="Your email"
              rules={{
                required: 'Required field',
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                  message: 'Please provide a valid email',
                },
              }}
            />
          </Block>
          <Block spaceStack="space050">
            <TextInput
              size={TextInputSize.Medium}
              label="Username"
              name="username"
              assistiveText="Your username"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 5,
                  message: 'Usernames must be at least 5 characters long',
                },
                validate: validateUserName,
              }}
            />
          </Block>
          <Button type="submit">Submit</Button>
        </Form>
        <Form onSubmit={onSubmit} validationMode="onBlur">
          <StorybookSubHeading>small text input</StorybookSubHeading>
          <Block spaceStack="space050">
            <TextInput
              size={TextInputSize.Small}
              label="Email"
              name="email"
              assistiveText="Your email"
              rules={{
                required: 'Required field',
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                  message: 'Please provide a valid email',
                },
              }}
            />
          </Block>
          <Block spaceStack="space050">
            <TextInput
              size={TextInputSize.Small}
              label="Username"
              name="username"
              assistiveText="Your username"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 5,
                  message: 'Usernames must be at least 5 characters long',
                },
                validate: validateUserName,
              }}
            />
          </Block>
          <Button type="submit">Submit</Button>
        </Form>
      </Stack>
    </Block>
  </>
);
StoryFormSizes.storyName = 'form-sizes';

export const StoryFormWithPhoneInput = () => {
  const FormWithPhoneInput: React.FC = () => {
    const formRef = React.useRef<FormRef>(null);
    const [value, setValue] = React.useState();
    return (
      <Block>
        <Stack
          flow="horizontal-center"
          stackDistribution="space-between"
          spaceInline="space030"
        >
          <Form ref={formRef} onSubmit={onSubmit} validationMode="onBlur">
            <Block spaceStack="space050">
              <TextInput
                size={TextInputSize.Small}
                label="Username"
                name="username"
                assistiveText="Your username"
                rules={{
                  required: 'Required field',
                  minLength: {
                    value: 5,
                    message: 'Usernames must be at least 5 characters long',
                  },
                  validate: validateUserName,
                }}
              />
            </Block>
            <Block>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="phone-number">Phone number</label>
              <PhoneInputWithCountry
                placeholder="Enter phone number"
                name="phonenumber"
                control={formRef.current?.control}
                value={value}
                onChange={setValue}
                id="phone-number"
              />
            </Block>
            <Button type="submit">Submit</Button>
          </Form>
        </Stack>
      </Block>
    );
  };
  return (
    <>
      <StorybookHeading>Form with Telephone number</StorybookHeading>
      <FormWithPhoneInput />
    </>
  );
};
StoryFormWithPhoneInput.storyName = 'form-with-phone-input';
StoryFormWithPhoneInput.parameters = {eyes: {include: false}};

export const StoryFormWithCustomStyles = () => {
  const StyledForm = styled(Form)`
    background: #fcf7de;
    width: 100%;
    border: 1px dashed;
  `;
  return (
    <>
      <StorybookHeading>Form with custom styles</StorybookHeading>
      <Block>
        <StyledForm onSubmit={onSubmit}>
          <Block spaceStack="space050">
            <TextInput
              label="Email"
              name="email"
              rules={{
                required: 'Required field',
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                  message: 'Please provide a valid email',
                },
              }}
            />
          </Block>
          <Button type="submit">Submit</Button>
        </StyledForm>
      </Block>
    </>
  );
};
StoryFormWithCustomStyles.storyName = 'form-with-custom-styles';

export const StoryRenderBug = () => (
  <>
    <div data-testid="yup-resolver">
      <StorybookHeading>Render bug reproduction</StorybookHeading>
      <Block>
        <StorybookSubHeading>Steps to reproduce:</StorybookSubHeading>
        <ol>
          <li>
            Enter a valid value into the username field (5 characters or longer)
          </li>
          <li>Tab into the next field (green validation tick still there)</li>
          <li>
            Tab into the next field - checkbox (green validation tick still
            there)
          </li>
          <li>
            Shift Tab back to the previous field (green validation tick is gone
            now)
          </li>
        </ol>
        <TextBlock>
          This seems to be only happening when the FormInputCheckbox is wrapped
          in FormInput but it doesn&apos;t seem to matter whether the checkbox
          is required.
        </TextBlock>
        <TextBlock>
          Please let the render team know when this is fixed.
        </TextBlock>
        <Block spaceStack="space050" />
        <Form
          onSubmit={onSubmit}
          validationMode="onBlur"
          reValidationMode="onBlur"
          resolver={yupResolver(schema)}
        >
          <Block spaceStack="space050">
            <TextInput
              label="Username"
              name="username"
              data-testid="username-input"
            />
          </Block>
          <Block spaceStack="space050">
            <TextInput
              label="Potato"
              name="potato"
              data-testid="potato-input"
            />
          </Block>
          <FormInput name="small-checkbox">
            <FormInputCheckbox
              label="I agree to the terms & conditions"
              value="tc"
              overrides={{spaceStack: 'space020'}}
            />
          </FormInput>
          <Button type="submit" data-testid="submit-button">
            Submit
          </Button>
        </Form>
      </Block>
    </div>
  </>
);
StoryRenderBug.storyName = 'story-render-bug';
