import {Placement, Strategy} from '@floating-ui/react-dom-interactions';
import {BaseFloatingElementProps} from './types';
import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  getTransitionPreset,
  getTypographyPreset,
  styled,
} from '../utils/style';
import {logicalPaddingProps} from '../utils/logical-properties';
import {TextBlock} from '../text-block';

export const StyledFloatingElement = styled.div<
  {
    strategy: Strategy;
    placement: Placement;
    $x?: number | null;
    $y?: number | null;
    hidePointer: boolean;
    baseTransitionClassname: string;
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
  ${({path, baseTransitionClassname}) =>
    getTransitionPreset(`${path}`, '', baseTransitionClassname)};
`;

export const StyledPanel = styled(TextBlock)<
  Pick<BaseFloatingElementProps, 'overrides' | 'path'>
>`
  ${({path}) => getStylePreset(`${path}.panel`, 'panel')};
  ${({path}) => getTypographyPreset(`${path}.panel`, 'panel')};
  ${({path}) => logicalPaddingProps(`${path}.panel`, 'panel')}
  overflow: hidden;
`;

export const StyledPointer = styled.div<
  {
    placement: Placement;
    $x?: number;
    $y?: number;
  } & Pick<BaseFloatingElementProps, 'overrides' | 'path'>
>`
  z-index: -1; // This makes sure that the pointer doesn't sit over panel contents.
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
