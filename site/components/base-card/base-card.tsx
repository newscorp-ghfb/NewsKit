import React from 'react';
import {Block, Headline, TextBlock} from 'newskit';
import {BaseCardProps} from './types';
import {StyledCard} from './styled';

export const BaseCard = React.forwardRef<HTMLDivElement, BaseCardProps>(
  ({title, description, href, overrides, ...rest}, ref) => {
    const cardOverrides = href
      ? {
          ...overrides,
          stylePreset: 'baseCardInteractive',
          teaserContainer: {
            spaceInset: 'space050',
          },
          mediaContainer: {
            spaceInline: 'space000',
          },
        }
      : {
          ...overrides,
          stylePreset: 'baseCardNonInteractive',
          teaserContainer: {
            spaceInset: 'spaceInsetStretch010',
          },
          mediaContainer: {
            spaceInline: 'space040',
          },
        };
    return (
      <StyledCard overrides={cardOverrides} href={href} {...rest} ref={ref}>
        {title && (
          <Block spaceStack="space045">
            <Headline
              headingAs="h3"
              overrides={{
                typographyPreset: 'editorialHeadline020',
                heading: {
                  stylePreset: 'inkContrast',
                },
              }}
            >
              {title}
            </Headline>
          </Block>
        )}
        <TextBlock
          typographyPreset="editorialParagraph020"
          stylePreset="inkBase"
        >
          {description}
        </TextBlock>
      </StyledCard>
    );
  },
);
