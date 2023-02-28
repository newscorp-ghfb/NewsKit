import {LegendProps, FieldsetProps} from './types';

import {
  getTypographyPreset,
  getStylePreset,
  getResponsiveSpacingStackHorizontal,
  styled,
} from '../utils/style';
import {logicalProps} from '../utils/logical-properties';

const legendStyleReset = `
  display: table;
  margin: 0;
  padding: 0;
`;

const fieldsetStyleReset = `
  border: 0;
  padding: 0.01em 0 0 0;
  margin: 0;
  min-width: 0;
  min-inline-size: 0;
`;

export const StyledLegend = styled.legend<LegendProps & {noCrop: boolean}>`
  ${legendStyleReset}
  padding: 1px 0;

  ${({size}) => getStylePreset(`legend.${size}`, '')}
  ${({size, noCrop}) =>
    getTypographyPreset(`legend.${size}`, '', {
      withCrop: !noCrop,
    })}
    ${({size}) => getResponsiveSpacingStackHorizontal(`legend.${size}`, '')};
`;

export const StyledFieldset = styled.fieldset<FieldsetProps>`
  ${fieldsetStyleReset}

  ${getStylePreset('fieldset', '')};
  ${logicalProps('fieldset')}
`;
