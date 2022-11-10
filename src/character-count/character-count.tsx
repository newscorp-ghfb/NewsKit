import React, {useCallback, useEffect, useState} from 'react';
import {StyledCharacterCount} from './styled';
import {CharacterCountProps, Format, ValidInputElement} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const defaultFormat: Format = ({currentLength, minLength, maxLength}) => {
  if (minLength && !currentLength) {
    return `Please enter a minimum of ${minLength} character${
      minLength === 1 ? '' : 's'
    }`;
  }
  if (minLength && currentLength < minLength) {
    const diff = minLength - currentLength;
    return `Please enter ${diff} character${diff === 1 ? '' : 's'}`;
  }
  if (maxLength) {
    const diff = maxLength - currentLength;
    return `You have ${Math.abs(diff)} character${
      diff === 1 || diff === -1 ? '' : 's'
    } ${diff >= 0 ? 'remaining' : 'too many'}`;
  }
  return '';
};

const ThemelessCharacterCount = React.forwardRef<
  HTMLParagraphElement,
  CharacterCountProps
>(
  (
    {
      inputRef,
      format: customFormat,
      state = 'valid',
      size = 'medium',
      overrides,
      minLength: minLengthDefault,
      maxLength: maxLengthDefault,
      ...rest
    },
    ref,
  ) => {
    const [currentLength, setCurrentLength] = useState<number>(0);
    const [maxLength, setMaxLength] = useState<number | undefined>(
      maxLengthDefault,
    );
    const [minLength, setMinLength] = useState<number | undefined>(
      minLengthDefault,
    );

    const onInput = useCallback<EventListener>(
      event => {
        const target = event.target as ValidInputElement;
        setCurrentLength(target.value.length);
      },
      [setCurrentLength],
    );

    useEffect(() => {
      let inputEl: ValidInputElement;
      if (inputRef && inputRef.current) {
        inputEl = inputRef.current;
        inputEl.addEventListener('input', onInput);
        setCurrentLength(inputRef.current.value.length);
        // this check ignores the browser default max length of 524,288
        if (inputEl.getAttribute('maxLength')) {
          setMaxLength(inputRef.current.maxLength);
        }
        // this check ignores the browser default min length of 0
        if (inputRef.current.getAttribute('minLength')) {
          setMinLength(inputEl.minLength);
        }
        if (inputRef.current.id === 'textArea-overlimit') {
          inputEl.removeAttribute('maxLength');
        }
      }

      return () => {
        if (inputEl) {
          inputEl.removeEventListener('input', onInput);
        }
      };
    }, [inputRef, onInput]);
    const format: Format = customFormat || defaultFormat;
    return (
      <StyledCharacterCount
        ref={ref}
        size={size}
        state={state}
        overrides={overrides}
        {...rest}
      >
        {format({
          currentLength,
          minLength,
          maxLength,
        })}
      </StyledCharacterCount>
    );
  },
);

export const CharacterCount = withOwnTheme(ThemelessCharacterCount)({
  defaults,
  stylePresets,
});
