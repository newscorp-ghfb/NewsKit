import React, {useState} from 'react';
import {isFragment} from 'react-is';
import {
  TabProps,
  TabsProps,
  TabsDistribution,
  TabSize,
  TabAlign,
} from './types';
import {
  StyledTabsBar,
  StyledInnerTabGroup,
  StyledTabsBarTrack,
  StyledTabsBarIndicator,
  StyledTabGroup,
  StyledDistributionWrapper,
} from './styled';
import {Flow} from '../stack';
import {Divider} from '../divider';
import {AlignSelfValues, StackChild} from '../stack-child';
import {TabInternal} from './tab-internal';
import {useTheme} from '../theme';
import {useResizeObserver} from '../utils/hooks/use-resize-observer';
import {
  getTabsBarIndicatorStyle,
  getLayoutParams,
  KEYBOARD_ACTION,
  parseKeyDown,
  getFirstParentElementWithRole,
  getDescendantOnlyFromFirstChild,
} from './utils';
import {TabPanel} from './tab-panel';
import {hasMatchingDisplayNameWith} from '../utils/component';
import {getSSRId} from '../utils/get-ssr-id';
import {get} from '../utils/get';

/* istanbul ignore next */
export const Tab: React.FC<TabProps> = () => <></>;
Tab.displayName = 'Tab';

const validateInitialSelectedIndex = (
  index: number,
  children: unknown[],
): number => (index >= 0 && index < children.length ? index : 0);

const getAlign = (align: TabAlign | undefined, vertical: boolean) => {
  if (!align) {
    return vertical ? TabAlign.Start : TabAlign.Center;
  }
  return align;
};

