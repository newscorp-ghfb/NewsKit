import React from 'react';
import {FeatureCard} from '../../components/feature-card';
import {ComponentPageCell} from '../../components/layout-cells';

// TODO: This is not used anywhere
// A generically formed version of this appears at the bottom of /components/button/
export const NeedHelpSection = () => (
  <ComponentPageCell>
    <FeatureCard
      title="Need Help?"
      description="Cant find what you are looking for?"
      buttonLabel="Get In Touch"
      stylePrefix="needHelpCard"
      layout="horizontal"
      buttonHref="/about/contact-us/"
    />
  </ComponentPageCell>
);
