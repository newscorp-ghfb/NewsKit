import React, {ChangeEvent, useEffect, useState} from 'react';
import {GridLayout, GridLayoutItem, TextField, Label} from 'newskit';
import {useAppState} from '../app-state-context';

const EditMetrics = () => {
  const {dispatch, state} = useAppState();

  const {metrics} = state;
  const [customMetrics, setCustomMetrics] = useState(metrics);

  useEffect(() => {
    dispatch({type: 'UPDATE_METRICS', metrics: customMetrics});
  }, [customMetrics, dispatch]);

  return (
    <GridLayout
      columns={{sm: '1fr', md: '1fr 1fr', xl: '1fr 1fr 1fr'}}
      rowGap="space040"
      columnGap="space040"
      overrides={{
        paddingBlock: 'space030',
      }}
    >
      <GridLayoutItem>
        <Label htmlFor="customAscent">Ascender</Label>
        <TextField
          id="customAscent"
          value={customMetrics.ascent}
          autoFocus
          type="number"
          onChange={(ev: ChangeEvent<HTMLInputElement>) => {
            setCustomMetrics({
              ...customMetrics,
              ascent: parseInt(ev.currentTarget.value, 10),
            });
          }}
        />
      </GridLayoutItem>
      <GridLayoutItem>
        <Label htmlFor="customCapHeight">Cap Height</Label>
        <TextField
          id="customCapHeight"
          value={customMetrics.capHeight}
          type="number"
          onChange={(ev: ChangeEvent<HTMLInputElement>) => {
            setCustomMetrics({
              ...customMetrics,
              capHeight: parseInt(ev.currentTarget.value, 10),
            });
          }}
        />
      </GridLayoutItem>
      <GridLayoutItem>
        <Label htmlFor="customDescent">Descender</Label>
        <TextField
          id="customDescent"
          value={customMetrics.descent}
          type="number"
          onChange={(ev: ChangeEvent<HTMLInputElement>) => {
            setCustomMetrics({
              ...customMetrics,
              descent: parseInt(ev.currentTarget.value, 10),
            });
          }}
        />
      </GridLayoutItem>
    </GridLayout>
  );
};

export default EditMetrics;
