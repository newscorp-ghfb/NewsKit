import * as React from 'react';
import {styled} from '../../../utils';
import {GridLayout} from '../../grid-layout';

const Item = styled.div`
  padding: 10px;
  border: 5px solid rgb(17, 105, 121);
  background-color: rgba(17, 105, 121, 0.1);
  border-radius: 5px;
  min-height: 100%;
  box-sizing: border-box;
`;

const areas = `
  header header header sidebar
  main main main sidebar
  footer footer footer sidebar
`;

const aresMobile = `
  header header header header
  main main main main
  sidebar sidebar sidebar sidebar
  footer footer footer footer
`;

// Named areas
export const Example3 = () => (
  <GridLayout
    areas={{xs: aresMobile, md: areas}}
    columns="repeat(4,1fr)"
    rows="100px 400px 50px"
  >
    {({Header, Footer, Main, Sidebar}) => (
      <>
        <Header>
          <Item>Header</Item>
        </Header>
        <Main>
          <Item>Main</Item>
        </Main>
        <Footer>
          <Item>Footer</Item>
        </Footer>
        <Sidebar>
          <Item>Siderbar</Item>
        </Sidebar>
      </>
    )}
  </GridLayout>
);
