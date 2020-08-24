import React from 'react';
import {CardProps} from './types';
import {Image, ImageProps} from '../image';
import {
  StyledCardContainer,
  StyledCardContainerMedia,
  StyledCardContainerTeaserAndActions,
  StyledCardContainerTeaser,
  StyledCardContainerActions,
} from './styled';
import {Flow, StackDistribution} from '../stack';

const renderMedia = (
  media: ImageProps | React.ComponentType,
  overrides = {},
) => {
  if (typeof media === 'function') {
    return React.createElement(media as React.ComponentType);
  }

  return (
    <Image
      loadingAspectRatio="3:2"
      {...(media as ImageProps)}
      overrides={overrides}
    />
  );
};

const renderActions = (Actions: React.ComponentType) => <Actions />;

export const Card: React.FC<CardProps> = ({
  media,
  href = '#',
  actions,
  children,
  overrides = {},
}) => (
  <StyledCardContainer overrides={overrides}>
    {media && (
      <StyledCardContainerMedia href={href} overrides={overrides}>
        {renderMedia(media, overrides.mediaContainer)}
      </StyledCardContainerMedia>
    )}

    <StyledCardContainerTeaserAndActions>
      <StyledCardContainerTeaser overrides={overrides}>
        {children}
      </StyledCardContainerTeaser>
      {actions && (
        <StyledCardContainerActions
          flow={Flow.HorizontalCenter}
          stackDistribution={StackDistribution.Start}
          wrap="nowrap"
          overrides={overrides}
        >
          {renderActions(actions)}
        </StyledCardContainerActions>
      )}
    </StyledCardContainerTeaserAndActions>
  </StyledCardContainer>
);

Card.displayName = 'Card';
