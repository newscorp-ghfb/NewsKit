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
import {
  renderIfReactComponent,
  hasMatchingDisplayNameWith,
} from '../utils/component';
import {deepMap} from '../utils/react-children-utilities';
import {Headline} from '../headline';
import {BaseLinkProps} from '../link';
import {BreakpointKeys, Theme, useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {deepMerge} from '../utils/deep-merge';
import {mergeBreakpointObject} from '../utils/merge-breakpoint-object';

// This key is needed to for the card headline (and to the link when it is wrapped)
// to avoid missing key prop warning from react.
// There is no need for the key to be automatically generated for now
// as we only support one Headline per card
// https://nidigitalsolutions.jira.com/browse/PPDSC-1527
const cardHeadlineKey = '1';

const renderMedia = (media: CardProps['media']) =>
  renderIfReactComponent(media) || (
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

const getCardHeadlineOverrides = (
  headline: React.ReactNode,
  theme: Theme,
  href?: string | BaseLinkProps,
) => {
  const cardHeadlineDefaults = href
    ? theme.componentDefaults.card.headline.interactive
    : theme.componentDefaults.card.headline.nonInteractive;

  const {
    overrides: userHeadlineOverrides,
    ...restHeadlineProps
  } = (headline as React.ReactElement).props;

  const headlineOverrides = {
    ...deepMerge(
      mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
      cardHeadlineDefaults,
      filterOutFalsyProperties(userHeadlineOverrides),
    ),
  };

  return {
    headlineOverrides,
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
    const {headlineOverrides, restHeadlineProps} = getCardHeadlineOverrides(
      child,
      theme,
      href,
    );

    const CardHeadline = (
      <Headline
        {...restHeadlineProps}
        overrides={headlineOverrides}
        key={cardHeadlineKey}
      />
    );

    // if href is not set - return card headline with styles
    if (!href) return CardHeadline;

    const linkPropsWithHref = addHrefToLinkProps(
      {
        className: 'nk-card-link',
        overrides: headlineOverrides,
      },
      href,
    );

    // if href is set - wrap card headline with styles within a link
    return (
      <StyledCardLink {...linkPropsWithHref} key={cardHeadlineKey}>
        {CardHeadline}
      </StyledCardLink>
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

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      media,
      mediaInteractive = false,
      layout = 'vertical',
      href,
      actions,
      children,
      overrides = {},
      ...restProps
    },
    ref,
  ) => {
    const hasHref = Boolean(href);
    return (
      <StyledCardContainer
        hasHref={hasHref}
        layout={layout}
        overrides={overrides}
        ref={ref}
        {...restProps}
      >
        {media && (
          <StyledCardContainerMedia
            layout={layout}
            mediaInteractive={mediaInteractive}
            hasHref={hasHref}
            overrides={overrides}
          >
            {renderMedia(media)}
          </StyledCardContainerMedia>
        )}

        <StyledCardContainerTeaserAndActions
          layout={layout}
          overrides={overrides}
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
              {renderIfReactComponent(actions)}
            </StyledCardContainerActions>
          )}
        </StyledCardContainerTeaserAndActions>
      </StyledCardContainer>
    );
  },
);

Card.displayName = 'Card';
