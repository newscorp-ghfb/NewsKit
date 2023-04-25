import React from 'react';
import {Box} from '@chakra-ui/react';

import {useAppState} from '../app-state-context';
import {Code} from '../../code';

const OutputCSS = () => {
  const {state} = useAppState();

  const {
    metrics: {capHeight, ascent, descent, lineGap, unitsPerEm},
    selectedFont: {name: fontFamily},
  } = state;

  return (
    <Box paddingY={4} paddingX={2} paddingTop={8} overflow="auto">
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
    </Box>
  );
};

export default OutputCSS;
