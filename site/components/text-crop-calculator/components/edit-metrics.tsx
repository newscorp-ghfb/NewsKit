import React, {ChangeEvent, useEffect, useState} from 'react';
import {Box, FormLabel, Input} from '@chakra-ui/react';
import {GridLayout} from 'newskit*';
import {useAppState} from '../app-state-context';

const EditMetrics = () => {
  const {dispatch, state} = useAppState();

  const {metrics} = state;
  const [customMetrics, setCustomMetrics] = useState(metrics);

  useEffect(() => {
    dispatch({type: 'UPDATE_METRICS', metrics: customMetrics});
  }, [customMetrics, dispatch]);

  return (
    <GridLayout
      columns={{sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}}
      rowGap="space020"
    >
      <Box
        display="flex"
        alignItems="center"
        paddingBottom={[2, 2, 0]}
        paddingX={[0, 6]}
      >
        <FormLabel
          htmlFor="customAscent"
          whiteSpace="nowrap"
          fontSize={['md', 'lg']}
          color="gray.500"
          flexGrow={1}
        >
          Ascender
        </FormLabel>
        <Input
          id="customAscent"
          value={customMetrics.ascent}
          autoFocus
          type="number"
          onChange={(ev: ChangeEvent<HTMLInputElement>) => {
            setCustomMetrics({
              ...customMetrics,
              ascent: parseInt(ev.currentTarget.value, 10),
            });
          }}
          borderRadius={12}
          _focus={{boxShadow: 'outline', borderColor: 'transparent'}}
          w={80}
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        paddingBottom={[2, 2, 0]}
        paddingX={[0, 6]}
      >
        <FormLabel
          htmlFor="customCapHeight"
          whiteSpace="nowrap"
          fontSize={['md', 'lg']}
          color="gray.500"
          flexGrow={1}
        >
          Cap Height
        </FormLabel>
        <Input
          id="customCapHeight"
          value={customMetrics.capHeight}
          type="number"
          onChange={(ev: ChangeEvent<HTMLInputElement>) => {
            setCustomMetrics({
              ...customMetrics,
              capHeight: parseInt(ev.currentTarget.value, 10),
            });
          }}
          borderRadius={12}
          _focus={{boxShadow: 'outline', borderColor: 'transparent'}}
          w={80}
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        paddingBottom={[2, 2, 0]}
        paddingX={[0, 6]}
      >
        <FormLabel
          htmlFor="customDescent"
          whiteSpace="nowrap"
          fontSize={['md', 'lg']}
          color="gray.500"
          flexGrow={1}
        >
          Descender
        </FormLabel>
        <Input
          id="customDescent"
          value={customMetrics.descent}
          type="number"
          onChange={(ev: ChangeEvent<HTMLInputElement>) => {
            setCustomMetrics({
              ...customMetrics,
              descent: parseInt(ev.currentTarget.value, 10),
            });
          }}
          borderRadius={12}
          _focus={{boxShadow: 'outline', borderColor: 'transparent'}}
          w={80}
        />
      </Box>
    </GridLayout>
  );
};

export default EditMetrics;
