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
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';
import {LogicalProps} from '../utils/logical-properties';

export interface ShareBarProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
  vertical?: boolean;
  overrides?: {
    stylePreset?: MQ<string>;
    label?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
      spaceInline?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
      spaceInset?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
    };
    items?: {
      spaceInline?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
    };
  } & LogicalProps;
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

const ThemelessShareBar: React.FC<ShareBarProps> = ({
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
      role="region"
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

ThemelessShareBar.displayName = 'ShareBar';

export const ShareBar = withOwnTheme(ThemelessShareBar)({
  defaults,
});
