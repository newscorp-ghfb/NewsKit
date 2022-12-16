import React from 'react';
import {styled} from 'newskit';
import ElementListItemDraggable from './element-list-draggable';

const StyledDiv = styled.div`
  height: 100%;
`;

export const ElementsList = ({
  elements,
  moveItem,
  onSelect,
  onHover,
  onUnhover,
}) => (
  <StyledDiv>
    {elements.map((element, index) =>
      element.children.length === 0 ? (
        <ElementListItemDraggable
          key={element.id}
          type={element.type}
          index={index}
          moveItem={moveItem}
          id={element.id}
          onSelect={onSelect}
          onHover={onHover}
          onUnhover={onUnhover}
          name={element.componentName}
        />
      ) : (
        element.children.map((child, childIndex) => (
          <ElementListItemDraggable
            key={child.id}
            type={child.type}
            index={childIndex}
            moveItem={moveItem}
            id={child.id}
            onSelect={onSelect}
            onHover={onHover}
            onUnhover={onUnhover}
            name={element.componentName}
          />
        ))
      ),
    )}
  </StyledDiv>
);
