import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {TextField, Button} from 'newskit';
import {fromBlob} from '../../unpack';

import {useAppState} from '../../app-state-context';
import {HiddenInput} from '../styled';

export default function FileUploadSelector() {
  const {dispatch, state} = useAppState();
  const [filename, setFileName] = useState('');
  const [message, setMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (state.selectedFont.source !== 'FILE_UPLOAD') {
      setMessage('');
      setFileName('');
    }
  }, [state.selectedFont.source]);

  return (
    <div>
      <div>
        <TextField
          aria-hidden="true"
          tabIndex={-1}
          placeholder="Upload a file"
          value={filename}
          onChange={() => {}}
          onClick={() => {
            if (message) {
              setMessage('');
            }
            if (fileInputRef.current) {
              fileInputRef.current.click();
            }
          }}
          endEnhancer={
            <Button
              size="small"
              aria-label="Upload a file"
              onClick={() => {
                if (message) {
                  setMessage('');
                }
                if (fileInputRef.current) {
                  fileInputRef.current.click();
                }
              }}
            >
              Browse
            </Button>
          }
        />
      </div>
      <HiddenInput
        id="fileUpload"
        type="file"
        ref={fileInputRef}
        tabIndex={-1}
        aria-describedby={message ? 'fileUploadErrorMessage' : undefined}
        onChange={async (ev: ChangeEvent<HTMLInputElement>) => {
          if (ev.currentTarget.files && ev.currentTarget.files[0]) {
            const file = ev.currentTarget.files[0];
            setFileName(file.name);

            try {
              const metrics = await fromBlob(file);

              const reader = new FileReader();

              const fileNameParts = file.name.split('.') || [];
              const extension = fileNameParts[fileNameParts.length - 1];

              reader.addEventListener(
                'load',
                () => {
                  dispatch({
                    type: 'UPDATE_FONT',
                    value: {
                      metrics,
                      font: {
                        source: 'FILE_UPLOAD',
                        url: reader.result as string,
                        originalFileName: file.name,
                        fileName: fileNameParts
                          .slice(0, fileNameParts.length - 1)
                          .join('-'),
                        extension,
                      },
                    },
                  });
                },
                false,
              );

              reader.readAsDataURL(file);
            } catch (e) {
              setMessage('Something went wrong. Please try again.');
            }
          } else {
            setMessage('No files to upload. Please try again.');

            // eslint-disable-next-line no-console
            console.error('No files on target', ev.currentTarget);
          }
        }}
        accept=".ttf, .otf, .woff, .woff2"
      />
    </div>
  );
}
