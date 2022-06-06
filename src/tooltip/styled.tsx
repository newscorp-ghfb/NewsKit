import {Placement, Strategy} from '@floating-ui/react-dom-interactions';
import {TooltipProps} from './types';
import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  getTypographyPreset,
  styled,
} from '../utils/style';
import {logicalProps} from '../utils/logical-properties';
import {TextBlock} from '../text-block';
import {calculateInset} from './utils';

export const StyledTooltip = styled.div<
  {
    strategy: Strategy;
    placement: Placement;
    x?: number;
    y?: number;
    showPointer: boolean;
  } & Pick<TooltipProps, 'overrides'>
>`
  pointer-events: none;
  ${getResponsiveSpace('zIndex', 'tooltip', '', 'zIndex')};
  ${getResponsiveSize('maxWidth', 'tooltip', '', 'maxWidth')};
  ${getResponsiveSize('minWidth', 'tooltip', '', 'minWidth')};
  ${({x, y, strategy, placement, showPointer}) =>
    getResponsiveSpace(
      distance => {
        const offset = showPointer ? distance : undefined;
        return {
          position: strategy,
          left: calculateInset(x, 'x', offset, placement),
          top: calculateInset(y, 'y', offset, placement),
        };
      },
      'tooltip',
      'distance',
      'distance',
    )}
`;

export const StyledPanel = styled(TextBlock)<Pick<TooltipProps, 'overrides'>>`
  ${getStylePreset('tooltip', '')};
  ${getStylePreset('tooltip.panel', 'panel')};
  ${getTypographyPreset('tooltip.panel', 'panel')};
  ${logicalProps('tooltip.panel', 'panel')}
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
      `tooltip.pointer`,
      'pointer',
      'size',
    )}
`;
