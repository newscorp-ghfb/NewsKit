import React from 'react';
import {
  styled,
  getTypePreset,
  getMarginPreset,
  getPaddingPreset,
} from '../utils/style';
import {Stack, Flow, StackProps} from '../stack';
import {useTheme, SizingKeys} from '../themes';

import {getStylePreset} from '../utils/style-preset';
import {MarginPresetKeys, PaddingPresetKeys} from '../themes/mappers/spacing';
import {getToken} from '../utils/get-token';

export interface ShareBarProps {
  label?: string;
  vertical?: boolean;
  overrides?: {
    stylePreset?: string;
    label?: {
      typePreset?: string;
      stylePreset?: string;
      marginPreset?: MarginPresetKeys;
      paddingPreset?: PaddingPresetKeys;
    };
    items?: {
      space: SizingKeys;
    };
  };
}

interface StyledShareBarProps extends StackProps {
  overrides?: {stylePreset?: string};
  orientation?: string;
}

type Label = {
  orientation: string;
};

const StyledLabel = styled.span<Label>`
  ${({orientation, ...props}) => {
    const defaultsPath = `shareBar.${orientation}.label`;
    const overridesPath = 'label';
    const typePreset = getTypePreset(defaultsPath, overridesPath, {
      withCrop: true,
    })(props);
    const stylePreset = getStylePreset(defaultsPath, overridesPath)(props);
    const paddingPreset = getPaddingPreset(defaultsPath, overridesPath)(props);
    const marginPreset = getMarginPreset(defaultsPath, overridesPath)(props);

    const outputCss = {
      typePreset,
      stylePreset,
      paddingPreset,
      marginPreset,
    };

    return Object.values(outputCss);
  }}
`;

const StyledShareBar = styled(Stack)<StyledShareBarProps>`
  ${({orientation}) => getStylePreset(`shareBar.${orientation}`)}
`;

export const ShareBar: React.FC<ShareBarProps> = ({
  label,
  vertical,
  children,
  overrides = {},
}) => {
  const theme = useTheme();
  const orientation = vertical ? 'vertical' : 'horizontal';
  const styledComponentsProps = {
    overrides,
    orientation,
  };
  const stackSpace = getToken(
    {theme, overrides},
    `shareBar.${orientation}.items`,
    'items',
    'space',
  );

  return (
    <StyledShareBar
      inline={vertical}
      flow={vertical ? Flow.VerticalCenter : Flow.HorizontalCenter}
      {...styledComponentsProps}
    >
      {label && <StyledLabel {...styledComponentsProps}>{label}</StyledLabel>}
      <Stack
        flow={vertical ? Flow.VerticalCenter : Flow.HorizontalCenter}
        space={stackSpace}
      >
        {children}
      </Stack>
    </StyledShareBar>
  );
};

ShareBar.displayName = 'ShareBar';
