import React, {useRef} from 'react';
import {useDrop, useDrag} from 'react-dnd';
import {ElementListItem} from './element-list-item';

const ITEM_TYPE = 'elementItem';

const ElementListItemDraggable = ({
  type,
  id,
  onSelect,
  moveItem,
  index,
  onHover,
  onUnhover,
  name,
}) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      // @ts-ignore
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      if (moveItem) {
        moveItem(dragIndex, hoverIndex);
      }
      // @ts-ignore
      item.index = hoverIndex;
    },
  });
  const [{isDragging}, drag] = useDrag({
    type: ITEM_TYPE,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  const onSelectElement = () => {
    onSelect(id);
  };

  const onMouseOver = () => {
    onHover(id);
  };

  return (
    <ElementListItem
      ref={ref}
      onSelect={onSelectElement}
      opacity={opacity}
      onMouseOver={onMouseOver}
      onMouseOut={onUnhover}
      type={type}
      draggable
      name={name}
    />
  );
};

export default ElementListItemDraggable;
