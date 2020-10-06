import React from 'react';
import {fireEvent} from '@testing-library/react';
import {Form} from '..';
import {
  renderToFragmentWithTheme,
  renderWithImplementation,
} from '../../test/test-utils';
import {TextInput} from '../../text-input';
import {Block} from '../../block';
import {Button} from '../../button';

describe('Form', () => {
  const formBody = (
    <React.Fragment>
      <TextInput
        label="Email"
        name="email"
        assistiveText="Your email"
        rules={{
          required: 'Required field',
          minLength: {value: 3, message: 'min length is 3'},
          pattern: {
            // eslint-disable-next-line no-useless-escape
            value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            message: 'Please provide a valid email',
          },
        }}
      />
      <TextInput
        label="Username"
        name="username"
        assistiveText="Your username"
        rules={{
          required: 'Required field',
          minLength: {value: 3, message: 'min length is 3'},
        }}
      />
    </React.Fragment>
  );

  const nestedFormBody = (
    <React.Fragment>
      <Block overrides={{spaceStack: 'space050'}}>
        <TextInput
          label="Email"
          name="email"
          assistiveText="Your email"
          defaultValue="testi"
          data-testid="text-input"
          rules={{
            required: 'Required field',
            minLength: {value: 3, message: 'min length is 3'},
            pattern: {
              // eslint-disable-next-line no-useless-escape
              value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: 'Please provide a valid email',
            },
          }}
        />
      </Block>
      <Block overrides={{spaceStack: 'space050'}}>
        <TextInput
          label="Username"
          name="username"
          assistiveText="Your username"
          rules={{
            required: 'Required field',
            minLength: {value: 3, message: 'min length is 3'},
          }}
        />
      </Block>
      <Button data-testid="submit-button" type="submit">
        Submit
      </Button>
    </React.Fragment>
  );

  let props: any;
  beforeEach(() => {
    props = {
      onSubmit: () => {},
      children: (nestedFormBody as unknown) as Array<React.ReactElement>,
    };
  });

  test('renders with inputs', () => {
    const fragment = renderToFragmentWithTheme(Form, {
      ...props,
      children: (formBody as unknown) as Array<React.ReactElement>,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with nested inputs', () => {
    const fragment = renderToFragmentWithTheme(Form, {...props});
    expect(fragment).toMatchSnapshot();
  });

  test('renders with onBlur validation', () => {
    const fragment = renderToFragmentWithTheme(Form, {
      validationMode: 'onBlur',
      ...props,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with error on submit', async () => {
    const {getByRole, findByText, asFragment} = renderWithImplementation(Form, {
      ...props,
    });

    fireEvent.submit(getByRole('button'));

    expect(await findByText('Please provide a valid email')).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with error and with submit validation and revalidation mode ', async () => {
    const {getByRole, findByText, asFragment} = renderWithImplementation(Form, {
      ...props,
      reValidationMode: 'onSubmit',
    });

    fireEvent.submit(getByRole('button'));

    expect(await findByText('Please provide a valid email')).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with error on blur', async () => {
    const {getByTestId, findByText, asFragment} = renderWithImplementation(
      Form,
      {
        ...props,
        validationMode: 'onBlur',
      },
    );

    fireEvent.blur(getByTestId('text-input'));

    expect(await findByText('Please provide a valid email')).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with error with 2 onBlur', async () => {
    const {getByTestId, findByText, asFragment} = renderWithImplementation(
      Form,
      {
        ...props,
        validationMode: 'onBlur',
      },
    );

    fireEvent.blur(getByTestId('text-input'));
    // if input is invalid, error text will remain even after multiple onBlur.
    fireEvent.blur(getByTestId('text-input'));

    expect(await findByText('Please provide a valid email')).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with valid state', async () => {
    const {getByTestId, findByTestId, asFragment} = renderWithImplementation(
      Form,
      {
        ...props,
        validationMode: 'onBlur',
      },
    );

    fireEvent.blur(getByTestId('text-input'), {
      target: {value: 'test@news.co.uk'},
    });

    expect(await findByTestId('tick-icon')).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });
});
