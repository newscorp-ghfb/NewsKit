import * as React from 'react';
import {RadioButton, Button} from 'newskit';

const Index = () => (
  <div>
    <Button>Click me</Button>
    <RadioButton
      overrides={{
        spaceStack: 'space050',
        input: {
          spaceInline: 'space020',
        },
      }}
    />
  </div>
);

export default Index;
