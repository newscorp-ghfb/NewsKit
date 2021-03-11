import React from 'react';
import {Card, CardInset, CardProps} from 'newskit';

// interface BaseCardProps extends CardProps{
//     title: string;
//     children: React.ReactNode;
// }

const BaseCardInteractive: React.FC<CardProps> = ({overrides, ...rest}) => {
    console.log(rest,'<--- props')
    return(
  <CardInset
    overrides={overrides || {
      stylePreset: 'baseCardInteractive',
      teaserContainer: {
        spaceInset: 'space050',
      },
    }}
    {...rest}
  />
)};

const BaseCardNonInteractive: React.FC<CardProps> = ({overrides,layout,  ...rest}) => (
  <Card
    overrides={overrides || {
      stylePreset: 'baseCardNonInteractive',
      mediaContainer: {
        spaceStack: layout === 'horizontal' ? 'space050' : 'space040'
    }}}
    layout={layout}
    {...rest}
  />
);

export const BaseCard: React.FC<CardProps> = ({href, ...rest}) =>
  href ? (
    <BaseCardInteractive href={href} {...rest} />
  ) : (
    <BaseCardNonInteractive {...rest} />
  );
