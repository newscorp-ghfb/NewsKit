import React, {useState} from 'react';
import {TabGroupProps, TabPaneProps, TabsDistribution} from './types';
import {
  StyledtabBar,
  StyledInnerTabGroup,
  StyledTabBarTrack,
  StyledTabBarIndicator,
  StyledTabGroup,
  StyledDistributionWrapper,
} from './styled';
import {Flow} from '../stack';
import {Divider} from '../divider';
import {AlignSelfValues, StackChild} from '../stack-child';
import {TabSize, Tab} from '../tab';
import {useTheme} from '../theme';
import {
  getTabBarIndicatorStyle,
  getLayoutParams,
  KEYBOARD_ACTION,
  parseKeyDown,
  preventDefault,
  getFirstParentElementWithRole,
  getDescendantOnlyFromFirstChild,
} from './utils';

export const TabGroup: React.FC<TabGroupProps> = ({
  children,
  overrides = {},
  size = TabSize.Medium,
  divider,
  tabPanes,
  vertical = false,
  distribution,
}) => {
  const theme = useTheme();
  // The id of the active tab - this is what we change on click to trigger a visual tab change
  const [activeTab, setActiveTab] = useState(0);
  const [indicator, setIndicator] = useState({
    length: 0,
    distance: 0,
  });
  // Just an incremental counter to trigger re-renders when the tab is changed (active tab ref changing wont trigger a render)
  const [keyUpdated, setKeyUpdated] = useState(0);
  // Alias useEffect hook to avoid keyUpdated being added to hook dependencies by linter.
  const ue = React.useEffect;
  ue(() => {
    setKeyUpdated(keyUpdated + 1);
  }, [activeTab]);

  const activeTabRef = React.useRef<HTMLElement>(null);
  // Reference like this so linter does not remove from hooks dependencies
  const currentActiveTabRef = activeTabRef.current;

  const tabBarIndicatorLengthOverride =
    overrides.tabBarIndicator && overrides.tabBarIndicator.length;
  React.useEffect(() => {
    if (currentActiveTabRef) {
      setIndicator(
        getLayoutParams(
          currentActiveTabRef,
          theme,
          vertical,
          tabBarIndicatorLengthOverride,
        ),
      );
    }
  }, [currentActiveTabRef, tabBarIndicatorLengthOverride, theme, vertical]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    // WAI-ARIA 1.1
    // https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
    // We use directional keys to iterate focus through Tabs.

    // Find all tabs eligible for focus
    const availableTabs: HTMLButtonElement[] = [];

    const tabListElement = getFirstParentElementWithRole(
      event.currentTarget,
      'tablist',
    );

    tabListElement.childNodes.forEach(innerNode => {
      const element = getDescendantOnlyFromFirstChild(
        innerNode,
        'tab',
      ) as HTMLButtonElement;

      if (element && !element.disabled) {
        availableTabs.push(element);
      }
    });

    // // Exit early if there are no other tabs available
    if (availableTabs.length <= 1) return;

    // Find tab to focus, looping to start/end of list if necessary
    const currentTabIndex = availableTabs.indexOf(event.currentTarget);
    const action = parseKeyDown(event);

    if (!action) return;

    let nextTab;
    /* istanbul ignore else */
    if (action === KEYBOARD_ACTION.previous) {
      nextTab =
        availableTabs[currentTabIndex - 1] ||
        availableTabs[availableTabs.length - 1];
    } else if (action === KEYBOARD_ACTION.next) {
      nextTab = availableTabs[currentTabIndex + 1] || availableTabs[0];
    } else {
      return;
    }
    // Focus the tab
    nextTab.focus();
    nextTab.click();
  };

  const tabContent =
    tabPanes &&
    tabPanes.find(
      (tabPane: React.ReactElement<TabPaneProps>) =>
        activeTab === tabPane.props.tabKey,
    );

  return (
    <StyledTabGroup
      vertical={vertical}
      overrides={overrides}
      data-testid="tab-group"
    >
      <StyledtabBar
        overrides={overrides}
        vertical={vertical}
        data-testid="tab-bar"
      >
        <StyledInnerTabGroup
          overrides={overrides}
          flow={vertical ? Flow.VerticalLeft : Flow.HorizontalCenter}
          inline={!vertical}
          role="tablist"
        >
          {React.Children.toArray(children).reduce(
            (acc, child, index, array) => {
              const key = child.props.tabKey;
              const isActive = key === activeTab;

              acc.push(
                <StyledDistributionWrapper
                  distribution={distribution || TabsDistribution.LeftStacked}
                  numberOfSiblings={array.length}
                  data-testid="distribution-wrapper"
                  vertical={vertical}
                >
                  <Tab
                    {...child.props}
                    key={key}
                    selected={isActive}
                    size={size}
                    onKeyDown={handleKeyDown}
                    onClick={() => setActiveTab(key)}
                    onMouseDown={preventDefault}
                    ref={isActive ? activeTabRef : undefined}
                    overrides={{
                      ...child.props.overrides,
                      width: '100%',
                      height: vertical ? '100%' : '',
                    }}
                  />
                </StyledDistributionWrapper>,
              );

              if (divider && index < array.length - 1) {
                acc.push(
                  <StackChild
                    key={`${key}-divider`}
                    alignSelf={AlignSelfValues.Stretch}
                  >
                    <Divider vertical={!vertical} />
                  </StackChild>,
                );
              }
              return acc;
            },
            [] as React.ReactElement[],
          )}

          <StyledTabBarTrack
            overrides={overrides}
            vertical={vertical}
            role="presentation"
            data-testid="tab-bar-track"
          />
          <StyledTabBarIndicator
            overrides={overrides}
            vertical={vertical}
            style={getTabBarIndicatorStyle(
              theme,
              indicator.length,
              indicator.distance,
              vertical,
              keyUpdated,
              overrides,
            )}
            data-testid="tab-bar-indicator"
            aria-hidden="true"
            role="presentation"
          />
        </StyledInnerTabGroup>
      </StyledtabBar>
      {tabContent}
    </StyledTabGroup>
  );
};
