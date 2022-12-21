import React from 'react';
import {FeatureCard} from '../../components/feature-card';
import {ComponentPageCell} from '../../components/layout-cells';

export interface OnwardJourneySectionProps {
  title: string;
  description: string;
  buttonLabel: string;
  stylePrefix: string;
  layout?: 'vertical' | 'horizontal';
  href: string;
}

export const OnwardJourneySection: React.FC<OnwardJourneySectionProps> = ({
  title,
  description,
  buttonLabel,
  stylePrefix,
  layout,
  href,
}: OnwardJourneySectionProps) => (
  <ComponentPageCell>
    <FeatureCard
      title={title}
      description={description}
      buttonLabel={buttonLabel}
      stylePrefix={stylePrefix}
      layout={layout}
      overrides={{
        button: {
          paddingInline: 'space000',
          stylePreset: 'linkStandaloneInversePersistent',
        },
      }}
      buttonHref={href}
    />
  </ComponentPageCell>
);
