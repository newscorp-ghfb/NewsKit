import React from 'react';
import {CardProps} from './types';
import {Image, ImageProps} from '../image';
import {
  StyledCardContainer,
  StyledCardContainerMedia,
  StyledCardContainerTeaserAndActions,
  StyledCardContainerTeaser,
  StyledCardContainerActions,
  StyledCardLink,
} from './styled';
import {Flow, StackDistribution} from '../stack';
import {renderComponent, hasMatchingDisplayNameWith} from '../utils/component';
import {deepMap} from '../utils/react-children-utilities';
import {Headline} from '../headline';
import {BaseLinkProps} from '../link';
import {Theme, useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {deepMerge} from '../utils/deep-merge';
import {getHorizontalRatio} from './utils';

const renderMedia = (media: CardProps['media']) =>
  renderComponent(media) || (
    <Image loadingAspectRatio="3:2" {...(media as ImageProps)} />
  );

const addHrefToLinkProps = (props: object, href: string | BaseLinkProps) =>
  typeof href === 'string'
    ? {
        ...props,
        href,
      }
    : {
        ...href,
        ...props,
      };

const getCardHeadlineSettings = (
  headline: React.ReactNode,
  theme: Theme,
  href?: string | BaseLinkProps,
) => {
  const cardHeadlineDefaults = href
    ? theme.componentDefaults.card.headline.interactive
    : theme.componentDefaults.card.headline.nonInteractive;

  const {
    overrides: headlineOverrides,
    ...restHeadlineProps
  } = (headline as React.ReactElement).props;
  const headlineSettings = {
    ...deepMerge(
      {},
      cardHeadlineDefaults,
      filterOutFalsyProperties(headlineOverrides),
    ),
  };

  return {
    headlineSettings,
    restHeadlineProps,
  };
};

const findAndDecorateCardHeadline = (
  children: React.ReactNode,
  theme: Theme,
  href?: string | BaseLinkProps,
) => {
  let hasHeadline = false;
  const decorateCardHeadline = (child: React.ReactNode) => {
    if (!child || !hasMatchingDisplayNameWith(child, Headline)) {
      return child;
    }

    hasHeadline = true;
    const {headlineSettings, restHeadlineProps} = getCardHeadlineSettings(
      child,
      theme,
      href,
    );

    const CardHeadline = (
      <Headline {...restHeadlineProps} overrides={headlineSettings} />
    );

    // if href is not set - return card headline with styles
    if (!href) return CardHeadline;

    const linkPropsWithHref = addHrefToLinkProps(
      {
        className: 'nk-card-link',
        overrides: headlineSettings,
      },
      href,
    );

    // if href is set - wrap card headline with styles within a link
    return (
      <StyledCardLink {...linkPropsWithHref}>{CardHeadline}</StyledCardLink>
    );
  };

  const decoratedChildren = deepMap(children, decorateCardHeadline);
  return {hasHeadline, decoratedChildren};
};

const TeaserDecorator = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string | BaseLinkProps;
}) => {
  const theme = useTheme() as Theme;

  // if hasHeadline = true - style card headline and wrap it within a link when href prop is set.
  const {hasHeadline, decoratedChildren} = findAndDecorateCardHeadline(
    children,
    theme,
    href,
  );

  if (hasHeadline) {
    return <>{decoratedChildren}</>;
  }

  // if hasHeadline = false and href is not set - return children
  if (!href) {
    return <>{children}</>;
  }

  // if hasHeadline = false and href is set - set link props and wrap the while card Teaser with a link
  const linkProps = addHrefToLinkProps(
    {
      className: 'nk-card-link',
      children,
    },
    href,
  );

  return <StyledCardLink {...linkProps} />;
};

export const Card: React.FC<CardProps> = ({
  media,
  mediaInteractive = false,
  layout = 'vertical',
  href,
  actions,
  children,
  overrides = {},
  className,
}) => {
  const hasHref = Boolean(href);
  const theme = useTheme();
  const [mediaRatio, teaserRatio] = getHorizontalRatio(
    layout,
    theme.componentDefaults.card,
    overrides,
  );

  return (
    <StyledCardContainer
      className={className}
      hasHref={hasHref}
      layout={layout}
      overrides={overrides}
    >
      {media && (
        <StyledCardContainerMedia
          layout={layout}
          mediaInteractive={mediaInteractive}
          hasHref={hasHref}
          overrides={overrides}
          flex={mediaRatio}
        >
          {renderMedia(media)}
        </StyledCardContainerMedia>
      )}

      <StyledCardContainerTeaserAndActions
        layout={layout}
        overrides={overrides}
        flex={teaserRatio}
      >
        {children && (
          <StyledCardContainerTeaser
            hasHref={hasHref}
            layout={layout}
            overrides={overrides}
          >
            <TeaserDecorator href={href}>{children}</TeaserDecorator>
          </StyledCardContainerTeaser>
        )}
        {actions && (
          <StyledCardContainerActions
            flow={Flow.HorizontalCenter}
            stackDistribution={StackDistribution.Start}
            hasHref={hasHref}
            wrap="nowrap"
            overrides={overrides}
          >
            {renderComponent(actions)}
          </StyledCardContainerActions>
        )}
      </StyledCardContainerTeaserAndActions>
    </StyledCardContainer>
  );
};

Card.displayName = 'Card';
