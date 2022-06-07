import {styled, MQ, getStylePreset} from '../../utils/style';
import defaults from './defaults';
import {withOwnTheme} from '../../utils/with-own-theme';
import {
  LogicalProps,
  getLogicalPropsAndTypographyPreset,
} from '../../utils/logical-properties';

export type HeadingOverrides = {
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
  } & LogicalProps;
};

const ThemelessHeading1 = styled.h1<HeadingOverrides>`
  margin: 0;
  ${getStylePreset('headlineH1', '')}
  ${getLogicalPropsAndTypographyPreset('headlineH1')}
`;
ThemelessHeading1.displayName = 'Heading1';
export const Heading1 = withOwnTheme(ThemelessHeading1)({
  defaults,
});
export const H1 = Heading1;

const ThemelessHeading2 = styled.h2<HeadingOverrides>`
  margin: 0;
  ${getStylePreset('headlineH2', '')}
  ${getLogicalPropsAndTypographyPreset('headlineH2')}
`;
ThemelessHeading2.displayName = 'Heading2';
export const Heading2 = withOwnTheme(ThemelessHeading2)({
  defaults,
});
export const H2 = Heading2;

const ThemelessHeading3 = styled.h3<HeadingOverrides>`
  margin: 0;
  ${getStylePreset('headlineH3', '')}
  ${getLogicalPropsAndTypographyPreset('headlineH3')}
`;
ThemelessHeading3.displayName = 'Heading3';
export const Heading3 = withOwnTheme(ThemelessHeading3)({
  defaults,
});
export const H3 = Heading3;

const ThemelessHeading4 = styled.h4<HeadingOverrides>`
  margin: 0;
  ${getStylePreset('headlineH4', '')}
  ${getLogicalPropsAndTypographyPreset('headlineH4')}
`;
ThemelessHeading4.displayName = 'Heading4';
export const Heading4 = withOwnTheme(ThemelessHeading4)({
  defaults,
});
export const H4 = Heading4;

const ThemelessHeading5 = styled.h5<HeadingOverrides>`
  margin: 0;
  ${getStylePreset('headlineH5', '')}
  ${getLogicalPropsAndTypographyPreset('headlineH5')}
`;
ThemelessHeading5.displayName = 'Heading5';
export const Heading5 = withOwnTheme(ThemelessHeading5)({
  defaults,
});
export const H5 = Heading5;

const ThemelessHeading6 = styled.h6<HeadingOverrides>`
  margin: 0;
  ${getStylePreset('headlineH6', '')}
  ${getLogicalPropsAndTypographyPreset('headlineH6')}
`;
ThemelessHeading6.displayName = 'Heading6';
export const Heading6 = withOwnTheme(ThemelessHeading6)({
  defaults,
});
export const H6 = Heading6;
