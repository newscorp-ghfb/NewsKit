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
import {FeatureCardProps, OptionalLinkWrapperProps} from './types';
import {
  StyledCardHorizontalInset,
  StyledCardVerticalInset,
  StyledFeatureCardHorizontalMedia,
  StyledFeatureCardVerticalMedia,
  StyledCardLink,
} from './styled';
import {LineTruncation} from '../line-truncation';

const OptionalLinkWrapper: React.FC<OptionalLinkWrapperProps> = ({
  href,
  children,
}) => {
  if (href) {
    return (
      <StyledCardLink href={href as string}>
        <>{children}</>
      </StyledCardLink>
    );
  }
  return <>{children}</>;
};

const FeatureCardHorizontal = React.forwardRef<
  HTMLDivElement,
  FeatureCardProps
>(
  (
    {
      title,
      description,
      href,
      stylePrefix,
      buttonLabel,
      buttonHref,
      overrides,
      ...props
    },
    ref,
  ) => {
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
      <OptionalLinkWrapper href={href}>
        <Visible xs sm>
          <StyledCardHorizontalInset
            ref={ref}
            {...props}
            media={() => (
              <StyledFeatureCardVerticalMedia
                stylePreset={`${stylePrefix}Media`}
              />
            )}
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
                  >
                    <LineTruncation lines="2">{description}</LineTruncation>
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
      </OptionalLinkWrapper>
    );
  },
);

const FeatureCardVertical = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      title,
      description,
      href,
      stylePrefix,
      buttonLabel,
      buttonHref,
      media,
      overrides,
      ...props
    },
    ref,
  ) => {
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
      <OptionalLinkWrapper href={href}>
        <StyledCardVerticalInset
          {...props}
          media={
            indexCards.includes(stylePrefix as string) ? mediaValue : media
          }
          ref={ref}
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
      </OptionalLinkWrapper>
    );
  },
);

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({layout, overrides, ...rest}, ref) => {
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
        ref={ref}
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
        ref={ref}
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
  },
);
