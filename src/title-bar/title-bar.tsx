import React from 'react';
import {TitleBarProps} from './types';
import {Headline} from '../headline';
import {Hidden} from '../grid/visibility';
import {useTheme} from '../theme';
import {HeadlineOverrides} from '../headline/types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledBlock, StyledStackContainer} from './styled';

const ThemelessTitleBar = React.forwardRef<HTMLDivElement, TitleBarProps>(
  (props, ref) => {
    const {
      children,
      hideActionItemOn = {xs: true},
      headingAs = 'h3',
      actionItem: ActionItem,
      overrides = {},
      ...rest
    } = props;

    const theme = useTheme();

    const hasActions = !!ActionItem;

    const addTitleBarHeadingOverrides = () => {
      const headingOverrides: Omit<HeadlineOverrides, 'kicker'> = {};
      if (!overrides.heading) {
        return headingOverrides;
      }
      if (overrides.heading.typographyPreset) {
        headingOverrides.typographyPreset = overrides.heading.typographyPreset;
      }
      if (overrides.heading.stylePreset) {
        headingOverrides.heading = {stylePreset: overrides.heading.stylePreset};
      }
      return headingOverrides;
    };

    const headlineOverrides = {
      typographyPreset: {
        ...theme.componentDefaults.titleBar.heading.typographyPreset,
      },
      heading: {
        stylePreset: theme.componentDefaults.titleBar.heading.stylePreset,
      },

      ...addTitleBarHeadingOverrides(),
    };

    const blockOverrides = {spaceInline: hasActions ? 'space040' : ''};

    return (
      <StyledStackContainer
        overrides={overrides}
        flow="horizontal-center"
        stackDistribution="space-between"
        ref={ref}
        {...rest}
      >
        <StyledBlock {...blockOverrides}>
          <Headline headingAs={headingAs} overrides={headlineOverrides}>
            {children}
          </Headline>
        </StyledBlock>
        {ActionItem && (
          <Hidden {...hideActionItemOn}>
            <ActionItem />
          </Hidden>
        )}
      </StyledStackContainer>
    );
  },
);

export const TitleBar = withOwnTheme(ThemelessTitleBar)({
  defaults,
  stylePresets,
});
