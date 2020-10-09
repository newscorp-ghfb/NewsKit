import React, {useState} from 'react';
import {TabGroupProps, TabPaneProps} from './types';
import {StyledOuterTabGroup, StyledInnerTabGroup} from './styled';
import {Flow, Stack} from '../stack';
import {Divider} from '../divider';
import {AlignSelfValues, StackChild} from '../stack-child';
import {TabSize} from '../tab';

export const TabGroup: React.FC<TabGroupProps> = ({
  children,
  overrides = {},
  size = TabSize.Medium,
  divider,
  tabPanes,
  orientation,
}) => {
  const [activeTab, setActiveTab] = useState(1);

  const KEYBOARD_ACTION = {
    next: 'next',
    previous: 'previous',
  };

  const parseKeyDown = (event: React.KeyboardEvent) => {
    switch (event.keyCode) {
      case 39:
        return KEYBOARD_ACTION.next;
      case 37:
        return KEYBOARD_ACTION.previous;
      default:
        return null;
    }
  };
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

  const renderChildren = () =>
    React.Children.toArray(children).reduce(
      (acc, tab: React.ReactElement, i, array) => {
        const TabClone = React.cloneElement(tab, {
          onClick: () => setActiveTab(tab.props.tabKey),
          onMouseDown: (e: React.MouseEvent) => e.preventDefault(),
          onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => handleKeyDown(e),
          isSelected: activeTab === tab.props.tabKey,
          size,
        });

        acc.push(TabClone);

        if (divider && i < array.length - 1) {
          acc.push(
            <StackChild alignSelf={AlignSelfValues.Stretch}>
              {orientation === 'vertical' ? <Divider /> : <Divider vertical />}
            </StackChild>,
          );
        }

        return acc;
      },
      [] as React.ReactElement[],
    );

  return (
    <Stack flow={Flow.VerticalLeft} spaceInline="sizing020" wrap="wrap">
      <StyledOuterTabGroup data-testid="tab-group" inline>
        <StyledInnerTabGroup
          overrides={overrides}
          flow={
            orientation === 'vertical'
              ? Flow.VerticalCenter
              : Flow.HorizontalCenter
          }
          inline
          role="tablist"
        >
          {renderChildren()}
        </StyledInnerTabGroup>
      </StyledOuterTabGroup>
      {tabContent}
    </Stack>
  );
};
