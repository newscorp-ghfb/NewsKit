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

const renderMedia = (media: CardProps['media'], overrides = {}) =>
  renderComponent(media) || (
    <Image
      loadingAspectRatio="3:2"
      {...(media as ImageProps)}
      overrides={overrides}
    />
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

const recursivelyWrapHeadlineInLink = (
  href: string | BaseLinkProps,
  children: React.ReactNode,
) => {
  let hasHeadline = false;
  const wrapHeadlineInLink = (child: React.ReactNode) => {
    if (!child || !hasMatchingDisplayNameWith(child, Headline)) {
      return child;
    }

    hasHeadline = true;

    const {overrides: headlineOverrides} = (child as React.ReactElement).props;

    const linkPropsWithHref = addHrefToLinkProps(
      {
        className: 'nk-card-link',
        overrides: headlineOverrides,
        children: child,
      },
      href,
    );

    return <StyledCardLink {...linkPropsWithHref} />;
  };
  const wrappedChildren = deepMap(children, wrapHeadlineInLink);
  return {hasHeadline, wrappedChildren};
};

const TeaserDecorator = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string | BaseLinkProps;
}) => {
  if (!href) {
    return <>{children}</>;
  }
  const {hasHeadline, wrappedChildren} = recursivelyWrapHeadlineInLink(
    href,
    children,
  );

  if (hasHeadline) {
    return <>{wrappedChildren}</>;
  }

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
  href,
  actions,
  children,
  overrides = {},
}) => (
  <StyledCardContainer overrides={overrides}>
    {media && (
      <StyledCardContainerMedia
        mediaInteractive={mediaInteractive}
        overrides={overrides}
      >
        {renderMedia(media, overrides.mediaContainer)}
      </StyledCardContainerMedia>
    )}

    <StyledCardContainerTeaserAndActions>
      {children && (
        <StyledCardContainerTeaser overrides={overrides}>
          <TeaserDecorator href={href}>{children}</TeaserDecorator>
        </StyledCardContainerTeaser>
      )}
      {actions && (
        <StyledCardContainerActions
          flow={Flow.HorizontalCenter}
          stackDistribution={StackDistribution.Start}
          wrap="nowrap"
          overrides={overrides}
        >
          {renderComponent(actions)}
        </StyledCardContainerActions>
      )}
    </StyledCardContainerTeaserAndActions>
  </StyledCardContainer>
);

Card.displayName = 'Card';
