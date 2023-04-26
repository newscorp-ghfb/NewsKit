import React, {ChangeEvent, useEffect, useState} from 'react';
import {TextField} from 'newskit';
import {fromUrl} from '../../unpack';
import {useAppState} from '../../app-state-context';

export default function UrlFontSelector() {
  const {dispatch, state} = useAppState();

  const [fontUrl, setFontUrl] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (state.selectedFont.source !== 'URL') {
      setMessage('');
      setFontUrl('');
    }
  }, [state.selectedFont.source]);

  return (
    <form
      onSubmit={async ev => {
        ev.preventDefault();

        if (!fontUrl) {
          setMessage('Please provide a url');
          return;
        }

        try {
          const metrics = await fromUrl(fontUrl);

          const fontUrlParts = fontUrl.split('.') || [];
          const extension = fontUrlParts[fontUrlParts.length - 1];

          dispatch({
            type: 'UPDATE_FONT',
            value: {
              metrics,
              font: {
                source: 'URL',
                url: fontUrl,
                extension,
              },
            },
          });
        } catch (e) {
          setMessage('Something went wrong. Please try again.');
        }
      }}
    >
      <TextField
        value={fontUrl}
        id="url"
        name="url"
        type="url"
        aria-describedby={message ? 'urlErrorMessage' : undefined}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => {
          setFontUrl(ev.currentTarget.value);
          if (message) {
            setMessage('');
          }
        }}
        placeholder="Enter a url"
      />
    </form>
  );
}
