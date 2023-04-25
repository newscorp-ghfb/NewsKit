import React, {useEffect, useState} from 'react';
import {Box, Text} from '@chakra-ui/react';
import {useAppState} from '../app-state-context';

const Metric = ({
  voffset = 0,
  hoffset = 0,
  position,
  label,
  guides = 'top',
  align = 'left',
}: {
  position: number | string;
  label: string;
  voffset?: number;
  hoffset?: number;
  guides?: 'top' | 'all' | 'none';
  align?: 'left' | 'right';
}) => {
  const labelWidth = 50;
  const arrowSize = 6;

  const Guide = ({location}: {location: 'top' | 'bottom'}) => (
    <Box
      pos="absolute"
      bg="pink.500"
      opacity={0.6}
      left={`${align === 'left' ? 0 : labelWidth - hoffset}px`}
      right={`${align === 'right' ? 0 : labelWidth - hoffset}px`}
      bottom={location === 'top' ? position : 0}
      height="1px"
    />
  );

  const ArrowHead = ({direction}: {direction: 'up' | 'down'}) => (
    <Box
      width="0"
      height="0"
      borderBottom={
        direction === 'up' ? `${arrowSize * 2}px solid currentColor` : undefined
      }
      borderTop={
        direction === 'down'
          ? `${arrowSize * 2}px solid currentColor`
          : undefined
      }
      borderLeft={`${arrowSize}px solid transparent`}
      borderRight={`${arrowSize}px solid transparent`}
    />
  );

  return (
    <Box
      pos="absolute"
      left={`${align === 'left' ? 0 : -labelWidth}px`}
      right={`${align === 'right' ? 0 : -labelWidth}px`}
      height={`${position}px`}
      bottom={`${voffset}px`}
      display="flex"
      alignItems="center"
    >
      {guides !== 'none' && <Guide location="top" />}

      <Box
        pos="absolute"
        top={0}
        left={`${align === 'right' ? -hoffset : undefined}px`}
        right={`${align === 'left' ? -hoffset : undefined}px`}
        h="100%"
        display="flex"
        alignItems="center"
        flexDir={align === 'right' ? 'row-reverse' : undefined}
      >
        <Box
          color="gray.300"
          h="100%"
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <ArrowHead direction="up" />
          <Box h="100%" borderLeft={`${arrowSize / 2}px solid currentColor`} />
          <ArrowHead direction="down" />
        </Box>
        <Text
          w={labelWidth}
          fontWeight="bold"
          paddingX={1}
          fontSize="xs"
          color="gray.500"
          textAlign={align}
        >
          {label}
        </Text>
      </Box>

      {guides === 'all' && <Guide location="bottom" />}
    </Box>
  );
};

const MetricsPreview = () => {
  const {dispatch, state} = useAppState();

  const {metrics, selectedFont} = state;
  const [customMetrics, setCustomMetrics] = useState(metrics);

  useEffect(() => {
    dispatch({type: 'UPDATE_METRICS', metrics: customMetrics});
  }, [customMetrics, dispatch]);

  useEffect(() => {
    setCustomMetrics(metrics);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFont]);

  const previewFontSize = 150;

  const absoluteDescent = Math.abs(metrics.descent);
  const decent = (absoluteDescent / metrics.unitsPerEm) * previewFontSize;
  const lineGap = (metrics.lineGap / metrics.unitsPerEm) * previewFontSize;
  const capHeight = (metrics.capHeight / metrics.unitsPerEm) * previewFontSize;
  const ascent = (metrics.ascent / metrics.unitsPerEm) * previewFontSize;

  const lineHeight = metrics.ascent + absoluteDescent + metrics.lineGap;
  const lineHeightScale = lineHeight / metrics.unitsPerEm;
  const lineHeightNormal = lineHeightScale * previewFontSize;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pos="relative"
      paddingBottom={[16, 16, 0]}
    >
      <Box maxWidth="100%" display="flex" justifyContent="center">
        <Box
          fontSize={previewFontSize}
          fontFamily={
            selectedFont.name.indexOf(' ') > -1
              ? `'${selectedFont.name}'`
              : selectedFont.name
          }
          lineHeight="normal"
          pos="relative"
          overflow="auto"
          paddingLeft="130px" // cater for arrow offsets
          paddingRight="150px" // cater for arrow offsets
          paddingTop="40px" // cater for ascender overflow
          marginTop="-40px" // cater for ascender overflow
          paddingBottom="60px" // cater for descender overflow
          marginBottom="-60px" // cater for descender overflow
        >
          <Box display="inline-flex" justifyContent="center" pos="relative">
            <Box
              pos="absolute"
              top={0}
              bottom={0}
              right={0}
              left={0}
              bg="pink.200"
              opacity={0.3}
            />
            <Metric
              position={previewFontSize}
              hoffset={20}
              voffset={(lineHeightNormal - previewFontSize) / 2}
              label={`Em square (${metrics.unitsPerEm})`}
              align="right"
              guides="all"
            />

            <Metric
              position={capHeight}
              hoffset={20}
              voffset={decent + lineGap / 2}
              label={`Cap Height (${metrics.capHeight})`}
            />

            <Metric
              position={decent}
              hoffset={80}
              voffset={lineGap / 2}
              label={`Descender (${absoluteDescent})`}
            />

            <Metric
              position={ascent}
              hoffset={80}
              voffset={decent + lineGap / 2}
              label={`Ascender (${metrics.ascent})`}
              guides="none"
            />

            <Metric
              position={lineHeightNormal}
              hoffset={80}
              label="Line Height"
              guides="none"
              align="right"
            />

            <Box zIndex={1} color="blue.800">
              Hg
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MetricsPreview;
