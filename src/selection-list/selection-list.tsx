import React, {useRef} from 'react';
import composeRefs from '@seznam/compose-react-refs';
import {SelectionListProps} from './types';
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';
import {useKeypress, useReactKeys} from '../utils/hooks';
import {handleArrowDown, handleArrowUp, handleHome, handleEnd} from './utils';
import {StyledSelectionList} from './styled';
import {ScreenReaderOnly} from '../screen-reader-only';

const ThemelessSelectionList = React.forwardRef<
  HTMLDivElement,
  SelectionListProps
>(({children, overrides = {}, ...restProps}, ref) => {
  const listDescriptionId = useReactKeys(1)[0];
  const selectionListRef = useRef<HTMLDivElement>(null);

  useKeypress('ArrowDown', () => handleArrowDown(selectionListRef.current), {
    target: selectionListRef,
    eventType: 'keydown',
  });

  useKeypress('ArrowUp', () => handleArrowUp(selectionListRef.current), {
    target: selectionListRef,
    eventType: 'keydown',
  });

  useKeypress('Home', () => handleHome(selectionListRef.current), {
    target: selectionListRef,
    eventType: 'keydown',
  });

  useKeypress('End', () => handleEnd(selectionListRef.current), {
    target: selectionListRef,
    eventType: 'keydown',
  });

  const screenReaderOnlyMessage = (
    <ScreenReaderOnly id={listDescriptionId}>
      Press down arrow key to navigate to the first item
    </ScreenReaderOnly>
  );

  return (
    <>
      {screenReaderOnlyMessage}
      <StyledSelectionList
        ref={composeRefs(selectionListRef, ref)}
        role="menu"
        aria-describedby={listDescriptionId}
        overrides={overrides}
        {...restProps}
      >
        {children}
      </StyledSelectionList>
    </>
  );
});

ThemelessSelectionList.displayName = 'SelectionList';

export const SelectionList = withOwnTheme(ThemelessSelectionList)({defaults});
