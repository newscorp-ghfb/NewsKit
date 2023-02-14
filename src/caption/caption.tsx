import React from 'react';
import {CaptionProps} from './types';
import {getToken} from '../utils/get-token';
import {Theme, useTheme} from '../theme';
import {TextBlock} from '../text-block';
import {withOwnTheme} from '../utils/with-own-theme';
import defaults from './defaults';
import {extractLogicalPropsFromOverrides} from '../utils/logical-properties';
import {GridLayout} from '../grid-layout';

const getComponentProps = (
  defaultsPath: string,
  overridesPath: string,
  themeProps: {overrides: CaptionProps['overrides']; theme: Theme},
): {stylePreset: string; typographyPreset: string} => {
  const presets = ['stylePreset', 'typographyPreset'];
  return presets.reduce(
    (props, presetKey) => {
      // eslint-disable-next-line no-param-reassign
      props[presetKey as 'stylePreset' | 'typographyPreset'] = getToken(
        themeProps,
        defaultsPath,
        overridesPath,
        presetKey,
      );
      return props;
    },
    {stylePreset: '', typographyPreset: ''},
  );
};

const ThemelessCaption = React.forwardRef<HTMLDivElement, CaptionProps>(
  ({overrides, children, creditText, ...rest}, ref) => {
    const theme = useTheme();

    const themeProps = {theme, overrides};

    const captionGap = getToken(themeProps, 'caption', '', 'spaceStack');

    const captionProps = getComponentProps('caption', '', themeProps);
    const creditProps = getComponentProps(
      'caption.credit',
      'credit',
      themeProps,
    );

    const logicalProps = extractLogicalPropsFromOverrides(overrides);

    return (
      <GridLayout rowGap={captionGap} ref={ref} {...logicalProps} {...rest}>
        <TextBlock {...captionProps}>{children}</TextBlock>
        {creditText && <TextBlock {...creditProps}>{creditText}</TextBlock>}
      </GridLayout>
    );
  },
);

// Caption will be rebuilt in https://nidigitalsolutions.jira.com/browse/PPDSC-2091
export const Caption = withOwnTheme(ThemelessCaption)({
  defaults,
});
ThemelessCaption.displayName = 'Caption';
