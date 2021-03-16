import React from 'react';
import {Block, Headline} from 'newskit';
import {BaseCardProps} from './types';
import {StyledCardInteractive, StyledBaseCardNonInteractive} from './styled';

const BaseCardInteractive: React.FC<BaseCardProps> = ({
  title,
  children,
  ...rest
}) => (
  <StyledCardInteractive
    overrides={{
      stylePreset: 'baseCardInteractive',
      teaserContainer: {
        spaceInset: 'space050',
      },
    }}
    {...rest}
  >
    <Block spaceStack="space045">
      <Headline
        overrides={{
          typographyPreset: 'editorialHeadline030',
          heading: {
            stylePreset: 'inkContrast',
          },
        }}
      >
        {title}
      </Headline>
    </Block>
    {children}
  </StyledCardInteractive>
);

const BaseCardNonInteractive: React.FC<BaseCardProps> = ({
  title,
  children,
  layout,
  ...rest
}) => (
  <StyledBaseCardNonInteractive
    overrides={{
      stylePreset: 'baseCardNonInteractive',
      mediaContainer: {
        spaceStack: layout === 'horizontal' ? 'space050' : 'space040',
      },
    }}
    layout={layout}
    {...rest}
  >
    <Block spaceStack="space045">
      <Headline
        overrides={{
          typographyPreset: 'editorialHeadline030',
          heading: {
            stylePreset: 'inkContrast',
          },
        }}
      >
        {title}
      </Headline>
    </Block>
    {children}
  </StyledBaseCardNonInteractive>
);

export const BaseCard: React.FC<BaseCardProps> = ({href, ...rest}) =>
  href ? (
    <BaseCardInteractive href={href} {...rest} />
  ) : (
    <BaseCardNonInteractive {...rest} />
  );
