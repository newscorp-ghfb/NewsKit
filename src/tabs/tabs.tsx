import React, {useState, useEffect} from 'react';
import {isFragment} from 'react-is';
import {
  TabProps,
  TabsProps,
  TabsDistribution,
  TabSize,
  TabAlign,
  TabsIndicatorPosition,
  TabPanelProps,
} from './types';
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
import {TabButton} from './tab-button';
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
    return vertical ? TabAlign.Start : TabAlign.Center;
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
      size = TabSize.Medium,
      divider,
      vertical = false,
      distribution,
      selectedIndex,
      initialSelectedIndex = 0,
      indicatorPosition = TabsIndicatorPosition.End,
      align: passedAlign,
      onChange,
      ...rest
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
    const tabsOnlyChildren: React.ReactElement<TabProps>[] = React.Children.toArray(
      children,
    ).filter((child: React.ReactNode): child is React.ReactElement<TabProps> =>
      hasMatchingDisplayNameWith(child, Tab),
    );

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

    const tabPanels = tabsOnlyChildren.map((child, index) => {
      /* istanbul ignore next */
      const key = child.key || `panel-${index}`;
      const tabPanelProps: TabPanelProps = {
        children: child.props.children,
        selected: index === activeTabIndex,
        id: ariaIds[index],
      };

      return <TabPanel key={key} {...tabPanelProps} />;
    });

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

    const tabButtons = tabsOnlyChildren.reduce(
      (acc, {key: k, props}, index, array) => {
        const key = k || `tab-${index}`;
        const id = ariaIds[index];
        const selected = index === activeTabIndex;
        const {
          autoFocus,
          dataTestId,
          disabled,
          ariaLabel,
          overrides: tabButtonOverrides,
          label,
          ...restTabButtonProps
        } = props;

        acc.push(
          <StyledDistributionWrapper
            distribution={distribution || TabsDistribution.Start}
            data-testid="distribution-wrapper"
            vertical={vertical}
            last={array.length === index + 1}
            key={`${key}-wrapper`}
            overrides={nonLogicalOverrides}
          >
            <ScrollSnapAlignment snapAlign={getScrollAlign(index, array)}>
              <TabButton
                key={key}
                selected={selected}
                autoFocus={autoFocus}
                dataTestId={dataTestId}
                size={size}
                onKeyDown={handleKeyDown}
                onClick={() => changeActiveTab(index)}
                disabled={disabled}
                ref={selected ? activeTabRef : undefined}
                id={id}
                align={align}
                ariaLabel={ariaLabel}
                overrides={{
                  ...tabButtonOverrides,
                  width: '100%',
                  height: vertical ? '100%' : '',
                }}
                {...restTabButtonProps}
              >
                {getChildren(label)}
              </TabButton>
            </ScrollSnapAlignment>
          </StyledDistributionWrapper>,
        );

        if (divider && index < array.length - 1) {
          acc.push(addStackDivider(key));
        }

        return acc;
      },
      [] as React.ReactElement[],
    );

    return (
      <StyledTabGroup
        ref={ref}
        vertical={vertical}
        overrides={overrides}
        data-testid="tab-group"
        {...rest}
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
              {tabButtons}

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
