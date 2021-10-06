import React from 'react';
import {FeatureCard} from '../../feature-card';
import {ComponentPageCell} from '../../layout-cells';

export const OnwardJourneySection = () => (
  <ComponentPageCell>
    <FeatureCard
      title="Need Help?"
      description="Cant find what you are looking for?"
      buttonLabel="Get In Touch"
      stylePrefix="needHelpCard"
      layout="horizontal"
      href="/about/contact-us/"
    />
  </ComponentPageCell>
);
