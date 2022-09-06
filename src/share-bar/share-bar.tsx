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
import {Stack, StackProps} from '../stack';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';

/**
 * @deprecated ShareBarProps is deprecated and will be removed in the next major release.
 */
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
      flow={vertical ? 'vertical-center' : 'horizontal-center'}
      {...rest}
      {...styledComponentsProps}
    >
      {label && <StyledLabel {...styledComponentsProps}>{label}</StyledLabel>}
      <Stack
        flow={vertical ? 'vertical-center' : 'horizontal-center'}
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

/**
 * @deprecated ShareBar is deprecated and will be removed in the next major release.
 */
export const ShareBar = withOwnTheme(ThemelessShareBar)({
  defaults,
});
