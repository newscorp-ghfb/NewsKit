import * as React from 'react';
import {<%= componentName %>} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled, getSizingFromTheme} from '../../utils/style';

const Container = styled.div`
  margin: ${getSizingFromTheme('sizing050')};
`;

export default {
  title: '<%= componentFileName %>',
  children: [ 
    {
      storyName: '<%=componentFileName %>',
      storyFn: () => (
        <React.Fragment>
          <StorybookHeading><%= componentName  %></StorybookHeading>
          <Container>
             <<%= componentName %>  />
          </Container>
          <Container>
             <<%= componentName %>> 
               this is a text 
             </<%= componentName %>>
          </Container>
        </React.Fragment>
      ),
    },
  ],
};
