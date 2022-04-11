import React from 'react';
import {CaptionProps} from './types';
import {Block} from '../block';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';
import {TextBlock} from '../text-block';
import {withOwnTheme} from '../utils/with-own-theme';
import defaults from './defaults';

const ThemelessCaption: React.FC<CaptionProps> = ({
  overrides,
  children,
  creditText,
}) => {
  const theme = useTheme();
  const captionGap =
    creditText && getToken({theme, overrides}, 'caption', '', 'gap');

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

  const {
    typographyPreset,
    stylePreset,
    spaceStack,
    gap,
    spaceInset,
    credit,
    ...logicalMarginProps
  } = overrides!;

  return (
    <Block spaceInset={captionInset} {...logicalMarginProps}>
      <TextBlock
        stylePreset={captionStylePreset}
        typographyPreset={captionTypographyPreset}
        marginBlockEnd={captionGap}
      >
        {children}
      </TextBlock>
      {creditText && (
        <TextBlock
          stylePreset={creditStylePreset}
          typographyPreset={creditTypographyPreset}
        >
          {creditText}
        </TextBlock>
      )}
    </Block>
  );
};

export const Caption = withOwnTheme(ThemelessCaption)({
  defaults,
});
ThemelessCaption.displayName = 'Caption';
