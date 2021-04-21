import React from 'react';
import {
  Block,
  Visible,
  StackDistribution,
  Stack,
  Headline,
  TextBlock,
  Button,
  IconFilledChevronRight,
  ButtonSize,
} from 'newskit';
import {FeatureCardProps} from './types';
import {
  StyledCardHorizontalInset,
  StyledFeatureCardVerticalMedia,
  StyledFeatureCardHorizontalMedia,
  StyledCardVerticalInset,
} from './styled';

const FeatureCardHorizontal: React.FC<FeatureCardProps> = ({
  title,
  description,
  href,
  stylePrefix,
  buttonLabel,
  ...props
}) => (
  <>
    <Visible xs sm>
      <StyledCardHorizontalInset
        {...props}
        media={() => (
          <StyledFeatureCardVerticalMedia stylePreset={`${stylePrefix}Media`} />
        )}
        href={href}
        layout="vertical"
        overrides={{
          stylePreset: `${stylePrefix}Container${
            href ? 'Interactive' : 'NonInteractive'
          }`,
          teaserContainer: {
            spaceInset: 'space050',
          },
        }}
      >
        <Block spaceStack={{xs: 'space045', lg: 'space050'}}>
          <Headline
            overrides={{
              // TODO: clean out excessive overrides as part of https://nidigitalsolutions.jira.com/browse/PPDSC-1502
              typographyPreset: {
                xs: 'editorialHeadline040',
                sm: 'editorialHeadline040',
                md: 'editorialHeadline040',
                lg: 'editorialHeadline060',
                xl: 'editorialHeadline060',
              },
              heading: {
                stylePreset: 'inkWhite',
              },
            }}
          >
            {title}
          </Headline>
        </Block>
        <Block spaceStack={{xs: 'space050', lg: 'space060'}}>
          <TextBlock
            stylePreset="inkWhiteTint080"
            typographyPreset={{
              xs: 'editorialSubheadline010',
              lg: 'editorialSubheadline020',
            }}
          >
            {description}
          </TextBlock>
        </Block>
        {buttonLabel && (
          <Block spaceStack="space020">
            <Button
              size={ButtonSize.Small}
              overrides={{
                stylePreset: `${stylePrefix}Button`,
                typographyPreset: 'utilityButton010',
              }}
            >
              {buttonLabel}
              <IconFilledChevronRight overrides={{size: 'iconSize010'}} />
            </Button>
          </Block>
        )}
      </StyledCardHorizontalInset>
    </Visible>
    <Visible md lg xl>
      <StyledCardHorizontalInset
        {...props}
        media={() => (
          <StyledFeatureCardHorizontalMedia
            stylePreset={`${stylePrefix}Media`}
          />
        )}
        href={href}
        layout="horizontal-reverse"
        overrides={{
          stylePreset: `${stylePrefix}Container${
            href ? 'Interactive' : 'NonInteractive'
          }`,
          teaserContainer: {
            spaceInset: {md: 'space050', lg: 'space060'},
          },
        }}
      >
        <Stack stackDistribution={StackDistribution.Center}>
          <Block spaceStack={{xs: 'space045', lg: 'space050'}}>
            <Headline
              overrides={{
                // TODO: clean out excessive overrides as part of https://nidigitalsolutions.jira.com/browse/PPDSC-1502
                typographyPreset: {
                  xs: 'editorialHeadline040',
                  sm: 'editorialHeadline040',
                  md: 'editorialHeadline040',
                  lg: 'editorialHeadline060',
                  xl: 'editorialHeadline060',
                },
                heading: {
                  stylePreset: 'inkWhite',
                },
              }}
            >
              {title}
            </Headline>
          </Block>
          <Block spaceStack={{xs: 'space040', lg: 'space050', xl: 'space050'}}>
            <TextBlock
              stylePreset="inkWhiteTint080"
              typographyPreset={{
                xs: 'editorialSubheadline010',
                lg: 'editorialSubheadline020',
              }}
            >
              {description}
            </TextBlock>
          </Block>
          {buttonLabel && (
            <Button
              size={ButtonSize.Small}
              overrides={{
                stylePreset: `${stylePrefix}Button`,
                typographyPreset: 'utilityButton010',
              }}
            >
              {buttonLabel}
              <IconFilledChevronRight overrides={{size: 'iconSize010'}} />
            </Button>
          )}
        </Stack>
      </StyledCardHorizontalInset>
    </Visible>
  </>
);

const FeatureCardVertical: React.FC<FeatureCardProps> = ({
  title,
  description,
  href,
  stylePrefix,
  buttonLabel,
  ...props
}) => (
  <StyledCardVerticalInset
    {...props}
    media={() => (
      <StyledFeatureCardVerticalMedia stylePreset={`${stylePrefix}Media`} />
    )}
    href={href}
    overrides={{
      stylePreset: `${stylePrefix}Container${
        href ? 'Interactive' : 'NonInteractive'
      }`,
      teaserContainer: {
        spaceInset: 'space050',
      },
    }}
  >
    <Block spaceStack={{xs: 'space045', lg: 'space050'}}>
      <Headline
        overrides={{
          // TODO: clean out excessive overrides as part of https://nidigitalsolutions.jira.com/browse/PPDSC-1502
          typographyPreset: {
            xs: 'editorialHeadline040',
            sm: 'editorialHeadline040',
            md: 'editorialHeadline040',
            lg: 'editorialHeadline060',
            xl: 'editorialHeadline060',
          },
          heading: {
            stylePreset: 'inkWhite',
          },
        }}
      >
        {title}
      </Headline>
    </Block>
    <Block spaceStack={{xs: 'space050', lg: 'space060'}}>
      <TextBlock
        stylePreset="inkWhiteTint080"
        typographyPreset={{
          xs: 'editorialSubheadline010',
          lg: 'editorialSubheadline020',
        }}
      >
        {description}
      </TextBlock>
    </Block>
    {buttonLabel && (
      <Block spaceStack="space020">
        <Button
          size={ButtonSize.Small}
          overrides={{
            stylePreset: `${stylePrefix}Button`,
            typographyPreset: 'utilityButton010',
          }}
        >
          {buttonLabel}
          <IconFilledChevronRight overrides={{size: 'iconSize010'}} />
        </Button>
      </Block>
    )}
  </StyledCardVerticalInset>
);

export const FeatureCard: React.FC<FeatureCardProps> = ({layout, ...rest}) =>
  layout === 'horizontal' ? (
    <FeatureCardHorizontal {...rest} />
  ) : (
    <FeatureCardVertical {...rest} />
  );
