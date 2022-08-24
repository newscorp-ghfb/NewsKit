import React from 'react';
import {CaptionProps} from './types';
import {Block} from '../block';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';
import {TextBlock} from '../text-block';
import {withOwnTheme} from '../utils/with-own-theme';
import defaults from './defaults';
import {extractLogicalPropsFromOverrides} from '../utils/logical-properties';

const ThemelessCaption = React.forwardRef<HTMLDivElement, CaptionProps>(
  ({overrides, children, creditText, ...rest}, ref) => {
    const theme = useTheme();
    const captionGap =
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

    const logicalProps = extractLogicalPropsFromOverrides(overrides);

    return (
      <Block spaceInset={captionInset} ref={ref} {...logicalProps} {...rest}>
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
  },
);

// Caption will be rebuilt in https://nidigitalsolutions.jira.com/browse/PPDSC-2091
export const Caption = withOwnTheme(ThemelessCaption)({
  defaults,
});
ThemelessCaption.displayName = 'Caption';
