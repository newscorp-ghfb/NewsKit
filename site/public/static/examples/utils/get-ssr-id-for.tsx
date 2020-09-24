import {getSSRId} from 'newskit';

const uniqueId = getSSRId();
const jsxFieldset = (
  <fieldset>
    <input type="text" id={uniqueId} />
    <label htmlFor={uniqueId}>Text Field</label>
  </fieldset>
);
