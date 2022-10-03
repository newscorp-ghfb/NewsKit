import React, {useEffect, useState} from 'react';
import {StyledCharacterCount} from './styled';
import {CharacterCountProps, ValidInputElement} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const ThemelessCharacterCount = React.forwardRef<
  HTMLParagraphElement,
  CharacterCountProps
>(({inputRef, ...rest}, ref) => {
  const [currentLength, setCurrentLength] = useState<number>(0);
  const [maxLength, setMaxLength] = useState<number | undefined>(undefined);
  const [minLength, setMinLength] = useState<number | undefined>(undefined);

  const onInput: EventListener = (event: Event) => {
    const target = event.target as ValidInputElement;
    setCurrentLength(target.value.length);
  };

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.addEventListener('input', onInput);
      setCurrentLength(inputRef.current.value.length);
      // this check ignores the browser default max length of 524,288
      if (inputRef.current.getAttribute('maxLength')) {
        setMaxLength(inputRef.current.maxLength);
      }
      // this check ignores the browser default min length of 0
      if (inputRef.current.getAttribute('minLength')) {
        setMinLength(inputRef.current.minLength);
      }
    }
  }, [inputRef]);

  if (!inputRef || !inputRef.current) {
    return null;
  }

  const renderMessage = () => {
    if (minLength && !currentLength) {
      return `Please enter a minimum of ${minLength} character${
        minLength === 1 ? '' : 's'
      }.`;
    }
    if (minLength) {
      const diff = minLength - currentLength;
      return `Please enter ${diff} character${diff === 1 ? '' : 's'}.`;
    }
    if (maxLength) {
      const diff = maxLength - currentLength;
      return `You have ${diff} character${diff === 1 ? '' : 's'} remaining.`;
    }
    return '';
  };

  return (
    <StyledCharacterCount {...rest} ref={ref}>
      {renderMessage()}
    </StyledCharacterCount>
  );
});

export const CharacterCount = withOwnTheme(ThemelessCharacterCount)({
  defaults,
  stylePresets,
});
