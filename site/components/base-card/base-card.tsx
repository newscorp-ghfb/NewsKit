import React from 'react';
import {Block, Headline} from 'newskit';
import {BaseCardProps} from './types';
import {StyledCard} from './styled';

export const BaseCard: React.FC<BaseCardProps> = ({
  title,
  children,
  layout,
  href,
  ...rest
}) => {
  const overrides = href
    ? {
        stylePreset: 'baseCardInteractive',
        teaserContainer: {
          spaceInset: 'space050',
        },
      }
    : {
        stylePreset: 'baseCardNonInteractive',
        mediaContainer: {
          spaceStack: layout === 'horizontal' ? 'space050' : 'space040',
        },
      };
  return (
    <StyledCard overrides={overrides} layout={layout} href={href} {...rest}>
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
