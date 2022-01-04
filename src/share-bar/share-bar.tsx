import React from 'react';
import {Icon, IconProps as Item, shareBarIcons} from './icon';

import {
  styled,
  getSizingFromTheme,
  getTypePresetFromTheme,
  getColorFromTheme,
} from '../utils/style';
import {getMediaQueryFromTheme} from '../utils/responsive-helpers';
import {getBuiId} from '../utils/get-bui-id';
import {StyledUl} from '../list';

export interface ShareBarProps {
  leftLabel?: string;
  rightLabel?: string;
  leftIcons?: (Item | React.ComponentType)[];
  rightIcons?: (Item | React.ComponentType)[];
}

const StyledHeader = styled.span`
  ${getTypePresetFromTheme('caption010')}
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: ${getSizingFromTheme('spacingSize040')};
`;

const StyledLi = styled.li`
  list-style-type: none;
  margin-right: ${getSizingFromTheme('spacingSize040')};
`;

function isValidIcon(item: Item | React.ComponentType): item is Item {
  const validTypes = Object.keys(shareBarIcons);
  return validTypes.includes((item as Item).type);
}

const renderItems = (items: (Item | React.ComponentType)[] = []) =>
  items.map(item => {
    if (isValidIcon(item)) {
      return (
        <StyledLi key={`${item.type}-${item.href}`}>
          <Icon {...item} />
        </StyledLi>
      );
    }
    if (React.isValidElement(item)) {
      return <StyledLi key={`${getBuiId()}`}>{item}</StyledLi>;
    }
    return '';
  });

const Wrapper = styled.div`
  width: 100%;
  background-color: ${getColorFromTheme('shareBarBackground')};
  padding-top: ${getSizingFromTheme('spacingSize020')};
  padding-bottom: ${getSizingFromTheme('spacingSize020')};
  padding-left: ${getSizingFromTheme('spacingSize040')};
  display: flex;
  box-sizing: border-box;
  ${getMediaQueryFromTheme(undefined, 'sm')} {
    overflow-y: auto;
    overflow-x: scroll;
  }
`;

export const ShareBar = ({
  leftLabel,
  rightLabel,
  leftIcons,
  rightIcons,
}: ShareBarProps) => (
  <Wrapper>
    {leftLabel && <StyledHeader>{leftLabel}</StyledHeader>}
    <StyledUl $flexGrow={1}>{renderItems(leftIcons)}</StyledUl>
    {rightLabel && <StyledHeader>{rightLabel}</StyledHeader>}
    <StyledUl>{renderItems(rightIcons)}</StyledUl>
  </Wrapper>
);

ShareBar.displayName = 'ShareBar';
