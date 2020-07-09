import React from 'react';
import {<%= componentName %>Props} from './types';
import {styled, getSizingFromTheme} from '../utils/style';

const Container = styled.div<<%= componentName %>Props>`
  margin: ${getSizingFromTheme('sizing050')};
`;

export const  <%= componentName %>: React.FC<<%= componentName %>Props>  = (props) => {
  const {children="Hello Newskit"} = props
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}

<%= componentName %>.displayName = '<%= componentName %>';
