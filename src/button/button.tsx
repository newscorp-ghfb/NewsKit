import React from 'react';
import {
  css,
  styled,
  getAnimationFromTheme,
  getTypePresetFromTheme,
} from '../utils/style';
import {ButtonProps, ButtonSize} from './types';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {SizingKeys, TypePresetKeys, Theme} from '../themes';

const buttonStylePresetDefault = 'interactive010';

const getButtonStylePreset = (
  props: ButtonProps & {theme: Theme},
  {
    borderRadiusSize,
    withIconColor,
  }: {borderRadiusSize: SizingKeys; withIconColor?: boolean},
) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getStylePresetFromTheme(buttonStylePresetDefault, '$stylePreset' as any, {
    borderRadiusSize,
    omitStyles: withIconColor ? [] : ['iconColor'],
  })(props);

const buttonSizeStyleTokens: Record<
  ButtonSize,
  {
    height: SizingKeys;
    width: SizingKeys;
    borderRadiusSize: SizingKeys;
    typePreset: TypePresetKeys;
    paddingY: SizingKeys;
  }
> = {
  [ButtonSize.Large]: {
    height: 'sizing080',
    width: 'sizing080',
    borderRadiusSize: 'sizing080',
    typePreset: 'button030',
    paddingY: 'sizing050',
  },
  [ButtonSize.Medium]: {
    height: 'sizing070',
    width: 'sizing070',
    borderRadiusSize: 'sizing070',
    typePreset: 'button020',
    paddingY: 'sizing040',
  },
  [ButtonSize.Small]: {
    height: 'sizing060',
    width: 'sizing060',
    borderRadiusSize: 'sizing060',
    typePreset: 'button010',
    paddingY: 'sizing020',
  },
};

const ButtonElement = styled.button<ButtonProps>`
  display: inline-block;
  position: relative;
  width: auto;
  border: none;
  outline: none;
  appearance: none;
  overflow: hidden;
  transition-property: background-color;
  transition-duration: ${getAnimationFromTheme('animationDuration020')};
  transition-timing-function: ${getAnimationFromTheme('animationEaseOut')};
  cursor: pointer;

  ${({$size = ButtonSize.Small, icon, theme, $stylePreset}) => {
    const {
      height,
      width,
      borderRadiusSize,
      typePreset,
      paddingY,
    } = buttonSizeStyleTokens[$size];

    const commonStyles = css`
      ${getButtonStylePreset({$stylePreset, theme}, {borderRadiusSize})}
      height: ${theme.sizing[height]};
      ${icon && `width: ${theme.sizing[width]};`}
      ${getTypePresetFromTheme(typePreset)({theme})}
      padding: 0 ${theme.sizing[paddingY]};
    `;

    return {
      [ButtonSize.Small]: css`
        ${commonStyles}
        /* Extend touchpoint area */
        margin: ${theme.sizing.sizing020} 0;
        ::before {
          content: '';
          position: absolute;
          left: 0;
          top: -${theme.sizing.sizing020};
          width: 100%;
          height: ${theme.sizing.sizing080};
        }
      `,
      [ButtonSize.Medium]: commonStyles,
      [ButtonSize.Large]: commonStyles,
    }[$size];
  }}

  :disabled {
    cursor: not-allowed;
  }

  ${({icon, ...props}) =>
    icon &&
    css`
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      ${getButtonStylePreset(
        {...props},
        {borderRadiusSize: 'sizing120', withIconColor: true},
      )}
    `}
`;

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = props => {
  const {children, icon: Icon, ...restOfProps} = props;

  if (Icon && children) {
    throw new Error('Button with children and Icon is not implemented');
  }

  return (
    <ButtonElement type="button" {...restOfProps} icon={Icon}>
      {(Icon && <Icon />) || children}
    </ButtonElement>
  );
};
