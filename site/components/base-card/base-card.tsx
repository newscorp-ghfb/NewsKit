import React from 'react';
import {Card, CardInset, CardProps} from 'newskit';

// interface BaseCardProps extends CardProps{
//     title: string;
//     children: React.ReactNode;
// }

const BaseCardInteractive: React.FC<CardProps> = props => (
  <CardInset
    overrides={{
      stylePreset: 'cardBaseNonInteractive',
      teaserContainer: {
        spaceInset: 'space040',
      },
    }}
    {...props}
  />
);

const BaseCardNonInteractive: React.FC<CardProps> = props => (
  <Card
    overrides={{
      stylePreset: 'cardBaseNonInteractive',
      mediaContainer: {
        spaceStack: 'space040',
      },
    }}
    {...props}
  />
);

export const BaseCard: React.FC<CardProps> = ({href, ...rest}) =>
  href ? (
    <BaseCardInteractive {...rest} />
  ) : (
    <BaseCardNonInteractive {...rest} />
  );
