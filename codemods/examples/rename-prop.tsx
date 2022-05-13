import * as React from 'react';
import {RadioButton, Button} from 'newskit';

const Index = () => (
  <div>
    <Button>Click me</Button>
    <RadioButton
      value="1"
      onChange={e => console.log(e.target.value)}
      checked
    />
  </div>
);

export default Index;
