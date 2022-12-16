import React from 'react';
import {GridLayout, useTheme} from 'newskit';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import _ from 'lodash';
import Layout from '../../components/layout';
import componentTypes from '../../../ok-types.json';
import {InspectorForm} from './editor-components/inspector';
import {SideBar} from './editor-components/sidebar';
import {MainEditor} from './editor-components/main-editor';
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
          {/* <Accordion
            header="Children"
            max-height="100%"
            expanded={expanded}
            onClick={() => toggleExpanded(!expanded)}
          >
            <ElementsList
              elements={componentTree}
              moveItem={onMove}
              onSelect={onSelected}
              onHover={onHoverChild}
              onUnhover={onUnhoverChild}
            />
          </Accordion> */}
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
