import {TooltipProps} from './types';
import {
  getTypographyPreset,
  getStylePreset,
  styled,
  getResponsiveSpace,
  getResponsiveSize,
} from '../utils/style';
import {logicalProps} from '../utils/logical-properties';

export const StyledTooltip = styled.div<Pick<TooltipProps, 'overrides'>>`
  pointer-events: none;
  ${getResponsiveSpace('zIndex', 'tooltip', '', 'zIndex')};
  ${getResponsiveSize('maxWidth', 'tooltip', '', 'maxWidth')};
  ${getResponsiveSize('minWidth', 'tooltip', '', 'minWidth')};
  ${getStylePreset('tooltip', '')};
  ${getTypographyPreset('tooltip', '')};
  ${logicalProps('tooltip', '')}
`;
