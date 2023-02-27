import * as React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-phone-number-input/style.css';
import {UseFormReturn} from 'react-hook-form';
import {Form, FormInput, FormInputCheckbox, FormRef} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
  StorybookLabel,
} from '../../test/storybook-comps';
import {Button} from '../../button';
import {TextInput} from '../../text-input';
import {Block} from '../../block';
import {Stack} from '../../stack';
import {styled} from '../../utils';

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

const StyledDiv = styled.div`
  border: 1px solid red;
`;

export default {
  title: 'Components/form',
  component: () => 'None',
};

export const StoryFormWithSubmitValidation = () => (
  <>
    <StorybookHeading>Form</StorybookHeading>
    <Block>
      <StorybookSubHeading>Input validation mode: onSubmit</StorybookSubHeading>
      <Form onSubmit={onSubmit}>
        <Block marginBlockEnd="space050">
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
        <Block marginBlockEnd="space050">
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
          <Block marginBlockEnd="space050">
            <TextInput label="Email" name="email" data-testid="email-input" />
          </Block>
          <Block marginBlockEnd="space050">
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
        <Block marginBlockEnd="space050">
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
        <Block marginBlockEnd="space050">
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
          <Block marginBlockEnd="space050">
            <TextInput
              size="large"
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
          <Block marginBlockEnd="space050">
            <TextInput
              size="large"
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
          <Block marginBlockEnd="space050">
            <TextInput
              size="medium"
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
          <Block marginBlockEnd="space050">
            <TextInput
              size="medium"
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
          <Block marginBlockEnd="space050">
            <TextInput
              size="small"
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
          <Block marginBlockEnd="space050">
            <TextInput
              size="small"
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
    const [phoneInputValue, setPhoneInputValue] = React.useState();
    const [formControl, setFormControl] = React.useState<
      UseFormReturn['control'] | null
    >();

    const formControlRefHandler = (formRef: FormRef | null) => {
      if (formRef && formRef.control) {
        setFormControl(formRef.control);
      }
    };

    return (
      <Block>
        <Stack
          flow="horizontal-center"
          stackDistribution="space-between"
          spaceInline="space030"
        >
          <Form
            ref={newRef => formControlRefHandler(newRef)}
            onSubmit={onSubmit}
            validationMode="onBlur"
          >
            <Block marginBlockEnd="space050">
              <TextInput
                size="small"
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
              <StorybookLabel htmlFor="phone-number">
                Phone number
              </StorybookLabel>
              {formControl && (
                <PhoneInputWithCountry
                  placeholder="Enter phone number"
                  name="phonenumber"
                  value={phoneInputValue}
                  control={formControl}
                  onChange={setPhoneInputValue}
                  id="phone-number"
                />
              )}
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
StoryFormWithPhoneInput.parameters = {
  percy: {skip: true},
};

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
          <Block marginBlockEnd="space050">
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

export const StoryFormWithTextInputAndFormInput = () => (
  <>
    <StorybookHeading>Use Tab to move through the inputs</StorybookHeading>
    <Block marginBlockEnd="space050" />
    <Form onSubmit={onSubmit} validationMode="onBlur" reValidationMode="onBlur">
      <Block marginBlockEnd="space050">
        <TextInput
          label="Username"
          name="username"
          data-testid="username-input"
          rules={{
            required: 'Required field',
          }}
        />
      </Block>
      <Block marginBlockEnd="space050">
        <TextInput label="FAQ" name="faq" data-testid="faq-input" />
      </Block>
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
      <Button type="submit" data-testid="submit-button">
        Submit
      </Button>
    </Form>
  </>
);
StoryFormWithTextInputAndFormInput.storyName =
  'form-with-text-input-and-form-input';

export const StoryFormWithLogicalProps = () => (
  <>
    <StorybookHeading>Form with logical properties</StorybookHeading>
    <StorybookSubHeading>Logical padding </StorybookSubHeading>
    <StyledDiv>
      <Form
        onSubmit={onSubmit}
        paddingBlock="space050"
        paddingInline="space030"
      >
        <Block marginBlockEnd="space050">
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
      </Form>
    </StyledDiv>
    <StorybookSubHeading>Logical margin </StorybookSubHeading>
    <StyledDiv>
      <Form onSubmit={onSubmit} marginBlock="space050" marginInline="space030">
        <Block marginBlockEnd="space050">
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
      </Form>
    </StyledDiv>
  </>
);
StoryFormWithLogicalProps.storyName = 'form-with-logical-props';
