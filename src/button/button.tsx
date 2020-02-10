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
import {PaddingPresetKeys} from '../themes/mappers/spacing';
import {Stack} from '../stack/stack';
import {Flow, StackDistribution} from '../stack/types';
import {IconComponent} from '../icons';

const buttonStylePresetDefault = 'interactive010';
const spacing: SizingKeys = 'sizing020';

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
    minHeight: PaddingPresetKeys;
    wrapperSize: SizingKeys;
    borderRadiusSize: SizingKeys;
    typePreset: TypePresetKeys;
    paddingX: SizingKeys;
    paddingY: SizingKeys;
  }
> = {
  [ButtonSize.Large]: {
    minHeight: 'spaceInset040',
    wrapperSize: 'sizing050',
    borderRadiusSize: 'sizing080',
    typePreset: 'button030',
    paddingX: 'sizing040',
    paddingY: 'sizing050',
  },
  [ButtonSize.Medium]: {
    minHeight: 'spaceInset030',
    wrapperSize: 'sizing050',
    borderRadiusSize: 'sizing070',
    typePreset: 'button020',
    paddingX: 'sizing030',
    paddingY: 'sizing040',
  },
  [ButtonSize.Small]: {
    minHeight: 'spaceInset020',
    wrapperSize: 'sizing040',
    borderRadiusSize: 'sizing060',
    typePreset: 'button010',
    paddingX: 'sizing020',
    paddingY: 'sizing030',
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
      minHeight,
      borderRadiusSize,
      typePreset,
      paddingX,
      paddingY,
    } = buttonSizeStyleTokens[$size];

    const commonStyles = css`
      ${getButtonStylePreset(
        {$stylePreset, theme},
        {borderRadiusSize, withIconColor: !!icon},
      )}
      min-height: ${minHeight};
      ${getTypePresetFromTheme(typePreset)({theme})}
      padding: ${theme.sizing[paddingX]} ${theme.sizing[paddingY]};
    `;

    return {
      [ButtonSize.Small]: css`
        ${commonStyles} /* Extend touchpoint area */
      `,
      [ButtonSize.Medium]: commonStyles,
      [ButtonSize.Large]: commonStyles,
    }[$size];
  }}

  :disabled {
    cursor: not-allowed;
  }
`;

const InnerContainer = styled.div<{icon: IconComponent}>`
  ${({icon, theme}) => ({
    marginTop: icon ? `-${theme.sizing[spacing]}` : 0,
  })}
`;

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = props => {
  const {children, icon: Icon, ...restOfProps} = props;

  return (
    <ButtonElement type="button" {...restOfProps} icon={Icon}>
      {Icon && children ? (
        <InnerContainer icon={Icon}>
          <Stack
            flow={Flow.HorizontalCenter}
            space={spacing}
            stackDistribution={StackDistribution.Center}
          >
            <Icon />
            {children}
          </Stack>
        </InnerContainer>
      ) : (
        <div>
          <Stack
            flow={Flow.HorizontalCenter}
            stackDistribution={StackDistribution.Center}
          >
            {(Icon && <Icon />) || children}
          </Stack>
        </div>
      )}
    </ButtonElement>
  );
};
