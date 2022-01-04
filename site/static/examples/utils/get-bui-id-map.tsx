import {getBuiId} from 'newskit';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => <li key={getBuiId()}>{number}</li>);
