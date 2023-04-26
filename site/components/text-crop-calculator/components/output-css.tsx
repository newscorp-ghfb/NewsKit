import React from 'react';
import {Block} from 'newskit';

import {useAppState} from '../app-state-context';
import {Code} from '../../code';

const OutputCSS = () => {
  const {state} = useAppState();

  const {
    metrics: {capHeight, ascent, descent, lineGap, unitsPerEm},
    selectedFont: {name: fontFamily},
  } = state;

  return (
    <Block>
      <Code>
        {JSON.stringify(
          {
            fontWeight010: 400,
            fontFamily010: {
              fontFamily,
              fontWeight010: {
                capHeight,
                ascent,
                descent,
                lineGap,
                unitsPerEm,
              },
            },
          },
          null,
          2,
        )}
      </Code>
    </Block>
  );
};

export default OutputCSS;
