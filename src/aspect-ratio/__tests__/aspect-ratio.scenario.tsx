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
      name: '2:3 aspect ratio',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>2:3 ratio</StorybookHeading>
          <AspectRatio aspectRatio="2:3">
            <ChildContainer>2 by 3 aspect ratio</ChildContainer>
          </AspectRatio>
        </Container>
      ),
    },
    {
      name: '4:5 aspect ratio',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>4:5 aspect ratio</StorybookHeading>
          <AspectRatio aspectRatio="4:5">
            <ChildContainer>4 by 5 aspect ratio</ChildContainer>
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
      name: '2:3 aspect ratio with 1:1 image',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>2:3 aspect ratio with 1:1 image</StorybookHeading>
          <AspectRatio aspectRatio="2:3">
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
