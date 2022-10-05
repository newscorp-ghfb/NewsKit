import * as React from 'react';
import {Visible, Hidden} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';

const Container = styled.span<{color: string}>`
  display: inline-block;
  padding: 40px;
  font-size: 48px;
  background: ${({color}) => color};
  border: solid 1px black;
`;

export default {
  title: 'Components/visibility',
  component: () => 'None',
};

export const StoryVisibilityComponent = () => (
  <>
    <StorybookHeading>Visibility component</StorybookHeading>
    <Visible display="inline-block" xs>
      <Container color="green">xs</Container>
    </Visible>
    <Hidden display="inline-block" xs>
      <Container color="silver">xs</Container>
    </Hidden>

    <Visible display="inline-block" sm>
      <Container color="green">sm</Container>
    </Visible>
    <Hidden display="inline-block" sm>
      <Container color="silver">sm</Container>
    </Hidden>

    <Visible display="inline-block" md>
      <Container color="green">md</Container>
    </Visible>
    <Hidden display="inline-block" md>
      <Container color="silver">md</Container>
    </Hidden>

    <Visible display="inline-block" lg>
      <Container color="green">lg</Container>
    </Visible>
    <Hidden display="inline-block" lg>
      <Container color="silver">lg</Container>
    </Hidden>

    <Visible display="inline-block" xl>
      <Container color="green">xl</Container>
    </Visible>
    <Hidden display="inline-block" xl>
      <Container color="silver">xl</Container>
    </Hidden>
  </>
);
StoryVisibilityComponent.storyName = 'visibility-component';
