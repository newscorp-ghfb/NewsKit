import React from 'react';
import {FeatureCard} from '../../components/feature-card';
import {ComponentPageCell} from '../../components/layout-cells';

// TODO: This is not used anywhere
export const NeedHelpSection = () => (
  <ComponentPageCell>
    <FeatureCard
      title="Need Help?"
      description="Cant find what you are looking for?"
      buttonLabel="Get In Touch"
      stylePrefix="needHelpCard"
      layout="horizontal"
      href="/about/contact-us/"
      buttonHref="/about/contact-us/"
    />
  </ComponentPageCell>
);
