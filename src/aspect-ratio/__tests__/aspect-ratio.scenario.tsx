import * as React from 'react';
import {AspectRatio} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ChildContainer = styled.div`
  width: 98%;
  height: 98%;
  border: dashed red;
`;

export default {
  name: 'aspect-ratio',
  children: [
    {
      name: '1:1 aspect ratio',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>1:1 aspect ratio</StorybookHeading>
          <AspectRatio aspectRatio="1:1">
            <ChildContainer>1 by 1 aspect ratio</ChildContainer>
          </AspectRatio>
        </Container>
      ),
    },
    {
      name: '3:2 aspect ratio',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>3:2 ratio</StorybookHeading>
          <AspectRatio aspectRatio="3:2">
            <ChildContainer>3 by 2 aspect ratio</ChildContainer>
          </AspectRatio>
        </Container>
      ),
    },
    {
      name: '5:4 aspect ratio',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>5:4 aspect ratio</StorybookHeading>
          <AspectRatio aspectRatio="5:4">
            <ChildContainer>5 by 4 aspect ratio</ChildContainer>
          </AspectRatio>
        </Container>
      ),
    },
    {
      name: '1:1 aspect ratio with 3:2 image',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>1:1 aspect ratio with 3:2 image</StorybookHeading>
          <AspectRatio aspectRatio="1:1">
            <img
              src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
              alt="3:2 test"
              height="400px"
              width="600px"
            />
          </AspectRatio>
        </Container>
      ),
    },
    {
      name: '3:2 aspect ratio with 1:1 image',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>3:2 aspect ratio with 1:1 image</StorybookHeading>
          <AspectRatio aspectRatio="3:2">
            <img
              src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-1-1.png"
              alt="1:1 test"
              height="600px"
              width="600px"
            />
          </AspectRatio>
        </Container>
      ),
    },
  ],
};
