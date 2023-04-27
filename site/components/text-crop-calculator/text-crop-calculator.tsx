import React, {ReactNode} from 'react';
import {Block, TextBlock} from 'newskit';
import MetricsPreview from './components/metrics-preview';
import FontSelector from './components/font-selector';
import OutputCSS from './components/output-css';
import EditMetrics from './components/edit-metrics';
import {AppStateProvider} from './app-state-context';

const Step = ({
  number,
  title,
  children,
}: {
  number?: number;
  title?: string;
  children: ReactNode;
}) => (
  <Block marginBlockEnd="space080">
    {title && (
      <TextBlock
        stylePreset="inkBrand010"
        typographyPreset={{
          xs: 'editorialHeadline010',
          md: 'editorialHeadline030',
        }}
        marginBlockEnd="space040"
      >
        {number}. {title}
      </TextBlock>
    )}
    <Block>{children}</Block>
  </Block>
);

const TextCropCalculator = () => (
  <AppStateProvider>
    <Block>
      <Step number={1} title="Choose a font">
        <Block marginBlockEnd="space050">
          <FontSelector />
        </Block>
        <MetricsPreview />
      </Step>
      <Step number={2} title="Adjust metrics">
        <EditMetrics />
      </Step>
      <Step number={3} title="Add to theme">
        <OutputCSS />
      </Step>
    </Block>
  </AppStateProvider>
);
export default TextCropCalculator;
