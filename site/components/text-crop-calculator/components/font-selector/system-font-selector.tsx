import React, {useEffect, useRef, useState} from 'react';
import {detectFont} from 'detect-font';
import {Select, SelectOption} from 'newskit';
import {useAppState} from '../../app-state-context';
import fontData from '../../json/systemFonts.json';

export default function SystemFontSelector() {
  const {dispatch, state} = useAppState();
  const testRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (state.selectedFont.source !== 'SYSTEM_FONT') {
      setMessage('');
      setValue('');
    }
  }, [state.selectedFont.source]);

  useEffect(() => {
    if (state.selectedFont.name && testRef.current) {
      const wrongSystem =
        detectFont(testRef.current, {
          // Switching the base font for comparison to ensure default `monospace` fonts are not compared with themselves.
          baseFont:
            // @ts-ignore
            state.metrics.category === 'monospace' ? 'serif' : 'monospace',
        }) === false;

      setMessage(
        wrongSystem
          ? 'Not available on this operating system/browser, preview likely to be incorrect, but metrics are fine.'
          : '',
      );
    }
  }, [state.selectedFont.name]);

  return (
    <div>
      <Select
        id="select-system-font"
        value={value}
        onChange={ev => {
          const newValue = ev.target.value;

          setValue(newValue);

          if (newValue) {
            dispatch({
              type: 'UPDATE_FONT',
              value: {
                metrics: fontData.filter(
                  font => font.familyName === newValue,
                )[0],
                font: {
                  source: 'SYSTEM_FONT',
                },
              },
            });
          }
        }}
        aria-describedby={message ? 'systemFontErrorMessage' : undefined}
        placeholder="Choose a system font"
      >
        {fontData.map(({familyName}) => (
          <SelectOption key={familyName} value={familyName}>
            {familyName}
          </SelectOption>
        ))}
      </Select>
    </div>
  );
}
