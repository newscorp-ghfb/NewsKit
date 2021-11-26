import React from 'react';
import {fireEvent, act} from '@testing-library/react';
import {useForm} from 'react-hook-form';
import {Form, FormRef} from '..';
import {
  renderToFragmentWithTheme,
  renderWithImplementation,
  renderWithTheme,
} from '../../test/test-utils';
import {TextInput} from '../../text-input';
import {Block} from '../../block';
import {Button} from '../../button';
import {
  FormInput,
  FormInputAssistiveText,
  FormInputLabel,
  FormInputProps,
  FormInputTextField,
} from '../form-input';
import {composeEventHandlers} from '../utils';
import {TextFieldSize} from '../../text-field';
import {IconFilledAccountBalance} from '../..';

let actualRHF: any;
jest.mock('react-hook-form', () => {
  actualRHF = jest.requireActual('react-hook-form');
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
    <>
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
    </>
  );

  const nestedFormBody = (
    <>
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
    </>
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

  test('renders with native radio input without validation', () => {
    const fragment = renderToFragmentWithTheme(Form, {
      ...props,
      children: <input type="radio" value="A" id="radio" />,
    });
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

  test('reset() should reset fields value and remove validation', async () => {
    const ref = React.createRef<FormRef>();
    const {
      getByTestId,
      findAllByTestId,
      queryByTestId,
      getByRole,
    } = renderWithImplementation(Form, {
      ...props,
      ref,
      validationMode: 'OnSubmit',
    });
    const inputEmail = getByTestId('text-input-email') as HTMLInputElement;
    const inputUsername = getByTestId(
      'text-input-username',
    ) as HTMLInputElement;

    fireEvent.change(inputEmail, {
      target: {value: 'test@news.co.uk'},
    });

    fireEvent.change(inputUsername, {
      target: {value: 'testnews'},
    });

    fireEvent.submit(getByRole('button'));

    expect(await findAllByTestId('tick-icon')).not.toBeNull();

    act(() => {
      ref.current!.reset();
    });

    expect(queryByTestId('error-icon')).toBeNull();
    expect(queryByTestId('tick-icon')).toBeNull();

    expect(inputEmail.value).toBe('test');
    expect(inputUsername.value).toBe('');

    // Assert reset with default values passed
    act(() => {
      ref.current!.reset({
        username: 'the username',
        email: 'the email',
      });
    });

    // No validation should occur on the default values at reset
    expect(queryByTestId('error-icon')).toBeNull();
    expect(queryByTestId('tick-icon')).toBeNull();

    expect(inputEmail.value).toBe('the email');
    expect(inputUsername.value).toBe('the username');
  });

  test('exposes the expected functions from useForm hook', async () => {
    const useFormReturnMock = {
      watch: 'watch-function',
      setError: 'setError-function',
      setValue: 'setValue-function',
      getValues: 'getValues-function',
      trigger: 'trigger-function',
      control: 'control-function',
      handleSubmit: () => {},
      register: (name: string) => ({name}),
    };

    (useForm as jest.Mock).mockReturnValue(useFormReturnMock);
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
    expect(ref.current!.watch).toBe(useFormReturnMock.watch);
    expect(ref.current!.setError).toBe(useFormReturnMock.setError);
    expect(ref.current!.setValue).toBe(useFormReturnMock.setValue);
    expect(ref.current!.getValues).toBe(useFormReturnMock.getValues);
    expect(ref.current!.trigger).toBe(useFormReturnMock.trigger);
    expect(ref.current!.element).toMatchSnapshot();
  });
});

describe('FormInput', () => {
  let props: any;
  const formBodyFormInput = (
    <>
      <FormInput
        id="email"
        name="email"
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
          data-testid="text-field-email"
          endEnhancer={
            <>
              <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
            </>
          }
        />
        <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
      </FormInput>
    </>
  );
  const formBodyFormInputInvalid = (
    <>
      <FormInput
        name="email"
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
          data-testid="text-field-email"
          endEnhancer={
            <>
              <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
            </>
          }
        />
        <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
      </FormInput>

      <FormInput
        name="username"
        data-testid="text-field-username"
        rules={{
          required: 'Required field',
          minLength: {
            value: 5,
            message: 'Usernames must be at least 5 characters long',
          },
        }}
      >
        <FormInputLabel>Username</FormInputLabel>
        <FormInputTextField data-testid="text-field-username" />
        <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
      </FormInput>
      <Button data-testid="submit-button" type="submit">
        Submit
      </Button>
    </>
  );
  const formProps = (prop: FormInputProps) => (
    <FormInput {...prop}>
      <FormInputLabel>E-mail</FormInputLabel>
      <FormInputTextField data-testid="text-field-email" />
      <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
    </FormInput>
  );
  test('renders FormInput Correctly', () => {
    const prop: FormInputProps = {
      name: 'TextField',
      size: TextFieldSize.Medium,
      id: 'nk',

      children: (formBodyFormInput as unknown) as Array<React.ReactElement>,
    };
    const fragment = renderToFragmentWithTheme(FormInput, prop);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with nested inputs', () => {
    const fragment = renderToFragmentWithTheme(FormInput, {...props});
    expect(fragment).toMatchSnapshot();
  });
  test('fireEvent with onBlur valid state', () => {
    const {getByTestId, asFragment} = renderWithImplementation(Form, {
      ...props,
      children: (formBodyFormInput as unknown) as Array<React.ReactElement>,
    });
    fireEvent.blur(getByTestId('text-field-email'), {
      target: {value: 'test@news.co.uk'},
    });
    expect(asFragment()).toMatchSnapshot();
  });
  test('does not call onBlur ', () => {
    const onBlur = jest.fn();
    const prop: FormInputProps = {};

    const {getByTestId} = renderWithTheme(formProps, prop);
    fireEvent.blur(getByTestId('text-field-email'));

    expect(onBlur).toHaveBeenCalledTimes(0);
  });
  test('fireEvent with onChange when value is invalid', () => {
    const {getByTestId, asFragment} = renderWithImplementation(Form, {
      ...props,

      children: (formBodyFormInput as unknown) as Array<React.ReactElement>,
    });
    fireEvent.change(getByTestId('text-field-email'), {
      target: {value: 'test@news.co.uk'},
    });
    expect(asFragment()).toMatchSnapshot();
  });
  test('does not call onChange ', () => {
    const onChange = jest.fn();
    const prop: FormInputProps = {};

    const {getByTestId} = renderWithTheme(formProps, prop);
    fireEvent.change(getByTestId('text-field-email'), {
      target: {value: 'teews.co.uk'},
    });

    expect(onChange).toHaveBeenCalledTimes(0);
  });
  beforeAll(() => {
    props = {
      onSubmit: () => {},
      children: (formBodyFormInputInvalid as unknown) as Array<React.ReactElement>,
    };
  });
  test('renders with valid icon', async () => {
    const {getByTestId, findByTestId} = renderWithImplementation(Form, {
      ...props,
      validationMode: 'onBlur',
    });

    fireEvent.blur(getByTestId('text-field-email'), {
      target: {value: 'test@news.co.uk'},
    });

    expect(await findByTestId('tick-icon')).not.toBeNull();
  });
  test('renders with invalid icon', async () => {
    const {getByTestId, findByTestId} = renderWithImplementation(Form, {
      ...props,
      validationMode: 'onBlur',
    });

    fireEvent.blur(getByTestId('text-field-email'), {
      target: {value: 'testsßco.uk'},
    });
    expect(await findByTestId('error-icon')).not.toBeNull();
  });
  test('test function', () => {
    const theResult = composeEventHandlers();
    expect(typeof theResult).toBe('function');
  });
  test('renders with error and with submit validation and revalidation mode ', async () => {
    const {getByRole, asFragment} = renderWithImplementation(Form, {
      ...props,
      reValidationMode: 'onSubmit',
    });

    fireEvent.submit(getByRole('button'));
    expect(asFragment()).toMatchSnapshot();
  });
  test('renders with invalid icon and trailng icon', async () => {
    const {getByTestId, findByTestId} = renderWithImplementation(Form, {
      ...props,
      validationMode: 'onBlur',
    });

    fireEvent.blur(getByTestId('text-field-email'), {
      target: {value: 'testsßco.uk'},
    });
    expect(await findByTestId('error-icon')).not.toBeNull();
  });
});
