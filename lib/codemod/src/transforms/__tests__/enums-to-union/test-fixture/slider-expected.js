import {Slider} from 'newskit';

const Component = () => (
  <Slider
    values={[50]}
    max={100}
    min={0}
    minLabel="0%"
    maxLabel="100%"
    thumbLabel
    labelPosition="after"
  />
);
