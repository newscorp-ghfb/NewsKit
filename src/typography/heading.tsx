import {styled, getTypographyPreset, MQ} from '../utils/style';
import {getStylePreset} from '../utils/style-preset';
import {StylePresetKeys, TypographyPresetKeys} from '../theme';

export type HeadingOverrides = {
  overrides?: {
    stylePreset?: MQ<StylePresetKeys>;
    typographyPreset?: MQ<TypographyPresetKeys>;
  };
};

export const Heading1 = styled.h1<HeadingOverrides>`
  margin: 0;
  padding: 1px 0;
  ${getTypographyPreset('headlineH1', '', {withCrop: true})}
  ${getStylePreset('headlineH1', '')}
`;
Heading1.displayName = 'Heading1';
export const H1 = Heading1;

export const Heading2 = styled.h2<HeadingOverrides>`
  margin: 0;
  padding: 1px 0;
  ${getTypographyPreset('headlineH2', '', {withCrop: true})}
  ${getStylePreset('headlineH2', '')}
`;
Heading2.displayName = 'Heading2';
export const H2 = Heading2;

export const Heading3 = styled.h3<HeadingOverrides>`
  margin: 0;
  padding: 1px 0;
  ${getTypographyPreset('headlineH3', '', {withCrop: true})}
  ${getStylePreset('headlineH3', '')}
`;
Heading3.displayName = 'Heading3';
export const H3 = Heading3;

export const Heading4 = styled.h4<HeadingOverrides>`
  margin: 0;
  padding: 1px 0;
  ${getTypographyPreset('headlineH4', '', {withCrop: true})}
  ${getStylePreset('headlineH4', '')}
`;
Heading4.displayName = 'Heading4';
export const H4 = Heading4;

export const Heading5 = styled.h5<HeadingOverrides>`
  margin: 0;
  padding: 1px 0;
  ${getTypographyPreset('headlineH5', '', {withCrop: true})}
  ${getStylePreset('headlineH5', '')}
`;
Heading5.displayName = 'Heading5';
export const H5 = Heading5;

export const Heading6 = styled.h6<HeadingOverrides>`
  margin: 0;
  padding: 1px 0;
  ${getTypographyPreset('headlineH6', '', {withCrop: true})}
  ${getStylePreset('headlineH6', '')}
`;
Heading6.displayName = 'Heading6';
export const H6 = Heading6;
