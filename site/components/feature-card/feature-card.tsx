import React from 'react';
import {
  Block,
  Visible,
  Stack,
  Headline,
  TextBlock,
  useTheme,
  toNewsKitIcon,
  LinkStandalone,
  Flag,
} from 'newskit';
import {ChevronRight as FilledChevronRight} from '@emotion-icons/material/ChevronRight';
import {getToken} from '../../../src/utils/get-token';
import {
  FeatureCardProps,
  OptionalLinkWrapperProps,
  ArrowLinkProps,
} from './types';
import {
  StyledCardHorizontalInset,
  StyledCardVerticalInset,
  StyledFeatureCardHorizontalMedia,
  StyledFeatureCardVerticalMedia,
  StyledCardLink,
} from './styled';

const IconFilledChevronRight = toNewsKitIcon(FilledChevronRight);

const OptionalLinkWrapper: React.FC<OptionalLinkWrapperProps> = ({
  href,
  children,
}) => {
  if (href) {
    return (
      <StyledCardLink
        external={false}
        overrides={{
          stylePreset: 'linkNoUnderline',
        }}
        href={href as string}
      >
        <>{children}</>
      </StyledCardLink>
    );
  }
  return <>{children}</>;
};

const ArrowLink: React.FC<ArrowLinkProps> = ({
  dataTestId = 'arrowLink',
  href,
  buttonHref,
  label,
  icon,
  overrides,
}) => {
  const combinedOverrides = {
    stylePreset: 'linkStandaloneInverse',
    ...overrides,
  };
  return (
    <div data-testid={dataTestId}>
      {!href && (
        <LinkStandalone
          href={buttonHref as string}
          overrides={combinedOverrides}
        >
          {label}
          {icon || <IconFilledChevronRight overrides={{size: 'iconSize020'}} />}
        </LinkStandalone>
      )}
      {href && (
        <TextBlock
          typographyPreset="utilityButton020"
          stylePreset={combinedOverrides?.stylePreset}
          as="div"
        >
          <Stack flow="horizontal-center" as="span">
            <TextBlock typographyPreset="utilityButton020" as="span">
              {label}
            </TextBlock>
            {icon || (
              <IconFilledChevronRight overrides={{size: 'iconSize020'}} />
            )}
          </Stack>
        </TextBlock>
      )}
    </div>
  );
};

const FeatureCardHorizontal = React.forwardRef<
  HTMLDivElement,
  FeatureCardProps
