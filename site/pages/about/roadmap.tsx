import React from 'react';
import {InlineMessage} from 'newskit';
import {AboutPageTemplate} from '../../templates/about-page-template';
import {LayoutProps} from '../../components/layout';
import {ComponentPageCell} from '../../components/layout-cells';

const Roadmap = (layoutProps: LayoutProps) => {
  const pageName = 'Roadmap';
  const pageDescription =
    'NewsKit’s Design System team is busy building and planning to help you build better products faster.';

  return (
    <AboutPageTemplate
      headTags={{
        title: pageName,
        description: pageDescription,
      }}
      featureCard={{
        title: 'Contribute',
        stylePrefix: 'contributeCard',
        description: 'Join the community and help grow NewsKit for everyone.',
        href: '/about/contribute',
      }}
      layoutProps={layoutProps}
      pageIntroduction={{
        type: 'About',
        name: 'Roadmap',
        introduction: '',
        hero: {
          illustration: 'components/hero-roadmap-illustration',
          illustrationProps: {viewBox: '0 0 1344 759'},
        },
        showSeparator: false,
      }}
    >
      <ComponentPageCell>
        <InlineMessage
          overrides={{
            stylePreset: 'inlineMessageNegative',
            marginBlockEnd: 'space090',
          }}
        >
          The roadmap is unavailable at this time, please check back later
        </InlineMessage>
      </ComponentPageCell>
    </AboutPageTemplate>
  );
};
export default Roadmap;
