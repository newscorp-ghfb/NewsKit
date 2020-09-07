import React from 'react';
import {
  styled,
  getTypographyPreset,
  getPaddingPreset,
  getSpacingInline,
  getSpacingStack,
} from '../utils/style';
import {Stack, Flow, StackProps} from '../stack';
import {
  useTheme,
  SizingKeys,
  SpacePresetKeys,
  PaddingPresetKeys,
} from '../theme';
import {getStylePreset} from '../utils/style-preset';
import {getToken} from '../utils/get-token';

export interface ShareBarProps {
  label?: string;
  vertical?: boolean;
  overrides?: {
    stylePreset?: string;
    label?: {
      typographyPreset?: string;
      stylePreset?: string;
      spaceInline?: SpacePresetKeys;
      spaceStack?: SpacePresetKeys;
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
  ${getTypographyPreset(`shareBar.label`, 'label', {withCrop: true})};
  ${getStylePreset(`shareBar.label`, 'label')};
  ${getPaddingPreset(`shareBar.label`, 'label')};
  ${({orientation}) =>
    orientation === 'vertical'
      ? getSpacingStack('shareBar.label', 'label')
      : getSpacingInline('shareBar.label', 'label')};
`;

const StyledShareBar = styled(Stack)<StyledShareBarProps>`
  ${getStylePreset(`shareBar`)}
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
        spaceInline={getToken(
          {theme, overrides},
          `shareBar.items`,
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
