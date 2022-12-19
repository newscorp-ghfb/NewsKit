/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {GridLayout, TextBlock} from 'newskit';
import {useDrag} from 'react-dnd';
import componentTypes from '../../../../ok-types.json';

const availableComponents = Object.keys(componentTypes);
export const SideBar = () => (
  <GridLayout rowGap="space020">
    {availableComponents.map(name => (
      <DragItem name={name} />
    ))}
  </GridLayout>
);

const DragItem = ({name}) => {
  const [, drag] = useDrag({
    type: 'component',
    item: {component: name, name},
  });
  return <TextBlock ref={drag}>{name}</TextBlock>;
};
