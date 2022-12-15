import React from 'react';
import * as newskit from 'newskit';
import {useDrop} from 'react-dnd';
import _ from 'lodash';

const {GridLayout, TextBlock, styled} = newskit;

const Main = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid gray;
`;

const defaultProps = {
  Button: {
    children: 'Button',
  },
  Flag: {
    children: 'Flag',
  },
  Label: {
    children: 'Label',
  },
  Image: {
    src: 'https://picsum.photos/120/120',
  },
  TextBlock: {
    children: 'TextBlock',
  },
  Paragraph: {
    children: 'Paragraph',
  },
  Headline: {
    children: 'Headline',
  },
  TitleBar: {
    children: 'TitleBar',
  },
  Tag: {
    children: 'Tag',
  },
};

let id = 1;
const getId = () => ++id;

export const MainEditor = ({onAdd, onSelected, onMove, data, tree}) => {
  const [{isOver}, drop] = useDrop(() => ({
    accept: 'component',
    drop: item => {
      console.log({item});
      onAdd({...item, id: getId(), props: defaultProps[item.component] || {}});
    },
  }));

  return (
    <Main ref={drop}>
      {tree.map(({id}) => {
        const item = data[id];
        return <ComponentPreview {...item} onSelected={onSelected} />;
      })}
    </Main>
  );
};

const ComponentPreview = ({component, props, onSelected, id}) => {
  const Component = newskit[component];
  const ref = React.useRef();

  const onClickHandler = React.useCallback(() => {
    // send event to edit component prop
    onSelected(id);
  }, [id, onSelected]);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('click', onClickHandler);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('click', onClickHandler);
      }
    };
  }, [ref, onClickHandler]);

  return <Component {...props} ref={ref} />;
};
