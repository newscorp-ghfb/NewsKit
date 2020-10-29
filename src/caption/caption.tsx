import React from 'react';
import {CaptionProps} from './types';
import {Block} from '../block';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';
import {TextBlock} from '../text-block';

export const Caption: React.FC<CaptionProps> = ({
  overrides,
  children,
  creditText,
}) => {
  const theme = useTheme();
  const captionSpaceStack =
    creditText && getToken({theme, overrides}, 'caption', '', 'spaceStack');

  const captionStylePreset = getToken(
    {theme, overrides},
    'caption',
    '',
    'stylePreset',
  );

  const captionTypographyPreset = getToken(
    {theme, overrides},
    'caption',
    '',
    'typographyPreset',
  );

  const creditTypographyPreset = getToken(
    {theme, overrides},
    'caption.credit',
    'credit',
    'typographyPreset',
  );
  const creditStylePreset = getToken(
    {theme, overrides},
    'caption.credit',
    'credit',
    'stylePreset',
  );

  const captionInset = getToken(
    {theme, overrides},
    'caption',
    '',
    'spaceInset',
  );
  return (
    <Block overrides={{spaceInset: captionInset}}>
      <Block overrides={{spaceStack: captionSpaceStack}}>
        <TextBlock
          overrides={{
            stylePreset: captionStylePreset,
            typographyPreset: captionTypographyPreset,
          }}
        >
          {children}
        </TextBlock>
      </Block>
      {creditText && (
        <TextBlock
          overrides={{
            stylePreset: creditStylePreset,
            typographyPreset: creditTypographyPreset,
          }}
        >
          {creditText}
        </TextBlock>
      )}
    </Block>
  );
};

Caption.displayName = 'Caption';
