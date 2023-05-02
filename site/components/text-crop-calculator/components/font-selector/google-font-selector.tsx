import React, {useEffect, useState} from 'react';
import {Select, SelectOption} from 'newskit';
import {useAppState} from '../../app-state-context';
import googleFonts from '../../json/googleFontsApi.json';
import {fromUrl} from '../../unpack';

const {items: fontData} = googleFonts;

export default function GoogleFontSelector() {
  const {dispatch, state} = useAppState();

  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (state.selectedFont.source !== 'GOOGLE_FONT') {
      setMessage('');
      setValue('');
    }
  }, [state.selectedFont.source]);

  return (
    <div>
      <Select
        id="select-google-font"
        value={value}
        onChange={async ev => {
          const newValue = ev.target.value;

          setValue(newValue);

          if (newValue) {
            const {variants, files} = fontData.find(
              font => font.family === newValue,
            )!;
            type FontVariant = keyof typeof files;
            const fontUrl =
              'regular' in files
                ? files.regular
                : files[variants[0] as FontVariant];

            if (!fontUrl) {
              setMessage('Error no `variants` available');
              return;
            }

            const metrics = await fromUrl(fontUrl);
            const fontUrlParts = fontUrl.split('.') || [];
            const extension = fontUrlParts[fontUrlParts.length - 1];

            dispatch({
              type: 'UPDATE_FONT',
              value: {
                metrics,
                font: {
                  source: 'GOOGLE_FONT',
                  url: fontUrl,
                  extension,
                },
              },
            });
          }
        }}
        aria-describedby={message ? 'googleFontErrorMessage' : undefined}
        placeholder="Choose a Google font"
      >
        {fontData.map(({family: familyName}) => (
          <SelectOption key={familyName} value={familyName}>
            {familyName}
          </SelectOption>
        ))}
      </Select>
    </div>
  );
}
