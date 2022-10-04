import React, {ReactElement, RefObject} from 'react';
import {act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {CharacterCount} from '..';
import {renderWithImplementation} from '../../test/test-utils';
import {useRefWithReRender} from '../../utils/use-ref-with-rerender';
import {TextArea} from '../../text-area';

const InputWithCharacterCount = ({
  children,
}: {
  children: (ref: RefObject<any>) => ReactElement;
}) => {
  const ref = useRefWithReRender<HTMLTextAreaElement>(null);
  return children(ref);
};

const generateString = (length: number): string =>
  Array.from(Array(length).keys())
    .map(() => '*')
    .join('');

describe('CharacterCount', () => {
  const MAX_LENGTH = 100;
  const MIN_LENGTH = 20;
  const MSG = 'some text';

  test('displays no message if no max or min specified', () => {
    const {getByTestId} = renderWithImplementation(InputWithCharacterCount, {
      children: ref => (
        <>
          <TextArea ref={ref} data-testid="text-area" />
          <CharacterCount inputRef={ref} data-testid="character-count" />
        </>
      ),
    });
    const characterCount = getByTestId('character-count');
    expect(characterCount.textContent).toEqual(``);
  });

  test('message updates if both min and max specified', async () => {
    const {getByTestId} = renderWithImplementation(InputWithCharacterCount, {
      children: ref => (
        <>
          <TextArea
            minLength={MIN_LENGTH}
            maxLength={MAX_LENGTH}
            ref={ref}
            data-testid="text-area"
          />
          <CharacterCount inputRef={ref} data-testid="character-count" />
        </>
      ),
    });
    const characterCount = getByTestId('character-count');
    expect(characterCount.textContent).toEqual(
      `Please enter a minimum of ${MIN_LENGTH} characters.`,
    );
    const textArea = getByTestId('text-area');
    await act(async () => {
      await userEvent.type(textArea, generateString(MIN_LENGTH));
    });
    expect(characterCount.textContent).toEqual(
      `You have ${MAX_LENGTH - MIN_LENGTH} characters remaining.`,
    );
  });

  describe('with maxLength', () => {
    test('displays starting number of characters remaining', async () => {
      const {getByTestId} = renderWithImplementation(InputWithCharacterCount, {
        children: ref => (
          <>
            <TextArea
              ref={ref}
              data-testid="text-area"
              maxLength={MAX_LENGTH}
            />
            <CharacterCount inputRef={ref} data-testid="character-count" />
          </>
        ),
      });
      const characterCount = getByTestId('character-count');
      expect(characterCount.textContent).toEqual(
        `You have ${MAX_LENGTH} characters remaining.`,
      );
    });

    test('displays starting number of characters remaining with default value', async () => {
      const {getByTestId} = renderWithImplementation(InputWithCharacterCount, {
        children: ref => (
          <>
            <TextArea
              ref={ref}
              defaultValue={MSG}
              data-testid="text-area"
              maxLength={MAX_LENGTH}
            />
            <CharacterCount inputRef={ref} data-testid="character-count" />
          </>
        ),
      });
      const characterCount = getByTestId('character-count');
      expect(characterCount.textContent).toEqual(
        `You have ${MAX_LENGTH - MSG.length} characters remaining.`,
      );
    });

    test('updates number of characters remaining', async () => {
      const {getByTestId} = renderWithImplementation(InputWithCharacterCount, {
        children: ref => (
          <>
            <TextArea
              ref={ref}
              data-testid="text-area"
              maxLength={MAX_LENGTH}
            />
            <CharacterCount inputRef={ref} data-testid="character-count" />
          </>
        ),
      });
      const characterCount = getByTestId('character-count');
      const textArea = getByTestId('text-area');
      await act(async () => {
        await userEvent.type(textArea, MSG);
      });
      expect(characterCount.textContent).toEqual(
        `You have ${MAX_LENGTH - MSG.length} characters remaining.`,
      );
    });

    test('uses singular when only one character remains', async () => {
      const {getByTestId} = renderWithImplementation(InputWithCharacterCount, {
        children: ref => (
          <>
            <TextArea
              ref={ref}
              data-testid="text-area"
              maxLength={MAX_LENGTH}
            />
            <CharacterCount inputRef={ref} data-testid="character-count" />
          </>
        ),
      });
      const characterCount = getByTestId('character-count');
      const textArea = getByTestId('text-area');
      await act(async () => {
        await userEvent.type(textArea, generateString(MAX_LENGTH - 1));
      });
      expect(characterCount.textContent).toEqual(
        `You have 1 character remaining.`,
      );
    });
  });

  describe('with minLength', () => {
    test('displays starting number of characters required', async () => {
      const {getByTestId} = renderWithImplementation(InputWithCharacterCount, {
        children: ref => (
          <>
            <TextArea
              ref={ref}
              data-testid="text-area"
              minLength={MIN_LENGTH}
            />
            <CharacterCount inputRef={ref} data-testid="character-count" />
          </>
        ),
      });
      const characterCount = getByTestId('character-count');
      expect(characterCount.textContent).toEqual(
        `Please enter a minimum of ${MIN_LENGTH} characters.`,
      );
    });
    test('displays singular when only one character required', async () => {
      const {getByTestId} = renderWithImplementation(InputWithCharacterCount, {
        children: ref => (
          <>
            <TextArea ref={ref} data-testid="text-area" minLength={1} />
            <CharacterCount inputRef={ref} data-testid="character-count" />
          </>
        ),
      });
      const characterCount = getByTestId('character-count');
      expect(characterCount.textContent).toEqual(
        `Please enter a minimum of 1 character.`,
      );
    });

    test('displays starting number of characters required with default value', async () => {
      const {getByTestId} = renderWithImplementation(InputWithCharacterCount, {
        children: ref => (
          <>
            <TextArea
              ref={ref}
              defaultValue={MSG}
              data-testid="text-area"
              minLength={MIN_LENGTH}
            />
            <CharacterCount inputRef={ref} data-testid="character-count" />
          </>
        ),
      });
      const characterCount = getByTestId('character-count');
      expect(characterCount.textContent).toEqual(
        `Please enter ${MIN_LENGTH - MSG.length} characters.`,
      );
    });

    test('updates number of characters remaining', async () => {
      const {getByTestId} = renderWithImplementation(InputWithCharacterCount, {
        children: ref => (
          <>
            <TextArea
              ref={ref}
              data-testid="text-area"
              minLength={MIN_LENGTH}
            />
            <CharacterCount inputRef={ref} data-testid="character-count" />
          </>
        ),
      });
      const characterCount = getByTestId('character-count');
      const textArea = getByTestId('text-area');
      await act(async () => {
        await userEvent.type(textArea, MSG);
      });
      expect(characterCount.textContent).toEqual(
        `Please enter ${MIN_LENGTH - MSG.length} characters.`,
      );
    });

    test('does not show when minimum is met', async () => {
      const {getByTestId} = renderWithImplementation(InputWithCharacterCount, {
        children: ref => (
          <>
            <TextArea
              ref={ref}
              data-testid="text-area"
              minLength={MIN_LENGTH}
            />
            <CharacterCount inputRef={ref} data-testid="character-count" />
          </>
        ),
      });
      const characterCount = getByTestId('character-count');
      const textArea = getByTestId('text-area');
      await act(async () => {
        await userEvent.type(textArea, generateString(MIN_LENGTH));
      });
      expect(characterCount.textContent).toEqual('');
    });

    test('uses singular when only one more character is required', async () => {
      const {getByTestId} = renderWithImplementation(InputWithCharacterCount, {
        children: ref => (
          <>
            <TextArea
              ref={ref}
              data-testid="text-area"
              minLength={MIN_LENGTH}
            />
            <CharacterCount inputRef={ref} data-testid="character-count" />
          </>
        ),
      });
      const characterCount = getByTestId('character-count');
      const textArea = getByTestId('text-area');
      await act(async () => {
        await userEvent.type(textArea, generateString(MIN_LENGTH - 1));
      });
      expect(characterCount.textContent).toEqual(`Please enter 1 character.`);
    });
  });
});
