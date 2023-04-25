import React, {ReactNode} from 'react';
import {Block, TextBlock} from 'newskit';
import MetricsPreview from './components/metrics-preview';
import FontSelector from './components/font-selector';
import OutputCSS from './components/output-css';
import EditMetrics from './components/edit-metrics';

const Step = ({
  number,
  title,
  children,
}: {
  number?: number;
  title?: string;
  children: ReactNode;
}) => (
  <Block>
    {title && (
      <TextBlock
        stylePreset="inkBrand010"
        typographyPreset={{
          xs: 'editorialHeadline010',
          md: 'editorialHeadline030',
        }}
      >
        {number}. {title}
      </TextBlock>
    )}
    <Block>{children}</Block>
  </Block>
);

const TextCropCalculator = () => (
  <Block>
    <Step number={1} title="Choose a font">
      <FontSelector />
      <MetricsPreview />
    </Step>
    <Step
      number={2}
      title="Adjust metrics (optional - e.g. if using a custom font)"
    >
      <EditMetrics />
    </Step>
    <Step number={3} title="Copy the font metrics into your theme">
      <OutputCSS />
    </Step>
  </Block>
);
export default TextCropCalculator;
