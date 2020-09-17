import React from 'react';
import {styled, getPaddingPreset, getStylePreset} from '../utils/style';
import {TitleBarProps, ContainerProps} from './types';

import {Headline} from '../headline';
import {Stack} from '../stack/stack';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {Block} from '../block';
import {Hidden} from '../grid/visibility';
import {useTheme} from '../theme';

const StackContainer = styled(Stack)<ContainerProps>`
  ${getPaddingPreset('titleBar')};
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

  const headlineOverrides = {
    heading: {
      ...theme.componentDefaults.titleBar.heading,
      ...(overrides.heading ? filterOutFalsyProperties(overrides.heading) : {}),
    },
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
