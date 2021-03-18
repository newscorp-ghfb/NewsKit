import React from 'react';
import {fireEvent, act} from '@testing-library/react';
import {useForm} from 'react-hook-form/dist/index.ie11';
import {Form} from '..';
import {
  renderToFragmentWithTheme,
  renderWithImplementation,
} from '../../test/test-utils';
import {TextInput} from '../../text-input';
import {Block} from '../../block';
import {Button} from '../../button';

let actualRHF: any;
jest.mock('react-hook-form/dist/index.ie11', () => {
  actualRHF = jest.requireActual('react-hook-form/dist/index.ie11');
  return {
    ...actualRHF,
    useForm: jest.fn().mockImplementation(actualRHF.useForm),
  };
});

describe('Form', () => {
  afterEach(() => {
    (useForm as jest.Mock).mockClear();
    (useForm as jest.Mock).mockImplementation(actualRHF.useForm);
  });

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
      <Block spaceStack="space050">
        <TextInput
          label="Email"
          name="email"
          assistiveText="Your email"
          defaultValue="test"
          data-testid="text-input-email"
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
      <Block spaceStack="space050">
        <TextInput
          label="Username"
          name="username"
          data-testid="text-input-username"
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

    fireEvent.blur(getByTestId('text-input-email'));

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

    fireEvent.blur(getByTestId('text-input-email'));
    // if input is invalid, error text will remain even after multiple onBlur.
    fireEvent.blur(getByTestId('text-input-email'));

    expect(await findByText('Please provide a valid email')).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with valid state', async () => {
    const {getByTestId, findByTestId} = renderWithImplementation(Form, {
      ...props,
      validationMode: 'onBlur',
    });

    fireEvent.blur(getByTestId('text-input-email'), {
      target: {value: 'test@news.co.uk'},
    });

    expect(await findByTestId('tick-icon')).not.toBeNull();
  });

  test('clearValidation() remove valid state', async () => {
    const ref = React.createRef<HTMLFormElement>();
    const {getByTestId, findByTestId, queryByTestId} = renderWithImplementation(
      Form,
      {
        ...props,
        ref,
        validationMode: 'onBlur',
      },
    );

    fireEvent.blur(getByTestId('text-input-email'), {
      target: {value: 'test@news.co.uk'},
    });

    expect(await findByTestId('tick-icon')).not.toBeNull();
    act(() => {
      ref.current!.clearValidation();
    });

    expect(queryByTestId('tick-icon')).toBeNull();
    expect(queryByTestId('error-icon')).toBeNull();
  });

  test('clearValidation() removes valid tick properly even if the field had an error', async () => {
    const ref = React.createRef<HTMLFormElement>();
    const {getByTestId, findByTestId, queryByTestId} = renderWithImplementation(
      Form,
      {
        ...props,
        ref,
        validationMode: 'onBlur',
      },
    );

    fireEvent.blur(getByTestId('text-input-email'), {
      target: {value: ''},
    });

    expect(await findByTestId('error-icon')).not.toBeNull();

    fireEvent.blur(getByTestId('text-input-email'), {
      target: {value: 'test@news.co.uk'},
    });

    act(() => {
      ref.current!.clearValidation();
    });

    expect(queryByTestId('error-icon')).toBeNull();
    expect(queryByTestId('tick-icon')).toBeNull();
  });

  test('clearValidation() removes error state properly even if field was valid', async () => {
    const ref = React.createRef<HTMLFormElement>();
    const {
      getByTestId,
      findAllByTestId,
      getByRole,
      queryByTestId,
      findByTestId,
    } = renderWithImplementation(Form, {
      ...props,
      ref,
      validationMode: 'onSubmit',
    });

    const inputEmail = getByTestId('text-input-email') as HTMLInputElement;
    const inputUsername = getByTestId(
      'text-input-username',
    ) as HTMLInputElement;

    fireEvent.change(inputEmail, {
      target: {value: 'test@news.co.uk'},
    });

    fireEvent.change(inputUsername, {
      target: {value: 'test'},
    });

    expect(inputEmail.value).toBe('test@news.co.uk');
    expect(inputUsername.value).toBe('test');

    fireEvent.submit(getByRole('button'));

    expect(await findAllByTestId('tick-icon')).not.toBeNull();

    fireEvent.blur(inputEmail, {
      target: {value: 'newste'},
    });

    expect(await findByTestId('error-icon')).not.toBeNull();

    act(() => {
      ref.current!.clearValidation();
    });

    expect(queryByTestId('error-icon')).toBeNull();
    expect(queryByTestId('tick-icon')).toBeNull();
  });

  test('clearValidation()', async () => {
    const ref = React.createRef<HTMLFormElement>();
    const {getByTestId, findByTestId, queryByTestId} = renderWithImplementation(
      Form,
      {
        ...props,
        ref,
        validationMode: 'onBlur',
      },
    );

    fireEvent.blur(getByTestId('text-input-email'), {
      target: {value: ''},
    });

    expect(await findByTestId('error-icon')).not.toBeNull();
    act(() => {
      ref.current!.clearValidation();
    });

    expect(queryByTestId('error-icon')).toBeNull();
    expect(queryByTestId('tick-icon')).toBeNull();
  });

  test('exposes the expected functions from useForm hook', async () => {
    const useFormMockMethods = {
      watch: 'watch-function',
      setError: 'setError-function',
      setValue: 'setValue-function',
      getValues: 'getValues-function',
      trigger: 'trigger-function',
      handleSubmit: () => {},
      register: () => {},
    };

    (useForm as jest.Mock).mockReturnValue(useFormMockMethods);
    const ref = React.createRef<HTMLFormElement>();
    const defaultValues = {
      myValue: 'this is default',
    };
    renderWithImplementation(Form, {
      ...props,
      ref,
      validationMode: 'onSubmit',
      defaultValues,
    });

    expect(useForm).toHaveBeenCalledWith({
      mode: 'onSubmit',
      reValidateMode: 'onBlur',
      defaultValues,
    });

    expect(ref.current).toBeDefined();
    expect(ref.current!.watch).toBe(useFormMockMethods.watch);
    expect(ref.current!.setError).toBe(useFormMockMethods.setError);
    expect(ref.current!.setValue).toBe(useFormMockMethods.setValue);
    expect(ref.current!.getValues).toBe(useFormMockMethods.getValues);
    expect(ref.current!.trigger).toBe(useFormMockMethods.trigger);
    expect(ref.current!.element).toMatchSnapshot();
  });
});
