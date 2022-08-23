import React, {useState, useEffect} from 'react';
import {isFragment} from 'react-is';
import {TabProps, TabsProps, TabsDistribution, TabAlign} from './types';
import {
  StyledTabsBar,
  StyledInnerTabGroup,
  StyledTabsBarTrack,
  StyledTabsBarIndicator,
  StyledTabGroup,
  StyledDistributionWrapper,
  StyledDividerWrapper,
} from './styled';
import {Flow} from '../stack';
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
  getScrollAlign,
} from './utils';
import {TabPanel} from './tab-panel';
import {hasMatchingDisplayNameWith} from '../utils/component';
import {useReactKeys} from '../utils/hooks';
import {get} from '../utils/get';
import {Scroll, ScrollSnapAlignment} from '../scroll';
import {getComponentOverrides} from '../utils/overrides';
import {withDefaultProps} from '../utils';
import {Divider} from '../divider';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {omitLogicalPropsFromOverrides} from '../utils/logical-properties';

/* istanbul ignore next */
export const Tab: React.FC<TabProps> = () => <></>;
Tab.displayName = 'Tab';

const validateInitialSelectedIndex = (
  index: number,
  children: unknown[],
): number => (index >= 0 && index < children.length ? index : 0);

const validateSelectedIndex = (index: number, children: unknown[]): number =>
  index >= 0 ? Math.min(index, children.length - 1) : 0;

const getAlign = (align: TabAlign | undefined, vertical: boolean) => {
  if (!align) {
    return vertical ? 'start' : 'center';
  }
  return align;
};

const DefaultScroll = withDefaultProps(
  Scroll,
  {controls: 'static', snapAlign: 'center'},
  'tabs.scroll',
);

const ThemelessTabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      children,
      overrides = {},
      size = 'medium',
      divider,
      vertical = false,
      distribution,
      selectedIndex,
      initialSelectedIndex = 0,
      indicatorPosition = 'end',
      align: passedAlign,
      onChange,
    },
    ref,
  ) => {
    const theme = useTheme();
    const align = getAlign(passedAlign, vertical);
    const nonLogicalOverrides = omitLogicalPropsFromOverrides(overrides);

    const [ScrollComponent, scrollProps] = getComponentOverrides(
      /* istanbul ignore next  */
      overrides?.scroll,
      DefaultScroll,
      {
        vertical,
        tabIndex: undefined,
      },
    );

    // filter out children which are not Tab component
    const tabsOnlyChildren = React.Children.toArray(
      children,
    ).filter((child: React.ReactNode) =>
      hasMatchingDisplayNameWith(child, Tab),
    ) as Array<React.ReactElement>;

    // The index of the active tab - this is what we change on click to trigger a visual tab change
    const [activeTabIndex, setActiveTabIndex] = useState(() =>
      validateInitialSelectedIndex(
        selectedIndex || initialSelectedIndex,
        children,
      ),
    );

    useEffect(() => {
      if (selectedIndex !== undefined) {
        setActiveTabIndex(validateSelectedIndex(selectedIndex, children));
      }
    }, [selectedIndex, children]);

    const changeActiveTab = (newSelectedIndex: number) => {
      if (selectedIndex === undefined) {
        setActiveTabIndex(newSelectedIndex);
      }
      if (onChange && typeof onChange === 'function') {
        onChange(newSelectedIndex);
      }
    };
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

    const [activeTabWidth, activeTabHeight] = useResizeObserver(activeTabRef);
    const activeTabSize = vertical ? activeTabHeight : activeTabWidth;

    const tabsBarIndicatorSizeOverride = get(
      nonLogicalOverrides,
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
      activeTabSize,
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

      Array.from(tabListElement.childNodes).forEach(innerNode => {
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

      // prevent scrolling when you switch tabs using arrows
      event.preventDefault();

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
      /* istanbul ignore next */
      if ('scrollIntoView' in nextTab) {
        requestAnimationFrame(() => {
          nextTab.scrollIntoView();
        });
      }
    };

    // generate uniq IDs for a11y purposes
    const ariaIds = useReactKeys(tabsOnlyChildren.length);

    const tabPanels = tabsOnlyChildren.map(
      (child: React.ReactElement<TabProps>, index) => {
        /* istanbul ignore next */
        const key = child.key || `panel-${index}`;
        const tabPanelProps = {
          key,
          children: child.props.children,
          selected: index === activeTabIndex,
          id: ariaIds[index],
        };

        return <TabPanel {...tabPanelProps} />;
      },
    );

    const tabData = tabsOnlyChildren.map(
      (child: React.ReactElement<TabProps>, index) => {
        /* istanbul ignore next */
        const key = child.key || `tab-${index}`;
        return {
          key,
          selected: index === activeTabIndex,
          id: ariaIds[index],
          ...child.props,
        };
      },
    );

    const addStackDivider = (key: React.Key) => (
      <StyledDividerWrapper
        key={`${key}-divider`}
        vertical={!vertical}
        overrides={nonLogicalOverrides}
      >
        <Divider overrides={overrides.divider} vertical={!vertical} />
      </StyledDividerWrapper>
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
    const tabs = tabData.reduce((acc, tab, index, array) => {
      acc.push(
        <StyledDistributionWrapper
          distribution={distribution || TabsDistribution.Start}
          data-testid="distribution-wrapper"
          vertical={vertical}
          last={array.length === index + 1}
          key={`${tab.key}-wrapper`}
          overrides={nonLogicalOverrides}
        >
          <ScrollSnapAlignment snapAlign={getScrollAlign(index, array)}>
            <TabInternal
              key={tab.key}
              selected={tab.selected}
              autoFocus={tab.autoFocus}
              dataTestId={tab.dataTestId}
              size={size}
              onKeyDown={handleKeyDown}
              onClick={() => changeActiveTab(index)}
              disabled={tab.disabled}
              ref={tab.selected ? activeTabRef : undefined}
              id={tab.id}
              align={align}
              ariaLabel={tab.ariaLabel}
              overrides={{
                ...tab.overrides,
                width: '100%',
                height: vertical ? '100%' : '',
              }}
            >
              {getChildren(tab.label)}
            </TabInternal>
          </ScrollSnapAlignment>
        </StyledDistributionWrapper>,
      );

      if (divider && index < array.length - 1) {
        acc.push(addStackDivider(tab.key));
      }
      return acc;
    }, [] as React.ReactElement[]);

    return (
      <StyledTabGroup
        ref={ref}
        vertical={vertical}
        overrides={overrides}
        data-testid="tab-group"
      >
        <StyledTabsBar
          overrides={nonLogicalOverrides}
          vertical={vertical}
          data-testid="tab-bar"
        >
          <ScrollComponent {...scrollProps}>
            <StyledInnerTabGroup
              overrides={nonLogicalOverrides}
              flow={vertical ? Flow.VerticalLeft : Flow.HorizontalCenter}
              inline={!vertical}
              role="tablist"
              aria-orientation={vertical ? 'vertical' : 'horizontal'}
            >
              {tabs}

              <StyledTabsBarIndicator
                overrides={nonLogicalOverrides}
                vertical={vertical}
                indicatorPosition={indicatorPosition}
                style={getTabsBarIndicatorStyle(
                  theme,
                  indicator.size,
                  indicator.distance,
                  vertical,
                  keyUpdated,
                  nonLogicalOverrides,
                )}
                data-testid="tab-bar-indicator"
                aria-hidden="true"
                role="presentation"
              />
            </StyledInnerTabGroup>
          </ScrollComponent>
          <StyledTabsBarTrack
            overrides={nonLogicalOverrides}
            vertical={vertical}
            indicatorPosition={indicatorPosition}
            role="presentation"
            data-testid="tab-bar-track"
            ref={tabsBarTrackRef}
          />
        </StyledTabsBar>
        {tabPanels}
      </StyledTabGroup>
    );
  },
);

export const Tabs = withOwnTheme(ThemelessTabs)({defaults, stylePresets});
