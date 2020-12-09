import React, {useState} from 'react';
import {TabGroupProps, TabPaneProps} from './types';
import {
  StyledOuterTabGroup,
  StyledInnerTabGroup,
  StyledTabBarTrack,
  StyledTabBarIndicator,
} from './styled';
import {Flow, Stack} from '../stack';
import {Divider} from '../divider';
import {AlignSelfValues, StackChild} from '../stack-child';
import {Tab, TabSize} from '../tab';
import {useTheme} from '../theme';
import {
  getTabBarIndicatorStyle,
  getLayoutParams,
  KEYBOARD_ACTION,
  parseKeyDown,
  preventDefault,
} from './utils';

export const TabGroup: React.FC<TabGroupProps> = ({
  children,
  overrides = {},
  size = TabSize.Medium,
  divider,
  tabPanes,
  vertical = false,
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleKeyDown = (event: any) => {
    // WAI-ARIA 1.1
    // https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
    // We use directional keys to iterate focus through Tabs.

    // Find all tabs eligible for focus
    const availableTabs: HTMLButtonElement[] = [];
    [...event.target.parentNode.parentNode.childNodes].forEach(node => {
      [...node.childNodes].forEach((innerNode: HTMLButtonElement) => {
        if (!innerNode.disabled && innerNode.getAttribute('role') === 'tab') {
          availableTabs.push(innerNode);
        }
      });
    });

    // Exit early if there are no other tabs available
    if (availableTabs.length === 1) return;

    // Find tab to focus, looping to start/end of list if necessary
    const currentTabIndex = availableTabs.indexOf(event.target);
    const action = parseKeyDown(event);
    if (action) {
      let nextTab;
      /* istanbul ignore else */
      if (action === KEYBOARD_ACTION.previous) {
        if (availableTabs[currentTabIndex - 1]) {
          nextTab = availableTabs[currentTabIndex - 1];
        } else {
          nextTab = availableTabs[availableTabs.length - 1];
        }
      } else if (action === KEYBOARD_ACTION.next) {
        if (availableTabs[currentTabIndex + 1]) {
          nextTab = availableTabs[currentTabIndex + 1];
        } else {
          const [firstTab] = availableTabs;
          nextTab = firstTab;
        }
      }
      /* istanbul ignore else */
      if (nextTab) {
        // Focus the tab
        nextTab.focus();
        nextTab.click();
      }
    }
  };

  const tabContent =
    tabPanes &&
    tabPanes.find(
      (tabPane: React.ReactElement<TabPaneProps>) =>
        activeTab === tabPane.props.tabKey,
    );

  return (
    <Stack
      flow={vertical ? Flow.HorizontalTop : Flow.VerticalLeft}
      spaceInline="space020"
      wrap="wrap"
    >
      <StyledOuterTabGroup data-testid="tab-group">
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
                    width: vertical ? '100%' : undefined,
                  }}
                />,
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
          <StyledTabBarTrack
            overrides={overrides}
            vertical={vertical}
            role="presentation"
            data-testid="tab-bar-track"
          />
        </StyledInnerTabGroup>
      </StyledOuterTabGroup>
      {tabContent}
    </Stack>
  );
};
