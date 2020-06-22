import * as React from 'react';
import {<%= componentName %>} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled, getSizingFromTheme} from '../../utils/style';

const Container = styled.div`
  margin: ${getSizingFromTheme('sizing050')};
`;

export default {
  name: '<%= componentFileName %>',
  children: [ 
    {
      name: '<%=componentFileName %>',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading><%= componentName %></StorybookHeading>
          <Container>
             <<%= componentName %> />
          </Container>
          <Container>
             <<%= componentName %> uppercase />
          </Container>
        </React.Fragment>
      ),
    },
  ],
};
