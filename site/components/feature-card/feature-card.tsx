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
  useTheme,
} from 'newskit';
import {getToken} from '../../../src/utils/get-token';
import {FeatureCardProps} from './types';
import {
  StyledCardHorizontalInset,
  StyledCardVerticalInset,
  StyledFeatureCardHorizontalMedia,
  StyledFeatureCardVerticalMedia,
} from './styled';

const FeatureCardHorizontal: React.FC<FeatureCardProps> = ({
  title,
  description,
  href,
  stylePrefix,
  buttonLabel,
  buttonHref,
  overrides,
  ...props
}) => {
  const theme = useTheme();
  const titleTypographyPreset = getToken(
    {theme, overrides},
    '',
    'title',
    'typographyPreset',
  );
  const descriptionTypographyPreset = getToken(
    {theme, overrides},
    '',
    'description',
    'typographyPreset',
  );

  return (
    <>
      <Visible xs sm>
        <StyledCardHorizontalInset
          {...props}
          media={() => (
            <StyledFeatureCardVerticalMedia
              stylePreset={`${stylePrefix}Media`}
            />
          )}
          href={href}
          layout="vertical"
          overrides={{
            ...overrides,
            stylePreset: `${stylePrefix}Container${
              href ? 'Interactive' : 'NonInteractive'
            }`,

            teaserContainer: {
              spaceInset: 'space050',
            },
          }}
        >
          {title && (
            <Block spaceStack={{xs: 'space045', lg: 'space050'}}>
              <Headline
                overrides={{
                  typographyPreset: titleTypographyPreset,
                  heading: {
                    stylePreset: 'inkWhiteContrast',
                  },
                }}
              >
                {title}
              </Headline>
            </Block>
          )}
          {description && (
            <Block spaceStack={{xs: 'space050', lg: 'space060'}}>
              <TextBlock
                stylePreset="inkWhiteSubtle"
                typographyPreset={descriptionTypographyPreset}
              >
                {description}
              </TextBlock>
            </Block>
          )}
          {buttonLabel && (
            <Block spaceStack="space020">
              <Button
                href={buttonHref}
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
            ...overrides,
            stylePreset: `${stylePrefix}Container${
              href ? 'Interactive' : 'NonInteractive'
            }`,
            teaserContainer: {
              spaceInset: {md: 'space050', lg: 'space060'},
            },
          }}
        >
          <Stack stackDistribution={StackDistribution.Center}>
            {title && (
              <Block spaceStack={{xs: 'space045', lg: 'space050'}}>
                <Headline
                  overrides={{
                    typographyPreset: titleTypographyPreset,
                    heading: {
                      stylePreset: 'inkWhiteContrast',
                    },
                  }}
                >
                  {title}
                </Headline>
              </Block>
            )}
            {description && (
              <Block spaceStack={{xs: 'space050', lg: 'space060'}}>
                <TextBlock
                  stylePreset="inkWhiteSubtle"
                  typographyPreset={descriptionTypographyPreset}
                  lineTruncation="2"
                >
                  {description}
                </TextBlock>
              </Block>
            )}
            {buttonLabel && (
              <Button
                href={buttonHref}
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
};

const FeatureCardVertical: React.FC<FeatureCardProps> = ({
  title,
  description,
  href,
  stylePrefix,
  buttonLabel,
  buttonHref,
  media,
  overrides,
  ...props
}) => {
  const indexCards = ['roadmapCard', 'contributeCard', 'patternsCard'];
  const mediaValue = () => (
    <StyledFeatureCardVerticalMedia stylePreset={`${stylePrefix}Media`} />
  );
  const theme = useTheme();
  const titleTypographyPreset = getToken(
    {theme, overrides},
    '',
    'title',
    'typographyPreset',
  );
  const descriptionTypographyPreset = getToken(
    {theme, overrides},
    '',
    'description',
    'typographyPreset',
  );
  return (
    <StyledCardVerticalInset
      {...props}
      media={indexCards.includes(stylePrefix as string) ? mediaValue : media}
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
      {title && (
        <Block spaceStack={{xs: 'space045', lg: 'space050'}}>
          <Headline
            overrides={{
              typographyPreset: titleTypographyPreset,

              heading: {
                stylePreset: 'inkWhiteContrast',
              },
            }}
          >
            {title}
          </Headline>
        </Block>
      )}
      {description && (
        <Block spaceStack={{xs: 'space050', lg: 'space060'}}>
          <TextBlock
            stylePreset="inkWhiteSubtle"
            typographyPreset={descriptionTypographyPreset}
          >
            {description}
          </TextBlock>
        </Block>
      )}
      {buttonLabel && (
        <Block spaceStack="space020">
          <Button
            href={buttonHref}
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
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  layout,
  overrides,
  ...rest
}) => {
  const theme = useTheme();
  const titleTypographyPreset = getToken(
    {theme, overrides},
    'featureCard.title',
    'title',
    'typographyPreset',
  );
  const descriptionTypographyPreset = getToken(
    {theme, overrides},
    'featureCard.description',
    'description',
    'typographyPreset',
  );
  return layout === 'horizontal' ? (
    <FeatureCardHorizontal
      overrides={{
        title: {
          typographyPreset: titleTypographyPreset,
        },
        description: {
          typographyPreset: descriptionTypographyPreset,
        },
      }}
      {...rest}
    />
  ) : (
    <FeatureCardVertical
      overrides={{
        title: {
          typographyPreset: titleTypographyPreset,
        },
        description: {
          typographyPreset: descriptionTypographyPreset,
        },
      }}
      {...rest}
    />
  );
};
