import React, {useRef} from 'react';
import composeRefs from '@seznam/compose-react-refs';
import {SelectionListProps} from './types';
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';
import {useKeypress} from '../utils/hooks';
import {handleArrowDown, handleArrowUp} from './utils';
import {StyledSelectionList} from './styled';

const ThemelessSelectionList = React.forwardRef<
  HTMLDivElement,
  SelectionListProps
>(({children, overrides = {}, ...restProps}, ref) => {
  const selectionListRef = useRef<HTMLDivElement>(null);

  useKeypress('ArrowDown', () => handleArrowDown(selectionListRef.current), {
    target: selectionListRef,
    eventType: 'keydown',
  });

  useKeypress('ArrowUp', () => handleArrowUp(selectionListRef.current), {
    target: selectionListRef,
    eventType: 'keydown',
  });

  return (
    <StyledSelectionList
      ref={composeRefs(selectionListRef, ref)}
      role="menu"
      overrides={overrides}
      {...restProps}
    >
      {children}
    </StyledSelectionList>
  );
});

ThemelessSelectionList.displayName = 'SelectionList';

export const SelectionList = withOwnTheme(ThemelessSelectionList)({defaults});
