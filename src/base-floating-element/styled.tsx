import {Placement, Strategy} from '@floating-ui/react-dom-interactions';
import {BaseFloatingElementProps} from './types';
import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  getTypographyPreset,
  styled,
} from '../utils/style';
import {logicalProps} from '../utils/logical-properties';
import {TextBlock} from '../text-block';

export const StyledFloatingElement = styled.div<
  {
    strategy: Strategy;
    placement: Placement;
    $x?: number;
    $y?: number;
    hidePointer: boolean;
  } & Pick<BaseFloatingElementProps, 'overrides' | 'path'>
>`
  ${({path}) => getStylePreset(`${path}`, '')};
  ${({path}) => getResponsiveSpace('zIndex', path, '', 'zIndex')};
  ${({path}) => getResponsiveSize('maxWidth', path, '', 'maxWidth')};
  ${({path}) => getResponsiveSize('minWidth', path, '', 'minWidth')};
  ${({$x, $y, strategy}) => ({
    position: strategy,
    left: $x != null ? `${$x}px` : '',
    top: $y != null ? `${$y}px` : '',
  })}
`;

export const StyledPanel = styled(TextBlock)<
  Pick<BaseFloatingElementProps, 'overrides' | 'path'>
>`
  ${({path}) => getStylePreset(`${path}.panel`, 'panel')};
  ${({path}) => getTypographyPreset(`${path}.panel`, 'panel')};
  ${({path}) => logicalProps(`${path}.panel`, 'panel')}
`;

export const StyledPointer = styled.div<
  {
    placement: Placement;
    $x?: number;
    $y?: number;
  } & Pick<BaseFloatingElementProps, 'overrides' | 'path'>
>`
  position: absolute;
  transform: rotate(45deg);
  box-sizing: border-box;
  ${({path}) => getStylePreset(`${path}.pointer`, 'pointer')};
  ${({placement, $x, $y, path}) =>
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
          left: $x != null ? `${$x}px` : '',
          top: $y != null ? `${$y}px` : '',
          right: '',
          bottom: '',
          [staticSide]: `calc(-${size} / 2)`,
        };
      },
      `${path}.pointer`,
      'pointer',
      'size',
    )}
`;
