import React from 'react';
import {Block, Headline, styled} from 'newskit';
import {BaseCardProps} from './types';
import {StyledCard} from './styled';

export const BaseCard: React.FC<BaseCardProps> = ({
  title,
  children,
  href,
  ...rest
}) => {
  const overrides = href
    ? {
        stylePreset: 'baseCardInteractive',
        teaserContainer: {
          spaceInset: 'space050',
        },
        mediaContainer: {
          spaceStack: 'space000'
        },
      }
    : {
        stylePreset: 'baseCardNonInteractive',
        teaserContainer: {
          spaceInset: 'spaceInsetStretch010',
        },
        mediaContainer: {
          spaceStack: 'space040'
        },
      };
  return (
    <StyledCard overrides={overrides} href={href} {...rest}>
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
