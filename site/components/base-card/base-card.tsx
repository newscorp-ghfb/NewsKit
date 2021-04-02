import React from 'react';
import {Block, Headline} from 'newskit';
import {BaseCardProps} from './types';
import {StyledCard} from './styled';

export const BaseCard: React.FC<BaseCardProps> = ({
  title,
  children,
  href,
  overrides,
  ...rest
}) => {
  const cardOverrides = href
    ? {
        ...overrides,
        stylePreset: 'baseCardInteractive',
        teaserContainer: {
          spaceInset: 'space050',
        },
        mediaContainer: {
          spaceStack: 'space000',
        },
      }
    : {
        ...overrides,
        stylePreset: 'baseCardNonInteractive',
        teaserContainer: {
          spaceInset: 'spaceInsetStretch010',
        },
        mediaContainer: {
          spaceStack: 'space040',
        },
      };
  return (
    <StyledCard overrides={cardOverrides} href={href} {...rest}>
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
    </StyledCard>
  );
};
