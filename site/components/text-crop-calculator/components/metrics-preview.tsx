import React, {useEffect, useState} from 'react';
import {useAppState} from '../app-state-context';
import {Metric} from './metric';
import {
  Background,
  ExampleText,
  FontContainer,
  PreviewContainer,
  RelativeContainer,
} from './styled';

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
    <PreviewContainer>
      <FontContainer
        fontFamily={
          selectedFont.name.indexOf(' ') > -1
            ? `'${selectedFont.name}'`
            : selectedFont.name
        }
      >
        <RelativeContainer>
          <Background />
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

          <ExampleText fontSize={previewFontSize}>Hg</ExampleText>
        </RelativeContainer>
      </FontContainer>
    </PreviewContainer>
  );
};

export default MetricsPreview;
