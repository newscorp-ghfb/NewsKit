import React from 'react';
import {H1, H2, P} from '../typography';
import {Divider} from '../divider';
import {LinkStandalone} from '../link';
import {Block} from '../block';
import {Image} from '../image';
import {
  getBorderCssFromTheme,
  getColorCssFromTheme,
  getSpacingCssFromTheme,
  styled,
} from '../utils';

const links = [
  {label: 'NewsKit website', url: 'https://newskit.co.uk/'},
  {label: 'GitHub', url: 'https://github.com/newscorp-ghfb/newskit'},
  {
    label: 'Figma component library (internal only)',
    url:
      'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components',
  },
  {label: 'Changelog', url: 'https://newskit.co.uk/about/release-notes/'},
  {label: 'About', url: 'https://newskit.co.uk/about/introduction/'},
  {
    label: 'Report an issue',
    url: 'https://github.com/newscorp-ghfb/newskit/issues/new/choose',
  },
];

const WelcomeBanner = styled(Block)`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/welcome-banner.svg');
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};
`;

const WelcomeTitle = styled(H1)`
  max-width: 200px;
`;

const WelcomeDescription = styled(P)`
  max-width: 300px;
`;

const WelcomeContainer = styled(Block)`
  /* Welcome screen is not themeable so it's only in newskit light mode. */
  /* Doing this to stretch the internals of the Welcome screen from side to side to avoid cases where the dark theme is selected and there are dark borders around it. */
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  ${getColorCssFromTheme('backgroundColor', 'white')};
  ${getSpacingCssFromTheme('paddingInline', 'space050')}
  ${getSpacingCssFromTheme('paddingBlock', 'space050')}
  margin-top: 0;
  margin-left: -8px;
`;

export const Welcome = () => (
  <WelcomeContainer marginBlockStart="space050" marginInline="space040">
    <WelcomeBanner
      marginBlockEnd="space100"
      paddingInline="space080"
      paddingBlock="space080"
    >
      <WelcomeTitle
        overrides={{
          typographyPreset: 'utilityHeading050',
          marginBlockEnd: 'space030',
        }}
      >
        Welcome to NewsKit
      </WelcomeTitle>
      <WelcomeDescription overrides={{typographyPreset: 'utilityBody030'}}>
        An open source design system built by News UK, for everyone
      </WelcomeDescription>
    </WelcomeBanner>
    <H2
      overrides={{
        typographyPreset: 'utilitySubheading050',
        marginBlockEnd: 'space030',
      }}
    >
      Explore
    </H2>
    <Divider overrides={{marginBlockEnd: 'space060'}} />
    {links.map(({label, url}) => (
      <Block key={url} marginBlockEnd="space040">
        <LinkStandalone
          target="_blank"
          overrides={{typographyPreset: 'utilityBody030'}}
          href={url}
        >
          {label}
        </LinkStandalone>
      </Block>
    ))}
    <LinkStandalone
      external={false}
      href="https://badge.fury.io/js/newskit"
      overrides={{marginBlockStart: 'space050'}}
    >
      <Image
        src="https://badge.fury.io/js/newskit.svg"
        alt="npm version badge"
      />
    </LinkStandalone>
  </WelcomeContainer>
);
