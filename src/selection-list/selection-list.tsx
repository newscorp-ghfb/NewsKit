import React, {useRef} from 'react';
import composeRefs from '@seznam/compose-react-refs';
import {SelectionListProps} from './types';
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';
import {styled} from '../utils/style';
import {logicalProps} from '../utils/logical-properties';
import {useKeypress} from '../utils/hooks';
import {handleArrowDown, handleArrowUp} from './utils';

const SelectionListContainer = styled.div<
  Pick<SelectionListProps, 'overrides'>
>`
  box-sizing: border-box;
  ${logicalProps()}
`;

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
    <SelectionListContainer
      ref={composeRefs(selectionListRef, ref)}
      role="menu"
      overrides={overrides}
      {...restProps}
    >
      {children}
    </SelectionListContainer>
  );
});

ThemelessSelectionList.displayName = 'SelectionList';

export const SelectionList = withOwnTheme(ThemelessSelectionList)({defaults});
