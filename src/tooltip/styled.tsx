import {Placement} from '@floating-ui/react-dom-interactions';
import {TooltipProps} from './types';
import {
  getTypographyPreset,
  getStylePreset,
  styled,
  getResponsiveSpace,
  getResponsiveSize,
} from '../utils/style';
import {logicalProps} from '../utils/logical-properties';
import {TextBlock} from '../text-block';

export const StyledTooltip = styled.div<Pick<TooltipProps, 'overrides'>>`
  pointer-events: none;
  ${getResponsiveSpace('zIndex', 'tooltip', '', 'zIndex')};
  ${getResponsiveSize('maxWidth', 'tooltip', '', 'maxWidth')};
  ${getResponsiveSize('minWidth', 'tooltip', '', 'minWidth')};
`;

export const StyledPanel = styled(TextBlock)<Pick<TooltipProps, 'overrides'>>`
  ${getStylePreset('tooltip', '')};
  ${getStylePreset('tooltipPanel', 'panel')};
  ${getTypographyPreset('tooltipPanel', 'panel')};
  ${logicalProps('tooltipPanel', 'panel')}
`;

export const StyledPointer = styled.div<
  {
    placement: Placement;
    x?: number;
    y?: number;
  } & Pick<TooltipProps, 'overrides'>
>`
  position: absolute;
  transform: rotate(45deg);
  ${getStylePreset('tooltip', '')};
  ${({placement, x, y}) =>
    getResponsiveSize(
      size => {
        const staticSide: string = {
          top: 'bottom',
          right: 'left',
          bottom: 'top',
          left: 'right',
        }[placement.split('-')[0]]!;
        return {
          width: size,
          height: size,
          left: x != null ? `${x}px` : '',
          top: y != null ? `${y}px` : '',
          right: '',
          bottom: '',
          [staticSide]: `calc(-${size} / 2)`,
        };
      },
      `tooltipPointer`,
      'pointer',
      'size',
    )}
`;
