import React from 'react';
import {Block, TextBlock, IconButton, Stack, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import ElementListItemDraggable from './element-list-draggable';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

export const ElementsList = ({
  elements,
  moveItem,
  onSelect,
  onHover,
  onUnhover,
}) => (
  <>
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
        <>
          <Stack
            key={element.id}
            stackDistribution="space-between"
            flow="horizontal-center"
          >
            <TextBlock width="100%">{element.type}</TextBlock>
            <IconButton
              onClick={() => {
                onSelect(element.id);
              }}
            >
              <IconFilledInfo overrides={{size: 'iconSize010'}} />
            </IconButton>
          </Stack>
          {element.children.map((child, childIndex) => (
            <Block marginInlineStart="space030">
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
            </Block>
          ))}
        </>
      ),
    )}
  </>
);
