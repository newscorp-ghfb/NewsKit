/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {GridLayout} from 'newskit';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import _ from 'lodash';
import Layout from '../../components/layout';
import componentTypes from '../../../ok-types.json';
import {InspectorForm} from './editor-components/inspector';
import {SideBar} from './editor-components/sidebar';
import {MainEditor, getId} from './editor-components/main-editor';
import {DataLists} from './editor-components/datalits';

const EditorPage = layoutProps => {
  const [
    currentInspectedComponentId,
    setCurrentInspectedComponent,
  ] = React.useState(null);

  const [hoverId, setHoverId] = React.useState(null);

  const [componentProps, setComponentProps] = React.useState({
    // key, value of props object
  });
  const [componentTree, setComponentTree] = React.useState([]);

  const onAdd = React.useCallback(
    item => {
      console.log('on add', item);

      const elementItem = {
        id: item.id,
        children: [],
        type: item.name,
        parentID: item.parentID || undefined,
      };
      if (item.parentID) {
        setComponentTree(prev => {
          insertItemInPlace(elementItem, prev);
          return prev;
        });
      } else {
        setComponentTree(prev => [...prev, elementItem]);
      }

      setComponentProps(prev => ({
        ...prev,
        [item.id]: item,
      }));
    },
    [setComponentTree, setComponentProps],
  );

  const onSelected = React.useCallback(
    id => {
      console.log('on selected', id);
      setCurrentInspectedComponent(id);
    },
    [setCurrentInspectedComponent],
  );

  const onHoverChild = React.useCallback(
    id => {
      console.log('on hover', id);
      setHoverId(id);
    },
    [setHoverId],
  );

  const onUnhoverChild = React.useCallback(() => {
    // console.log('on unhover', id);
    setHoverId(undefined);
  }, [setHoverId]);

  const currentInspectedItem = componentProps[currentInspectedComponentId];

  const onMove = React.useCallback(
    (fromIndex, toIndex) => {
      console.log('on Move', fromIndex, toIndex);
      // const selectedComponent = componentTree[currentInspectedComponentId];

      componentTree.splice(toIndex, 0, componentTree.splice(fromIndex, 1)[0]);
    },
    [componentTree],
  );

  const onSubmit = formData => {
    setComponentProps(
      prev => {
        const props = _.omitBy(formData, v => v === '');
        return {
          ...prev,
          [currentInspectedComponentId]: {
            ...currentInspectedItem,
            props,
          },
        };
      },
      [currentInspectedItem, currentInspectedComponentId],
    );
  };

  const onRemove = React.useCallback(
    id => {
      console.log('remove ', id);

      setComponentTree(prev => deleteItemInPlace(id, prev));

      setComponentProps(prev => {
        delete prev[id];
        return {...prev};
      });
    },
    [setComponentTree, setComponentProps],
  );

  const onClone = React.useCallback(id => {
    console.log('clone ', id);
    const newId = getId();
    setComponentProps(prev => ({
      ...prev,
      [newId]: {...prev[id]},
    }));
    setComponentTree(prev => cloneItemInPlace(id, prev, newId));
  });

  const inspectorRows =
    currentInspectedItem &&
    currentInspectedItem.component &&
    componentTypes[currentInspectedItem.component];

  console.log('render', {componentTree, componentProps});

  return (
    <DndProvider backend={HTML5Backend}>
      <Layout {...layoutProps} newPage hideSidebar>
        <GridLayout
          columns="150px auto  250px"
          overrides={{paddingInline: '30px'}}
          columnGap="20px"
        >
          <SideBar />
          <MainEditor
            onAdd={onAdd}
            onSelected={onSelected}
            onMove={onMove}
            tree={componentTree}
            data={componentProps}
          />
          {inspectorRows && (
            <InspectorForm
              name={currentInspectedItem.id + currentInspectedItem.component}
              rows={inspectorRows}
              values={currentInspectedItem.props}
              onSubmit={onSubmit}
              elements={componentTree}
              moveItem={onMove}
              onSelect={onSelected}
              onHover={onHoverChild}
              onUnhover={onUnhoverChild}
              onRemove={onRemove}
              onClone={onClone}
              inspectId={currentInspectedComponentId}
            />
          )}
        </GridLayout>
        <DataLists />
      </Layout>
    </DndProvider>
  );
};

export default EditorPage;

const insertItemInPlace = (placeItem, list = []) => {
  for (let index = 0; index < list.length; index++) {
    if (list[index].id === placeItem.parentID) {
      console.log('add now');
      list[index].children.push(placeItem);
      return list;
    }
    if (list[index].children) {
      insertItemInPlace(placeItem, list[index].children);
    }
  }
  return list;
};

const deleteItemInPlace = (id, list) =>
  list.filter(item => {
    item.children = deleteItemInPlace(id, item.children);
    return item.id !== id;
  });

const cloneItemInPlace = (id, list, newId) =>
  list.reduce((prev, item) => {
    const children = cloneItemInPlace(id, item.children, newId);

    const itemTransformed = {
      ...item,
      children,
    };

    if (itemTransformed.id === id) {
      const newItem = {...itemTransformed, id: newId};
      return [...prev, itemTransformed, newItem];
    }
    return [...prev, itemTransformed];
  }, []);
