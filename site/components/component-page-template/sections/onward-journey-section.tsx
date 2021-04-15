import React from 'react';
import {FeatureCard} from '../../feature-card';
import {ComponentPageCell} from '../../layout-cells';
import {OnwardJourneySectionProps} from './types';

export const OnwardJourneySection: React.FC<OnwardJourneySectionProps> = featureCard => (
  <ComponentPageCell>
    <FeatureCard {...featureCard} />
  </ComponentPageCell>
);
