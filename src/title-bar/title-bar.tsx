import React from 'react';
import {styled, getSpacingInset, getStylePreset} from '../utils/style';
import {TitleBarProps, ContainerProps} from './types';
import {Headline} from '../headline';
import {Stack} from '../stack/stack';
import {Block} from '../block';
import {Hidden} from '../grid/visibility';
import {useTheme} from '../theme';
import {HeadlineOverrides} from '../headline/types';

const StackContainer = styled(Stack)<ContainerProps>`
  ${getSpacingInset('titleBar')};
  ${getStylePreset('titleBar')};
`;

export const TitleBar: React.FC<TitleBarProps> = props => {
  const {
    children,
    headingAs = 'h3',
    actionItem: ActionItem,
    overrides = {},
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
    <StackContainer
      overrides={overrides}
      flow="horizontal-center"
      stackDistribution="space-between"
    >
      <Block overrides={blockOverrides}>
        <Headline headingAs={headingAs} overrides={headlineOverrides}>
          {children}
        </Headline>
      </Block>
      {ActionItem ? (
        <Hidden xs>
          <ActionItem />
        </Hidden>
      ) : null}
    </StackContainer>
  );
};
