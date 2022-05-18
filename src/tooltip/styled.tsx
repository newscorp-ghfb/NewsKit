import {TooltipProps} from './types';
import {
  getTypographyPreset,
  getStylePreset,
  styled,
  getResponsiveSpace,
  getResponsiveSize,
} from '../utils/style';
import {logicalProps} from '../utils/logical-properties';

export const StyledTooltipPanel = styled.div<Pick<TooltipProps, 'overrides'>>`
  ${getStylePreset('tooltip.panel', 'panel')};
  ${getTypographyPreset('tooltip.panel', 'panel')};
  ${getResponsiveSpace('padding', 'tooltip.panel', 'panel', 'spaceInset')};
  ${logicalProps('tooltip.panel', 'panel')}
`;

export const StyledTooltip = styled.div<Pick<TooltipProps, 'overrides'>>`
  pointer-events: none;
  ${getResponsiveSpace('zIndex', 'tooltip', '', 'zIndex')};
  ${getResponsiveSize('maxWidth', 'tooltip', '', 'maxWidth')};
  ${getResponsiveSize('minWidth', 'tooltip', '', 'minWidth')};
`;
