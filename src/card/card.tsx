import React from 'react';
import {CardProps} from './types';
import {Image, ImageProps} from '../image';
import {
  StyledCard,
  StyledCardMedia,
  StyledCardContentAndActions,
  StyledCardActionsContainer,
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
  overrides = {},
}) => (
  <StyledCard overrides={overrides}>
    <StyledCardMedia href={href}>
      {media && renderMedia(media, overrides.media)}
    </StyledCardMedia>
    <StyledCardContentAndActions>
      {actions && (
        <StyledCardActionsContainer
          flow={Flow.HorizontalCenter}
          stackDistribution={StackDistribution.Start}
          wrap="nowrap"
          overrides={overrides}
        >
          {renderActions(actions)}
        </StyledCardActionsContainer>
      )}
    </StyledCardContentAndActions>
  </StyledCard>
);

Card.displayName = 'Card';
