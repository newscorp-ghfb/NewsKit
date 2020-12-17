import React from 'react';
import {
  styled,
  getTypographyPreset,
  getSpacingInset,
  getSpacingInlineHorizontal,
  getSpacingInlineVertical,
  getStylePreset,
  MQ,
} from '../utils/style';
import {Stack, Flow, StackProps} from '../stack';
import {useTheme} from '../theme';

import {getToken} from '../utils/get-token';

export interface ShareBarProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
  vertical?: boolean;
  overrides?: {
    stylePreset?: MQ<string>;
    label?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
      spaceInline?: MQ<string>;
      spaceInset?: MQ<string>;
    };
    items?: {
      spaceInline?: MQ<string>;
    };
  };
}

interface StyledShareBarContainerProps extends StackProps {
  overrides?: {stylePreset?: MQ<string>};
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

const StyledShareBarContainer = styled(Stack)<StyledShareBarContainerProps>`
  ${getStylePreset(`shareBar`)}
`;

export const ShareBar: React.FC<ShareBarProps> = ({
  label,
  vertical,
  children,
  overrides = {},
  ...rest
}) => {
  const theme = useTheme();
  const orientation = vertical ? 'vertical' : 'horizontal';
  const styledComponentsProps = {
    overrides,
    orientation,
  };

  return (
    <StyledShareBarContainer
      inline={vertical}
      flow={vertical ? Flow.VerticalCenter : Flow.HorizontalCenter}
      {...rest}
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
    </StyledShareBarContainer>
  );
};

ShareBar.displayName = 'ShareBar';
