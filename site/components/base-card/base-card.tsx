import React from 'react';
import {Block, Headline, TextBlock, styled} from 'newskit';
import {BaseCardProps} from './types';
import {StyledCard} from './styled';

const StyledTextBlock = styled(TextBlock)`
  display: block;
`;

export const BaseCard = React.forwardRef<HTMLDivElement, BaseCardProps>(
  ({title, description, children, href, overrides, ...rest}, ref) => {
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
        <StyledTextBlock
          typographyPreset="editorialParagraph020"
          stylePreset="inkBase"
          as="span"
        >
          {description}
        </StyledTextBlock>
      </StyledCard>
    );
  },
);
