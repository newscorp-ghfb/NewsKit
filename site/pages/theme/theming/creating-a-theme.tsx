import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {AppStateProvider} from '../../../components/text-crop-calculator/app-state-context';
import TextCropCalculator from '../../../components/text-crop-calculator/text-crop-calculator';

const CreatingATheme = () => (
  <AppStateProvider>
    <ChakraProvider>
      <TextCropCalculator />
    </ChakraProvider>
  </AppStateProvider>
);

export default CreatingATheme;
