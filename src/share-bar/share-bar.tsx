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
  ${({orientation}) =>
    getTypePreset(`shareBar.${orientation}.label`, 'label', {
      withCrop: true,
    })}

  ${({orientation}) =>
    getStylePreset(`shareBar.${orientation}.label`, 'label')};
  ${({orientation}) =>
    getPaddingPreset(`shareBar.${orientation}.label`, 'label')};
  ${({orientation}) =>
    getMarginPreset(`shareBar.${orientation}.label`, 'label')};
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

  return (
    <StyledShareBar
      inline={vertical}
      flow={vertical ? Flow.VerticalCenter : Flow.HorizontalCenter}
      {...styledComponentsProps}
    >
      {label && <StyledLabel {...styledComponentsProps}>{label}</StyledLabel>}
      <Stack
        flow={vertical ? Flow.VerticalCenter : Flow.HorizontalCenter}
        space={getToken(
          {theme, overrides},
          `shareBar.${orientation}.items`,
          'items',
          'space',
        )}
      >
        {children}
      </Stack>
    </StyledShareBar>
  );
};

ShareBar.displayName = 'ShareBar';
