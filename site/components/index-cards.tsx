import React from 'react';
import {Cell} from 'newskit';
import {FeatureCard} from './feature-card';

export const FeatureCardsForIndex = () => (
  <>
    <Cell xs={12} xl={10} xlOffset={1}>
      <FeatureCard
        title="What's new?"
        description="NewsKit is constantly evolving. View announcements about the latest updates to the NewsKit design system."
        stylePrefix="whatsnewCard"
        href="/components/tabs"
        layout="horizontal"
        buttonLabel="Read more"
        buttonHref="/components/tabs"
      />
    </Cell>
    <Cell xs={12} md={6} xl={5} xlOffset={1}>
      <FeatureCard
        title="Roadmap"
        description="The NewsKit roadmap is updated regularly to ensure priorities are aligned to the business goals. "
        stylePrefix="roadmapCard"
        layout="vertical"
        href="/about/roadmap"
        buttonLabel="Read more"
        buttonHref="/about/roadmap"
      />
    </Cell>
    <Cell xs={12} md={6} xl={5}>
      <FeatureCard
        title="Contribute"
        description="Contributions needed! There are many ways to share your great work and ideas with the community."
        stylePrefix="contributeOldCard"
        href="/about/contribute"
        layout="vertical"
        buttonLabel="Read more"
        buttonHref="/about/contribute"
      />
    </Cell>
  </>
);