>(
  (
    {
      flagLabel,
      title,
      description,
      href,
      stylePrefix,
      buttonIcon,
      buttonLabel,
      buttonHref,
      overrides,
      ...props
    },
    ref,
  ) => {
    const buttonOverrides = overrides?.button;
    const theme = useTheme();
    const titleTypographyPreset = getToken(
      {theme, overrides},
      '',
      'title',
      'typographyPreset',
    );
    const titleStylePreset =
      getToken({theme, overrides}, '', 'title', 'stylePreset') ||
      'inkWhiteContrast';
    const descriptionTypographyPreset = getToken(
      {theme, overrides},
      '',
      'description',
      'typographyPreset',
    );
    const descriptionStylePreset =
      getToken({theme, overrides}, '', 'description', 'stylePreset') ||
      'inkWhiteSubtle';

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
            {flagLabel && (
              <Block spaceStack={{xs: 'space045', lg: 'space050'}}>
                <Flag
                  size="small"
                  overrides={{stylePreset: 'flagSolidInformative'}}
                >
                  {flagLabel}
                </Flag>
              </Block>
            )}
            {title && (
              <Block spaceStack={{xs: 'space045', lg: 'space050'}}>
                <Headline
                  overrides={{
                    typographyPreset: titleTypographyPreset,
                    heading: titleStylePreset,
                  }}
                >
                  {title}
                </Headline>
              </Block>
            )}
            {description && (
              <Block spaceStack={{xs: 'space050', lg: 'space060'}}>
                <TextBlock
                  stylePreset={descriptionStylePreset}
                  typographyPreset={descriptionTypographyPreset}
                >
                  {description}
                </TextBlock>
              </Block>
            )}
            {buttonLabel && (
              <Block spaceStack="space020">
                <ArrowLink
                  dataTestId="arrowLinkSmall"
                  href={href as string}
                  buttonHref={buttonHref}
                  overrides={buttonOverrides}
                  label={buttonLabel}
                  icon={buttonIcon}
                />
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
            <Stack stackDistribution="center">
              {flagLabel && (
                <Block spaceStack={{xs: 'space045', lg: 'space050'}}>
                  <Flag
                    size="small"
                    overrides={{stylePreset: 'flagSolidInformative'}}
                  >
                    {flagLabel}
                  </Flag>
                </Block>
              )}
              {title && (
                <Block spaceStack={{xs: 'space045', lg: 'space050'}}>
                  <Headline
                    overrides={{
                      typographyPreset: titleTypographyPreset,
                      heading: titleStylePreset,
                    }}
                  >
                    {title}
                  </Headline>
                </Block>
              )}
              {description && (
                <Block spaceStack="space050">
                  <TextBlock
                    stylePreset={descriptionStylePreset}
                    typographyPreset={descriptionTypographyPreset}
                  >
                    {description}
                  </TextBlock>
                </Block>
              )}
              {buttonLabel && (
                <ArrowLink
                  dataTestId="arrowLinkLarge"
                  href={href as string}
                  buttonHref={buttonHref}
                  overrides={buttonOverrides}
                  label={buttonLabel}
                  icon={buttonIcon}
                />
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
      flagLabel,
      title,
      description,
      href,
      stylePrefix,
      buttonIcon,
      buttonLabel,
      buttonHref,
      media,
      overrides,
      ...props
    },
    ref,
  ) => {
    const buttonOverrides = overrides?.button;
    const theme = useTheme();
    const titleTypographyPreset = getToken(
      {theme, overrides},
      '',
      'title',
      'typographyPreset',
    );
    const titleStylePreset =
      getToken({theme, overrides}, '', 'title', 'stylePreset') ||
      'inkWhiteContrast';
    const descriptionTypographyPreset = getToken(
      {theme, overrides},
      '',
      'description',
      'typographyPreset',
    );
    const descriptionStylePreset =
      getToken({theme, overrides}, '', 'description', 'stylePreset') ||
      'inkWhiteSubtle';

    return (
      <OptionalLinkWrapper href={href}>
        <StyledCardVerticalInset
          {...props}
          media={media}
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
          {flagLabel && (
            <Block spaceStack={{xs: 'space045', lg: 'space050'}}>
              <Flag
                size="small"
                overrides={{stylePreset: 'flagSolidInformative'}}
              >
                {flagLabel}
              </Flag>
            </Block>
          )}
          {title && (
            <Block spaceStack={{xs: 'space045', lg: 'space050'}}>
              <Headline
                headingAs="h3"
                overrides={{
                  typographyPreset: titleTypographyPreset,

                  heading: titleStylePreset,
                }}
              >
                {title}
              </Headline>
            </Block>
          )}
          {description && (
            <Block spaceStack={{xs: 'space050', lg: 'space060'}}>
              <TextBlock
                stylePreset={descriptionStylePreset}
                typographyPreset={descriptionTypographyPreset}
              >
                {description}
              </TextBlock>
            </Block>
          )}
          {buttonLabel && (
            <ArrowLink
              dataTestId="arrowLinkLarge"
              href={href as string}
              buttonHref={buttonHref}
              overrides={buttonOverrides}
              label={buttonLabel}
              icon={buttonIcon}
            />
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
    const titleStylePreset = getToken(
      {theme, overrides},
      'featureCard.title',
      'title',
      'stylePreset',
    );
    const descriptionTypographyPreset = getToken(
      {theme, overrides},
      'featureCard.description',
      'description',
      'typographyPreset',
    );
    const descriptionStylePreset = getToken(
      {theme, overrides},
      'featureCard.description',
      'description',
      'stylePreset',
    );
    return layout === 'horizontal' ? (
      <FeatureCardHorizontal
        ref={ref}
        overrides={{
          title: {
            typographyPreset: titleTypographyPreset,
            stylePreset: titleStylePreset,
          },
          description: {
            typographyPreset: descriptionTypographyPreset,
            stylePreset: descriptionStylePreset,
          },
          button: overrides?.button,
        }}
        {...rest}
      />
    ) : (
      <FeatureCardVertical
        ref={ref}
        overrides={{
          title: {
            typographyPreset: titleTypographyPreset,
            stylePreset: titleStylePreset,
          },
          description: {
            typographyPreset: descriptionTypographyPreset,
            stylePreset: descriptionStylePreset,
          },
          button: overrides?.button,
        }}
        {...rest}
      />
    );
  },
);