export const Tabs: React.FC<TabsProps> = ({
  children,
  overrides = {},
  size = TabSize.Medium,
  divider,
  vertical = false,
  distribution,
  initialSelectedIndex = 0,
  align: initialAlign,
}) => {
  const theme = useTheme();
  const align = getAlign(initialAlign, vertical);

  // filter out children which are not Tab component
  const tabsOnlyChildren = React.Children.toArray(children).filter(
    (child: React.ReactElement) => hasMatchingDisplayNameWith(child, Tab),
  );

  // The index of the active tab - this is what we change on click to trigger a visual tab change
  const [activeTabIndex, setActiveTabIndex] = useState(() =>
    validateInitialSelectedIndex(initialSelectedIndex, children),
  );
  const [indicator, setIndicator] = useState({
    size: 0,
    distance: 0,
  });

  // Just an incremental counter to trigger re-renders when the tab is changed (active tab ref changing wont trigger a render)
  const [keyUpdated, setKeyUpdated] = useState(0);
  React.useEffect(() => {
    setKeyUpdated(keyUpdated + 1);
  }, [activeTabIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const activeTabRef = React.useRef<HTMLButtonElement>(null);
  // Reference like this so linter does not remove from hooks dependencies
  const currentActiveTabRef = activeTabRef.current;

  const tabsBarTrackRef = React.useRef<HTMLDivElement>(null);
  const [tabsBarTrackWidth, tabsBarTrackHeight] = useResizeObserver(
    tabsBarTrackRef,
  );
  const tabsBarTrackSize = vertical ? tabsBarTrackHeight : tabsBarTrackWidth;

  const tabsBarIndicatorSizeOverride = get(
    overrides,
    'selectionIndicator.indicator.size',
  );

  React.useEffect(() => {
    if (currentActiveTabRef) {
      setIndicator(
        getLayoutParams(
          currentActiveTabRef,
          theme,
          vertical,
          tabsBarIndicatorSizeOverride,
        ),
      );
    }
  }, [
    currentActiveTabRef,
    tabsBarIndicatorSizeOverride,
    theme,
    vertical,
    tabsBarTrackSize,
  ]);

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

    // Exit early if there are no other tabs available
    if (availableTabs.length <= 1) return;

    // Find tab to focus, looping to start/end of list if necessary
    const currentTabIndex = availableTabs.indexOf(event.currentTarget);
    const action = parseKeyDown(event, vertical);

    if (!action) return;

    const keyboardActions = {
      [KEYBOARD_ACTION.previous]:
        availableTabs[currentTabIndex - 1] ||
        availableTabs[availableTabs.length - 1],
      [KEYBOARD_ACTION.next]:
        availableTabs[currentTabIndex + 1] || availableTabs[0],
      [KEYBOARD_ACTION.start]: availableTabs[0],
      [KEYBOARD_ACTION.end]: availableTabs[availableTabs.length - 1],
    };

    const nextTab = keyboardActions[action];

    /* istanbul ignore if */
    if (!nextTab) {
      return;
    }

    // Focus the tab
    nextTab.focus();
    nextTab.click();
  };

  // generate uniq IDs for a11y porpose
  const [ariaIds, setAriaIds] = useState<string[]>([]);

  React.useEffect(() => {
    const ids: string[] = tabsOnlyChildren.map(() => getSSRId());
    setAriaIds(ids);
  }, [tabsOnlyChildren.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const tabPanels = tabsOnlyChildren.map(
    (child: React.ReactElement<TabProps>, index) => {
      const tabPanelProps = {
        children: child.props.children,
        selected: index === activeTabIndex,
        id: ariaIds[index],
      };

      return <TabPanel {...tabPanelProps} />;
    },
  );

  const tabData = tabsOnlyChildren.map(
    (child: React.ReactElement<TabProps>, index) => ({
      key: index,
      selected: index === activeTabIndex,
      id: ariaIds[index],
      ...child.props,
    }),
  );

  const addStackDivider = (key: number) => (
    <StackChild key={`${key}-divider`} alignSelf={AlignSelfValues.Stretch}>
      <Divider overrides={overrides.divider} vertical={!vertical} />
    </StackChild>
  );

  const getChildren = (
    tab: string | React.ReactNode,
  ): string | React.ReactNode => {
    if (isFragment(tab)) {
      // un-wrap the fragment from Tab.label prop
      return tab.props.children;
    }
    return tab;
  };

  const tabs = tabData.reduce(
    (acc, tab, index, array) => {
      acc.push(
        <StyledDistributionWrapper
          distribution={distribution || TabsDistribution.Start}
          numberOfSiblings={array.length}
          data-testid="distribution-wrapper"
          vertical={vertical}
        >
          <TabInternal
            key={tab.key}
            selected={tab.selected}
            autoFocus={tab.autoFocus}
            size={size}
            onKeyDown={handleKeyDown}
            onClick={() => setActiveTabIndex(tab.key)}
            disabled={tab.disabled}
            ref={tab.selected ? activeTabRef : undefined}
            id={tab.id}
            align={align}
            overrides={{
              ...tab.overrides,
              width: '100%',
              height: vertical ? '100%' : '',
            }}
          >
            {getChildren(tab.label)}
          </TabInternal>
        </StyledDistributionWrapper>,
      );

      if (divider && index < array.length - 1) {
        acc.push(addStackDivider(tab.key));
      }
      return acc;
    },
    [] as React.ReactElement[],
  );

  return (
    <StyledTabGroup
      vertical={vertical}
      overrides={overrides}
      data-testid="tab-group"
    >
      <StyledTabsBar
        overrides={overrides}
        vertical={vertical}
        data-testid="tab-bar"
      >
        <StyledInnerTabGroup
          overrides={overrides}
          flow={vertical ? Flow.VerticalLeft : Flow.HorizontalCenter}
          inline={!vertical}
          role="tablist"
          aria-orientation={vertical ? 'vertical' : 'horizontal'}
        >
          {tabs}

          <StyledTabsBarTrack
            overrides={overrides}
            vertical={vertical}
            role="presentation"
            data-testid="tab-bar-track"
            ref={tabsBarTrackRef}
          />
          <StyledTabsBarIndicator
            overrides={overrides}
            vertical={vertical}
            style={getTabsBarIndicatorStyle(
              theme,
              indicator.size,
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
      </StyledTabsBar>
      {tabPanels}
    </StyledTabGroup>
  );
};
