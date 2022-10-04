import React from 'react';
import {H1, H2, P} from '../typography';
import {Divider} from '../divider';
import {LinkStandalone} from '../link';
import {Block} from '../block';
import {Image} from '../image';
import {getColorCssFromTheme, styled} from '../utils';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {GridLayout, GridLayoutItem} from '../grid-layout';

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

const WelcomeTitle = styled(H1)`
  max-width: 200px;
`;

const WelcomeDescription = styled(P)`
  max-width: 300px;
`;

const WelcomeContainer = styled(Block)`
  /* Welcome screen is not themeable so its only appearance is in newskit light theme. */
  /* Doing this to stretch the internals of the Welcome screen from side to side to avoid cases where the dark theme is selected and there are dark borders around it. */
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  ${getColorCssFromTheme('backgroundColor', 'inkLight010')};
`;

export const ThemelessWelcome = () => (
  <WelcomeContainer
    paddingInline="space040"
    paddingBlock="space030"
    marginInlineStart="-8px"
  >
    <Block
      stylePreset="welcomeBanner"
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
    </Block>
    <H2
      overrides={{
        typographyPreset: 'utilitySubheading050',
        marginBlockEnd: 'space030',
      }}
    >
      Explore
    </H2>
    <Divider overrides={{marginBlockEnd: 'space060'}} />
    <GridLayout rowGap="space040">
      {links.map(({label, url}) => (
        <GridLayoutItem key={url}>
          <LinkStandalone
            target="_blank"
            overrides={{typographyPreset: 'utilityBody030'}}
            href={url}
          >
            {label}
          </LinkStandalone>
        </GridLayoutItem>
      ))}
    </GridLayout>
    <LinkStandalone
      external={false}
      href="https://badge.fury.io/js/newskit"
      overrides={{marginBlockStart: 'space070'}}
    >
      <Image
        src="https://badge.fury.io/js/newskit.svg"
        alt="npm version badge"
      />
    </LinkStandalone>
  </WelcomeContainer>
);

export const Welcome = withOwnTheme(ThemelessWelcome)({
  defaults: {},
  stylePresets,
});
