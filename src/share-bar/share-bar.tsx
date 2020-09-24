import React from 'react';
import {
  styled,
  getTypographyPreset,
  getSpacingInset,
  getSpacingInlineHorizontal,
  getSpacingInlineVertical,
  getStylePreset,
} from '../utils/style';
import {Stack, Flow, StackProps} from '../stack';
import {
  useTheme,
  SizingKeys,
  SpacePresetKeys,
  PaddingPresetKeys,
} from '../theme';

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
      spaceInset?: PaddingPresetKeys;
    };
    items?: {
      spaceInline: SizingKeys;
    };
  };
}

interface StyledShareBarProps extends StackProps {
  overrides?: {stylePreset?: string};
  orientation?: string;
}

type Label = {
  orientation?: string;
};

const StyledLabel = styled.span<Label>`
  ${getTypographyPreset(`shareBar.label`, 'label', {withCrop: true})};
  ${getStylePreset(`shareBar.label`, 'label')};
  ${getSpacingInset(`shareBar.label`, 'label')};
  ${({orientation}) =>
    (orientation === 'vertical'
      ? getSpacingInlineVertical
      : getSpacingInlineHorizontal)('shareBar.label', 'label')};
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
          'spaceInline',
        )}
      >
        {children}
      </Stack>
    </StyledShareBar>
  );
};

ShareBar.displayName = 'ShareBar';
