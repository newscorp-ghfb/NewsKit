import React from 'react';
import {<%= componentName %>Props} from './types';
import {styled, getSizingFromTheme} from '../utils/style';

const Container = styled.div<<%= componentName %>Props>`
margin: ${getSizingFromTheme('sizing050')};
text-transform: ${({uppercase}) => uppercase ? `uppercase` : null };
`;
  
export const  <%= componentName %>: React.FC<<%= componentName %>Props>  = (props) => {
  const {children="Hello World"} = props
  return (
    <Container {...props}>
      <div>{children}</div>
    </Container>
  );
}

<%= componentName %>.displayName = '<%= componentName %>';


