import React from 'react';
import ElementListItemDraggable from './element-list-draggable';

export const ElementsList = ({
  elements,
  moveItem,
  onSelect,
  onHover,
  onUnhover,
}) => (
  <div style={{height: '100%'}}>
    {elements.map(
      (element, index) =>
        element && (
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
        ),
    )}
  </div>
);
