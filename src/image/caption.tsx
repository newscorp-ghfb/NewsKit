import React from 'react';
import {Caption} from '../caption';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import {ImageProps} from './types';

export const ImageCaption = ({
  captionText,
  creditText,
  overrides,
}: {
  captionText: string;
  creditText?: string;
  overrides?: ImageProps['overrides'];
}) => {
  const theme = useTheme();
  const captionSpaceStack =
    creditText &&
    getToken({theme, overrides}, 'image', 'caption', 'spaceStack');

  const captionStylePreset = getToken(
    {theme, overrides},
    'image',
    'caption',
    'stylePreset',
  );

  const captionTypographyPreset = getToken(
    {theme, overrides},
    'image',
    'caption',
    'typographyPreset',
  );

  const creditStylePreset = getToken(
    {theme, overrides},
    'image.caption.credit',
    'caption.credit',
    'stylePreset',
  );

  const creditTypographyPreset = getToken(
    {theme, overrides},
    'image.caption.credit',
    'caption.credit',
    'typographyPreset',
  );

  const captionSpaceInset = getToken(
    {theme, overrides},
    'image',
    'caption',
    'spaceInset',
  );

  const captionOverrides = {
    stylePreset: captionStylePreset,
    typographyPreset: captionTypographyPreset,
    spaceInset: captionSpaceInset,
    spaceStack: captionSpaceStack,
    credit: {
      stylePreset: creditStylePreset,
      typographyPreset: creditTypographyPreset,
    },
  };

  return (
    <Caption creditText={creditText} overrides={captionOverrides}>
      {captionText}
    </Caption>
  );
};
