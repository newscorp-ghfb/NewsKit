import React from 'react';
import {GridLayout} from 'newskit';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import _ from 'lodash';
import Layout from '../../components/layout';
import componentTypes from '../../../ok-types.json';
import {InspectorForm} from './editor-components/inspector';
import {SideBar} from './editor-components/sidebar';
import {MainEditor} from './editor-components/main-editor';

const EditorPage = layoutProps => {
  const [
    currentInspectedComponentId,
    setCurrentInspectedComponent,
  ] = React.useState(null);

  const [componentProps, setComponentProps] = React.useState({
    // key, value of props object
  });
  const [componentTree, setComponentTree] = React.useState([]);

  const onAdd = React.useCallback(
    item => {
      setComponentTree(prev => [...prev, {id: item.id, children: []}]);
      setComponentProps(prev => ({
        ...prev,
        [item.id]: item,
      }));
    },
    [setComponentTree],
  );

  const onSelected = React.useCallback(
    id => {
      console.log('on selected', id);
      setCurrentInspectedComponent(id);
    },
    [setCurrentInspectedComponent],
  );

  const onMove = React.useCallback(() => {
    console.log('TODO');
  });

  const onRemove = () => {};

  console.log({componentProps, componentTree});

  const currentInspectedItem = componentProps[currentInspectedComponentId];

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

  return (
    <DndProvider backend={HTML5Backend}>
      <Layout {...layoutProps} newPage hideSidebar>
        <GridLayout
          columns="150px auto 250px"
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
            />
          )}
        </GridLayout>
      </Layout>
    </DndProvider>
  );
};

export default EditorPage;
