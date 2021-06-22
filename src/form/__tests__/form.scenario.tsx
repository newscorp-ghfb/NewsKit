import * as React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-phone-number-input/style.css';
import {Form, FormRef} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Button} from '../../button';
import {TextInput, TextInputSize} from '../../text-input';
import {Block} from '../../block';
import {Stack} from '../../stack';

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
  title: 'form',
  children: [
    {
      storyName: 'form-with-submit-validation',
      storyFn: () => (
        <React.Fragment>
          <StorybookHeading>Form</StorybookHeading>
          <Block>
            <StorybookSubHeading>
              Input validation mode: onSubmit
            </StorybookSubHeading>
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
        </React.Fragment>
      ),
    },
    {
      storyName: 'form-with-resolver',
      storyFn: () => (
        <React.Fragment>
          <div data-testid="yup-resolver">
            <StorybookHeading>Form</StorybookHeading>
            <Block>
              <StorybookSubHeading>Yup Schema Validation</StorybookSubHeading>
              <Form onSubmit={onSubmit} resolver={yupResolver(schema)}>
                <Block spaceStack="space050">
                  <TextInput
                    label="Email"
                    name="email"
                    data-testid="email-input"
                  />
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
        </React.Fragment>
      ),
    },
    {
      storyName: 'form-with-submit-validation-and-assistive-text',
      storyFn: () => (
        <React.Fragment>
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
        </React.Fragment>
      ),
    },
    {
      storyName: 'form-sizes',
      storyFn: () => (
        <React.Fragment>
          <StorybookHeading>Form with</StorybookHeading>
          <Block>
            <Stack
              flow="horizontal-center"
              stackDistribution="space-between"
              spaceInline="space070"
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
        </React.Fragment>
      ),
    },
    {
      storyName: 'form-with-phone-input',
      parameters: {eyes: {include: false}},
      storyFn: () => {
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
                          message:
                            'Usernames must be at least 5 characters long',
                        },
                        validate: validateUserName,
                      }}
                    />
                  </Block>
                  <Block>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */}
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
          <React.Fragment>
            <StorybookHeading>Form with Telephone number</StorybookHeading>
            <FormWithPhoneInput />
          </React.Fragment>
        );
      },
    },
  ],
};
