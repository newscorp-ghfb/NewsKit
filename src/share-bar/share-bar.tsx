import React from 'react';

import {
  styled,
  getSizingFromTheme,
  getTypePresetFromTheme,
} from '../utils/style';
import {SizingKeys} from '../themes/newskit-light/spacing';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {Stack, Flow} from '../stack';
import {MarginPresetKeys} from '../themes/mappers/spacing';

export interface ShareBarProps {
  label?: string;
  vertical?: boolean;
  labelStylePreset?: string;
  labelSpacePreset?: MarginPresetKeys;
  labelTypePreset?: string;
  itemSpacePreset?: SizingKeys;
}

const labelStylePresetDefault = 'shareBarLabel';
const labelTypePresetDefault = 'shareBarLabel';

const StyledHeader = styled.span<
  Omit<ShareBarProps, 'itemSpacePreset' | 'vertical'>
>`
  ${getStylePresetFromTheme(labelStylePresetDefault, 'labelStylePreset')};
  ${getTypePresetFromTheme(labelTypePresetDefault, 'labelTypePreset')};
  margin: ${getSizingFromTheme(undefined, 'labelSpacePreset')};
`;

export const ShareBar: React.FC<ShareBarProps> = ({
  label,
  vertical,
  labelSpacePreset = vertical ? 'spaceStack040' : 'spaceInline040',
  itemSpacePreset = 'sizing020',
  children,
  ...props
}) => {
  const labelProps: Omit<ShareBarProps, 'itemSpacePreset' | 'vertical'> = {
    labelSpacePreset,
    ...props,
  };

  return (
    <Stack
      inline={vertical}
      flow={vertical ? Flow.VerticalCenter : Flow.HorizontalCenter}
    >
      {label && <StyledHeader {...labelProps}>{label}</StyledHeader>}
      <Stack
        flow={vertical ? Flow.VerticalCenter : Flow.HorizontalCenter}
        space={itemSpacePreset}
      >
        {children}
      </Stack>
    </Stack>
  );
};

ShareBar.displayName = 'ShareBar';
