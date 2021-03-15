import React from 'react';
import {Block, Card, CardInset, Headline} from 'newskit';
import {BaseCardProps} from './types';

const BaseCardInteractive: React.FC<BaseCardProps> = ({
  title,
  children,
  ...rest
}) => (
  <CardInset
    overrides={{
      stylePreset: 'baseCardInteractive',
      teaserContainer: {
        spaceInset: 'space050',
      },
    }}
    {...rest}
  >
    <Block spaceStack="space020">
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
  </CardInset>
);

const BaseCardNonInteractive: React.FC<BaseCardProps> = ({
  title,
  children,
  layout,
  ...rest
}) => (
  <Card
    overrides={{
      stylePreset: 'baseCardNonInteractive',
      mediaContainer: {
        spaceStack: layout === 'horizontal' ? 'space050' : 'space040',
      },
    }}
    layout={layout}
    {...rest}
  >
    <Block spaceStack="space020">
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
  </Card>
);

export const BaseCard: React.FC<BaseCardProps> = ({href, ...rest}) =>
  href ? (
    <BaseCardInteractive href={href} {...rest} />
  ) : (
    <BaseCardNonInteractive {...rest} />
  );
