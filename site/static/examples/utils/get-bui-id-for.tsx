import {getBuiId} from 'newskit';

const uniqueId = getBuiId();
const jsxFieldset = (
  <fieldset>
    <input type="text" id={uniqueId} />
    <label htmlFor={uniqueId}>Text Field</label>
  </fieldset>
);
