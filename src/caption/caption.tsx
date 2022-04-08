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
  // const captionSpaceStack = creditText && getToken({theme, overrides}, 'caption', '', 'spaceStack');

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

  const StyledBlock = styled(Block)`
  ${logicalProps('caption')};
  `

  // paddingBlock={captionInset} paddingInline={captionInset} marginBlockEnd
  return (
    <StyledBlock overrides={overrides}>
      <TextBlock
        stylePreset={captionStylePreset}
        typographyPreset={captionTypographyPreset}
        marginBlockEnd={captionSpaceStack}
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
    </StyledBlock>
  );
};

export const Caption = withOwnTheme(ThemelessCaption)({
  defaults,
});
ThemelessCaption.displayName = 'Caption';
