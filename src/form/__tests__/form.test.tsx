import React from 'react';
import {act, fireEvent, screen, waitFor, within} from '@testing-library/react';
import {useForm} from 'react-hook-form';
import userEvent from '@testing-library/user-event';
import {Form, FormInputCharacterCount, FormRef} from '..';
import {
  applyAsyncStyling,
  generateString,
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
  FormInputCheckbox,
  FormInputLabel,
  FormInputProps,
  FormInputRadioButton,
  FormInputSelect,
  FormInputTextField,
} from '../form-input';
import {composeEventHandlers} from '../../utils/compose-event-handlers';
import {RadioGroup, TextFieldSize} from '../..';
import {IconFilledAccountBalance} from '../../icons';
import {SelectOption} from '../../select';

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

  test('keeps validation when revalidation mode is onBlur', async () => {
    const {getByTestId, asFragment} = renderWithImplementation(Form, {
      ...props,
      validationMode: 'onBlur',
      reValidationMode: 'onBlur',
    });

    const inputEmail = getByTestId('text-input-email') as HTMLInputElement;
    const inputUsername = getByTestId(
      'text-input-username',
    ) as HTMLInputElement;

    fireEvent.blur(inputEmail, {
      target: {value: 'test@news.co.uk'},
    });
    const a = inputEmail.closest('div') as HTMLElement;
    expect(within(a).getByTestId('tick-icon')).not.toBeNull();

    fireEvent.blur(inputUsername, {
      target: {value: 'test'},
    });
    fireEvent.blur(inputUsername);

    expect(
      within(inputUsername.closest('div') as HTMLElement).getByTestId(
        'tick-icon',
      ),
    ).not.toBeNull();

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
    const {
      getByTestId,
      findByTestId,
      queryByTestId,
      getByText,
      queryByText,
    } = renderWithImplementation(Form, {
      ...props,
      ref,
      validationMode: 'onBlur',
    });

    fireEvent.blur(getByTestId('text-input-email'), {
      target: {value: ''},
    });

    expect(await findByTestId('error-icon')).toBeInTheDocument();
    expect(getByText('Required field')).toBeInTheDocument();

    fireEvent.blur(getByTestId('text-input-email'), {
      target: {value: 'test@news.co.uk'},
    });

    act(() => {
      ref.current!.clearValidation();
    });

    expect(queryByTestId('error-icon')).toBeNull();
    expect(queryByText('Required field')).not.toBeInTheDocument();
    expect(queryByTestId('tick-icon')).toBeNull();
  });

  test('clearValidation() removes error state properly even if field was invalid', async () => {
    const ref = React.createRef<HTMLFormElement>();
    const {
      getByTestId,
      getByRole,
      findByTestId,
      queryByTestId,
      getByText,
      queryByText,
    } = renderWithTheme(Form, {
      ...props,
      ref,
      validationMode: 'onSubmit',
    });

    fireEvent.change(getByTestId('text-input-email'), {
      target: {value: 'newste'},
    });

    fireEvent.change(getByTestId('text-input-username'), {
      target: {value: 'test'},
    });

    fireEvent.submit(getByRole('button'));

    expect(await findByTestId('error-icon')).toBeInTheDocument();
    expect(getByText('Please provide a valid email')).toBeInTheDocument();

    act(() => {
      ref.current!.clearValidation();
    });

    expect(queryByText('Please provide a valid email')).not.toBeInTheDocument();
    expect(queryByTestId('error-icon')).not.toBeInTheDocument();
  });

  test('clearValidation()', async () => {
    const ref = React.createRef<HTMLFormElement>();
    const {
      getByTestId,
      findByTestId,
      queryByTestId,
      getByText,
      queryByText,
    } = renderWithImplementation(Form, {
      ...props,
      ref,
      validationMode: 'onBlur',
    });

    fireEvent.blur(getByTestId('text-input-email'), {
      target: {value: ''},
    });

    expect(await findByTestId('error-icon')).toBeInTheDocument();
    expect(getByText('Required field')).toBeInTheDocument();
    act(() => {
      ref.current!.clearValidation();
    });

    expect(queryByTestId('error-icon')).toBeNull();
    expect(queryByText('Required field')).not.toBeInTheDocument();
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
      ref.current!.reset({
        username: '',
        email: '',
      });
    });

    expect(queryByTestId('error-icon')).toBeNull();
    expect(queryByTestId('tick-icon')).toBeNull();

    expect(inputEmail.value).toBe('');
    expect(inputUsername.value).toBe('');

    act(() => {
      ref.current!.reset();
    });

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

  test('renders with logical props', () => {
    const fragment = renderToFragmentWithTheme(Form, {
      ...props,
      marginInline: '30px',
      paddingInline: '30px',
      children: (formBody as unknown) as Array<React.ReactElement>,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('render optional textfield correctly', async () => {
    const mockOnSubmit = jest.fn();
    const props = {
      onSubmit: mockOnSubmit,
    };
    const body = (
      <>
        <FormInput name="email">
          <FormInputLabel>Email</FormInputLabel>
          <FormInputTextField data-testid="email-input" />
          <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
        </FormInput>
        <Button data-testid="submit" type="submit">
          Submit
        </Button>
      </>
    );
    const {getByTestId, findByTestId, queryByTestId} = renderWithImplementation(
      Form,
      {
        ...props,
        children: (body as unknown) as Array<React.ReactElement>,
      },
    );
    fireEvent.change(getByTestId('email-input'), {
      target: {value: 'some@email.com'},
    });
    fireEvent.click(getByTestId('submit'));
    await waitFor(() => expect(mockOnSubmit).toBeCalledTimes(1));
    expect(await findByTestId('tick-icon')).not.toBeNull();

    fireEvent.change(getByTestId('email-input'), {
      target: {value: ''},
    });
    fireEvent.click(getByTestId('submit'));
    await waitFor(() => expect(mockOnSubmit).toBeCalledTimes(2));
    expect(queryByTestId('tick-icon')).toBe(null);
  });
});

describe('FormInput', () => {
  const formInputBody = (
    <>
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

      <FormInputLabel>Pizza topping</FormInputLabel>
      <FormInputSelect data-testid="select-pizza-topping">
        <SelectOption value="ham">Ham</SelectOption>
        <SelectOption value="pineapple">Pineapple</SelectOption>
      </FormInputSelect>
      <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>

      <FormInputCheckbox label="Checkbox" value="checked" />
      <FormInputAssistiveText validationIcon>
        Checkbox assistive text
      </FormInputAssistiveText>

      <RadioGroup name="radio">
        <FormInputRadioButton label="Option 1" value="1" />
        <FormInputRadioButton label="Option 2" value="2" />
        <FormInputRadioButton label="Option 3" value="2" />
      </RadioGroup>
    </>
  );

  const formBodyFormInput = (
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
      {formInputBody}
    </FormInput>
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

  let props: any;
  beforeAll(() => {
    props = {
      onSubmit: () => {},
      children: (formBodyFormInputInvalid as unknown) as Array<React.ReactElement>,
    };
  });

  afterEach(() => {
    (useForm as jest.Mock).mockClear();
    (useForm as jest.Mock).mockImplementation(actualRHF.useForm);
  });

  test('renders FormInput Correctly', async () => {
    const prop: FormInputProps = {
      id: 'email',
      name: 'email',
      rules: {
        required: 'Required field',
        pattern: {
          // eslint-disable-next-line no-useless-escape
          value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          message: 'Please provide a valid email',
        },
      },
      size: 'medium' as TextFieldSize,

      children: (formInputBody as unknown) as Array<React.ReactElement>,
    };
    const fragment = renderToFragmentWithTheme(FormInput, prop);

    await applyAsyncStyling();
    expect(fragment).toMatchSnapshot();
  });

  test('renders with nested inputs', () => {
    const fragment = renderToFragmentWithTheme(() => formBodyFormInputInvalid);
    expect(fragment).toMatchSnapshot();
  });

  test('fireEvent with onBlur valid state', async () => {
    const {getByTestId, asFragment} = renderWithImplementation(Form, {
      ...props,
      children: (formBodyFormInput as unknown) as Array<React.ReactElement>,
    });
    fireEvent.blur(getByTestId('text-field-email'), {
      target: {value: 'test@news.co.uk'},
    });
    await applyAsyncStyling();
    expect(asFragment()).toMatchSnapshot();
  });

  test('does not call onBlur ', async () => {
    const onBlur = jest.fn();
    const prop: FormInputProps = {
      children: formInputBody,
    };

    const {getByTestId} = renderWithTheme(FormInput, prop);
    fireEvent.blur(getByTestId('text-field-email'));
    await applyAsyncStyling();
    expect(onBlur).toHaveBeenCalledTimes(0);
  });

  test('fireEvent with onChange when value is invalid', async () => {
    const {getByTestId, asFragment} = renderWithImplementation(Form, {
      ...props,

      children: (formBodyFormInput as unknown) as Array<React.ReactElement>,
    });
    fireEvent.change(getByTestId('text-field-email'), {
      target: {value: 'test@news.co.uk'},
    });
    await applyAsyncStyling();
    expect(asFragment()).toMatchSnapshot();
  });

  test('does not call onChange ', async () => {
    const onChange = jest.fn();
    const prop: FormInputProps = {
      children: formInputBody,
    };

    const {getByTestId} = renderWithTheme(FormInput, prop);
    fireEvent.change(getByTestId('text-field-email'), {
      target: {value: 'teews.co.uk'},
    });

    await applyAsyncStyling();
    expect(onChange).toHaveBeenCalledTimes(0);
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
    const {getByRole, asFragment, getByTestId} = renderWithImplementation(
      Form,
      {
        ...props,
        reValidationMode: 'onSubmit',
      },
    );

    await waitFor(() => {
      fireEvent.submit(getByRole('button'));
    });

    await waitFor(() => screen.getAllByText(/required field/i));
    await waitFor(() =>
      expect(getByTestId('text-field-email')).toHaveAttribute(
        'aria-describedby',
        'mock-nk-1-error-text',
      ),
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with invalid icon and trailing icon', async () => {
    const {getByTestId, findByTestId} = renderWithImplementation(Form, {
      ...props,
      validationMode: 'onBlur',
    });

    fireEvent.blur(getByTestId('text-field-email'), {
      target: {value: 'testsßco.uk'},
    });
    expect(await findByTestId('error-icon')).not.toBeNull();
  });

  describe('input.aria-describedby', () => {
    const INPUT_ID = 'test-input-1';
    let assistiveTextId;

    test('is set to assistive text id in default state', () => {
      const {getByText, getByTestId} = renderWithImplementation(Form, {
        onSubmit: () => {},
        children: (
          <FormInput id={INPUT_ID} name="test-input">
            <FormInputLabel>Test input</FormInputLabel>
            <FormInputTextField data-testid="text-field-test-input" />
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </FormInput>
        ),
      });

      assistiveTextId = `${INPUT_ID}-assistive-text`;

      const assistiveText = getByText('Assistive Text');
      expect(assistiveText).toHaveAttribute('id', assistiveTextId);
      const input = getByTestId('text-field-test-input');
      expect(input).toHaveAttribute('aria-describedby', assistiveTextId);
    });

    test('is not set if no assistive text is provided', () => {
      const {getByTestId} = renderWithImplementation(Form, {
        onSubmit: () => {},
        children: (
          <FormInput id={INPUT_ID} name="test-input">
            <FormInputLabel>Test input</FormInputLabel>
            <FormInputTextField data-testid="text-field-test-input" />
          </FormInput>
        ),
      });

      const input = getByTestId('text-field-test-input');
      expect(input).not.toHaveAttribute('aria-describedby');
    });

    test('is set to assistive text id in invalid state', () => {
      const {getByText, getByTestId} = renderWithImplementation(Form, {
        onSubmit: () => {},
        children: (
          <FormInput id={INPUT_ID} state="invalid" name="test-input">
            <FormInputLabel>Test input</FormInputLabel>
            <FormInputTextField data-testid="text-field-test-input" />
            <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
          </FormInput>
        ),
      });

      assistiveTextId = `${INPUT_ID}-error-text`;

      const assistiveText = getByText('Assistive Text');
      expect(assistiveText).toHaveAttribute('id', assistiveTextId);
      const input = getByTestId('text-field-test-input');
      expect(input).toHaveAttribute('aria-describedby', assistiveTextId);
    });
  });

  describe('FormInputCharacterCount', () => {
    const MAX_LENGTH = 100;
    const MIN_LENGTH = 20;
    const MSG = 'some text';

    test('displays no message if no max or min specified', async () => {
      const {getByTestId} = renderWithImplementation(FormInput, {
        children: (
          <>
            <FormInputTextField data-testid="text-area" />
            <FormInputCharacterCount data-testid="character-count" />
          </>
        ),
      });
      const characterCount = getByTestId('character-count');
      expect(characterCount.textContent).toEqual(``);
    });

    test('message updates if both min and max specified', async () => {
      const {getByTestId} = renderWithImplementation(FormInput, {
        rules: {
          minLength: {value: MIN_LENGTH, message: 'MSG'},
          maxLength: {value: MAX_LENGTH, message: 'MSG'},
        },
        children: (
          <>
            <FormInputTextField data-testid="text-area" />
            <FormInputCharacterCount data-testid="character-count" />
          </>
        ),
      });
      const characterCount = getByTestId('character-count');
      expect(characterCount.textContent).toEqual(
        `Please enter a minimum of ${MIN_LENGTH} characters`,
      );
      const textArea = getByTestId('text-area');
      await act(async () => {
        await userEvent.type(textArea, generateString(MIN_LENGTH));
      });
      expect(characterCount.textContent).toEqual(
        `You have ${MAX_LENGTH - MIN_LENGTH} characters remaining`,
      );
    });

    test('handles string length args', async () => {
      const {getByTestId} = renderWithImplementation(FormInput, {
        rules: {
          minLength: {value: `${MIN_LENGTH}`, message: 'MSG'},
          maxLength: {value: `${MAX_LENGTH}`, message: 'MSG'},
        },
        children: (
          <>
            <FormInputTextField data-testid="text-area" />
            <FormInputCharacterCount data-testid="character-count" />
          </>
        ),
      });
      const characterCount = getByTestId('character-count');
      expect(characterCount.textContent).toEqual(
        `Please enter a minimum of ${MIN_LENGTH} characters`,
      );
      const textArea = getByTestId('text-area');
      await act(async () => {
        await userEvent.type(textArea, generateString(MIN_LENGTH));
      });
      expect(characterCount.textContent).toEqual(
        `You have ${MAX_LENGTH - MIN_LENGTH} characters remaining`,
      );
    });

    test('handles no message config', async () => {
      const {getByTestId} = renderWithImplementation(FormInput, {
        rules: {
          minLength: MIN_LENGTH as any,
          maxLength: MAX_LENGTH as any,
        },
        children: (
          <>
            <FormInputTextField data-testid="text-area" />
            <FormInputCharacterCount data-testid="character-count" />
          </>
        ),
      });
      const characterCount = getByTestId('character-count');
      expect(characterCount.textContent).toEqual(
        `Please enter a minimum of ${MIN_LENGTH} characters`,
      );
      const textArea = getByTestId('text-area');
      await act(async () => {
        await userEvent.type(textArea, generateString(MIN_LENGTH));
      });
      expect(characterCount.textContent).toEqual(
        `You have ${MAX_LENGTH - MIN_LENGTH} characters remaining`,
      );
    });

    describe('with maxLength', () => {
      test('displays starting number of characters remaining', async () => {
        const {getByTestId} = renderWithImplementation(FormInput, {
          rules: {
            maxLength: {value: MAX_LENGTH, message: 'MSG'},
          },
          children: (
            <>
              <FormInputTextField data-testid="text-area" />
              <FormInputCharacterCount data-testid="character-count" />
            </>
          ),
        });
        const characterCount = getByTestId('character-count');
        expect(characterCount.textContent).toEqual(
          `You have ${MAX_LENGTH} characters remaining`,
        );
      });

      test('displays starting number of characters remaining with default value', async () => {
        const {getByTestId} = renderWithImplementation(FormInput, {
          rules: {
            maxLength: {value: MAX_LENGTH, message: 'MSG'},
          },
          children: (
            <>
              <FormInputTextField defaultValue={MSG} data-testid="text-area" />
              <FormInputCharacterCount data-testid="character-count" />
            </>
          ),
        });
        const characterCount = getByTestId('character-count');
        expect(characterCount.textContent).toEqual(
          `You have ${MAX_LENGTH - MSG.length} characters remaining`,
        );
      });

      test('updates number of characters remaining', async () => {
        const {getByTestId} = renderWithImplementation(FormInput, {
          rules: {
            maxLength: {value: MAX_LENGTH, message: 'MSG'},
          },
          children: (
            <>
              <FormInputTextField data-testid="text-area" />
              <FormInputCharacterCount data-testid="character-count" />
            </>
          ),
        });
        const characterCount = getByTestId('character-count');
        const textArea = getByTestId('text-area');
        await act(async () => {
          await userEvent.type(textArea, MSG);
        });
        expect(characterCount.textContent).toEqual(
          `You have ${MAX_LENGTH - MSG.length} characters remaining`,
        );
      });

      test('uses singular when only one character remains', async () => {
        const {getByTestId} = renderWithImplementation(FormInput, {
          rules: {
            maxLength: {value: MAX_LENGTH, message: 'MSG'},
          },
          children: (
            <>
              <FormInputTextField data-testid="text-area" />
              <FormInputCharacterCount data-testid="character-count" />
            </>
          ),
        });
        const characterCount = getByTestId('character-count');
        const textArea = getByTestId('text-area');
        await act(async () => {
          await userEvent.type(textArea, generateString(MAX_LENGTH - 1));
        });
        expect(characterCount.textContent).toEqual(
          `You have 1 character remaining`,
        );
      });
    });

    describe('with minLength', () => {
      test('displays starting number of characters required', async () => {
        const {getByTestId} = renderWithImplementation(FormInput, {
          rules: {
            minLength: {value: MIN_LENGTH, message: 'MSG'},
          },
          children: (
            <>
              <FormInputTextField data-testid="text-area" />
              <FormInputCharacterCount data-testid="character-count" />
            </>
          ),
        });
        const characterCount = getByTestId('character-count');
        expect(characterCount.textContent).toEqual(
          `Please enter a minimum of ${MIN_LENGTH} characters`,
        );
      });
      test('displays singular when only one character required', async () => {
        const {getByTestId} = renderWithImplementation(FormInput, {
          rules: {
            minLength: {value: 1, message: 'MSG'},
          },
          children: (
            <>
              <FormInputTextField data-testid="text-area" />
              <FormInputCharacterCount data-testid="character-count" />
            </>
          ),
        });
        const characterCount = getByTestId('character-count');
        expect(characterCount.textContent).toEqual(
          `Please enter a minimum of 1 character`,
        );
      });

      test('displays starting number of characters required with default value', async () => {
        const {getByTestId} = renderWithImplementation(FormInput, {
          rules: {
            minLength: {value: MIN_LENGTH, message: 'MSG'},
          },
          children: (
            <>
              <FormInputTextField defaultValue={MSG} data-testid="text-area" />
              <FormInputCharacterCount data-testid="character-count" />
            </>
          ),
        });
        const characterCount = getByTestId('character-count');
        expect(characterCount.textContent).toEqual(
          `Please enter ${MIN_LENGTH - MSG.length} characters`,
        );
      });

      test('updates number of characters remaining', async () => {
        const {getByTestId} = renderWithImplementation(FormInput, {
          rules: {
            minLength: {value: MIN_LENGTH, message: 'MSG'},
          },
          children: (
            <>
              <FormInputTextField data-testid="text-area" />
              <FormInputCharacterCount data-testid="character-count" />
            </>
          ),
        });
        const characterCount = getByTestId('character-count');
        const textArea = getByTestId('text-area');
        await act(async () => {
          await userEvent.type(textArea, MSG);
        });
        expect(characterCount.textContent).toEqual(
          `Please enter ${MIN_LENGTH - MSG.length} characters`,
        );
      });

      test('uses singular when only one more character is required', async () => {
        const {getByTestId} = renderWithImplementation(FormInput, {
          rules: {
            minLength: {value: MIN_LENGTH, message: 'MSG'},
          },
          children: (
            <>
              <FormInputTextField data-testid="text-area" />
              <FormInputCharacterCount data-testid="character-count" />
            </>
          ),
        });
        const characterCount = getByTestId('character-count');
        const textArea = getByTestId('text-area');
        await act(async () => {
          await userEvent.type(textArea, generateString(MIN_LENGTH - 1));
        });
        expect(characterCount.textContent).toEqual(`Please enter 1 character`);
      });
    });
  });
});
