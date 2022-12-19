/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-use-before-define */
import {useTheme} from 'newskit';
import React from 'react';

export const DataLists = () => {
  const theme = useTheme();
  return (
    <>
      {['stylePresets', 'typographyPresets', 'spacePresets', 'sizing'].map(
        key => {
          const themeKeys = theme[key];
          return <DataList list={Object.keys(themeKeys)} id={`list-${key}`} />;
        },
      )}
    </>
  );
};

const DataList = ({list, id}) => (
  <datalist id={id}>
    {list.map(value => (
      <option value={value}>{value}</option>
    ))}
  </datalist>
);
